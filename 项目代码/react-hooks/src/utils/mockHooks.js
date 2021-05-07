const hooks = (function () {
    const HOOKS = [];
    let currentIndex = 0;
    const Tick = {
        render: null,
        queue: [],
        push: function (task) {
            this.queue.push(task);
        },
        nextTick: function (update) {
            this.queue.push(update);
            Promise.resolve(() => {
                if (this.queue.length) {
                    // 一次循环后，全部出栈，确保单次事件循环不会重复渲染
                    this.queue.forEach((f) => f()); // 依次执行队列中所有任务
                    currentIndex = 0; // 重置计数
                    this.queue = []; // 清空队列
                    this.render && this.render(); // 更新dom
                }
            }).then((f) => f());
        },
    };
    function useState(initialState) {
        HOOKS[currentIndex] =
            HOOKS[currentIndex] ||
            (typeof initialState === "function"
                ? initialState()
                : initialState); //判断传入initialState是函数就返回函数，不是就返回initialState
        const memoryCurrentIndex = currentIndex; // currentIndex 是全局可变的，需要保存本次的

        const setState = (p) => {
            let newState = p;
            if (typeof p === "function") {
                newState = p(HOOKS[memoryCurrentIndex]);
            }
            if (newState === HOOKS[memoryCurrentIndex]) return;
            Tick.nextTick(() => {
                HOOKS[memoryCurrentIndex] = newState;
            });
        };
        return [HOOKS[currentIndex++], setState];
    }

    function useEffect(fn, deps) {
        const hook = HOOKS[currentIndex];
        // console.log(currentIndex);
        const _deps = hook && hook._deps;
        // console.log(_deps);
        const hasChange = _deps ? !deps.every((v, i) => _deps[i] === v) : true;
        console.log(deps);
        const memoryCurrentIndex = currentIndex;
        // console.log(memoryCurrentIndex);
        if (hasChange) {
            const _effect = hook && hook._effect;
            // console.log(_effect);
            setTimeout(() => {
                typeof _effect === "function" && _effect(); // 每次先判断一下有没有上一次的副作用需要卸载
                const ef = fn();
                HOOKS[memoryCurrentIndex] = {
                    ...HOOKS[memoryCurrentIndex],
                    _effect: ef,
                }; // 更新effects
            });
        }
        HOOKS[currentIndex++] = { _deps: deps, _effect: null };
        console.log(HOOKS);
    }

    return {
        useState,
        Tick,
        useEffect,
    };
})();

export default hooks;
