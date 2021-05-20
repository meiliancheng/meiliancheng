// function find(list, f) {
//     return list.filter(f)[0];
// }

// function deepCopy(obj, cache = []) {
//     if (obj === null || typeof obj !== "object") {
//         return obj;
//     }
//     const hid = find(cache, (c) => c.original === obj);
//     console.log(hid);
//     if (hid) {
//         console.log(111);
//         return hid.copy;
//     }
//     const copy = Array.isArray(obj) ? [] : {};

//     cache.push({
//         original: obj,
//         copy,
//     });

//     Object.keys(obj).forEach((key) => {
//         copy[key] = deepCopy(obj[key], cache);
//     });
//     return copy;
// }

// // console.log(
// //     deepCopy({
// //         name: "zhangsan",
// //         fun: function add(a, b) {
// //             return a + b;
// //         },
// //     })
// // );
// console.log(deepCopy([1, 3, "name"]));

// function deepClone(source) {
//     const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
//     for (let keys in source) {
//         // 遍历目标
//         if (source.hasOwnProperty(keys)) {
//             if (source[keys] && typeof source[keys] === "object") {
//                 // 如果值是对象，就递归一下
//                 targetObj[keys] = source[keys].constructor === Array ? [] : {};
//                 targetObj[keys] = deepClone(source[keys]);
//             } else {
//                 // 如果不是，就直接赋值
//                 targetObj[keys] = source[keys];
//             }
//         }
//     }
//     return targetObj;
// }

// const originObj = { a: "a", b: "b", c: [1, 2, 3], d: { dd: "dd" } };
// const cloneObj = deepClone(originObj);
// console.log(cloneObj); // false

// cloneObj.a = "aa";
// cloneObj.c = [1, 1, 1];
// cloneObj.d.dd = "doubled";

// console.log(cloneObj); // {a:'aa',b:'b',c:[1,1,1],d:{dd:'doubled'}};
// console.log(originObj); // {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};

let obj = {
    name: "zhnasan",
    age: 18,
    Headbar: {
        name: "lisi",
        age: "15",
    },
    arr: [1, 2, 3, 4, 5],
    arr2: [
        "xiaohong",
        {
            name: "libai",
        },
    ],
};

//浅拷贝
//扩展运算符
// obj.name = "haoerzi";
// obj.arr2[1] = "xiaohua";
let obj2 = { ...obj };
//es6 Object.assign()
let objwo = Object.assign({}, obj);
// console.log(obj);
// {
//     name: 'haoerzi',
//     age: 18,
//     Headbar: { name: 'lisi', age: '15' },
//     arr: [ 1, 2, 3, 4, 5 ],
//     arr2: [ 'xiaohong', 'xiaohua' ]
//   }

//
// 浅拷贝的弊端
// 就是当你修改里面的属性的时候,例如一个对象里面的原来的name是张三经过修改name：李四,浅拷贝的里面的name也会
// 随着改变 两个变量引用同一个地址，导致修改一个变量另一个变量也会发生改变。

//手动实现深拷贝
function deepClone(obj) {
    //判断传入obj的数据类型
    let type = Object.prototype.toString.call(obj);
    //使用switch case 进行判断
    switch (type) {
        //如果是对象 就是用 for in 循环
        case "[object Object]":
            let newObj = {};

            for (let keys in obj) {
                newObj[keys] = deepClone(obj[keys]);
            }
            return newObj;
        //如果obj 数组 就去遍历他 item中可能还有对象 所以再次进行递归
        case "[object Array]":
            return obj.map((item) => deepClone(item));
        default:
            return obj;
    }
}
let newobj = deepClone(obj);

obj.name = "haoerzi";
obj.arr2[1] = "xiaohua";

console.log(newobj, "newobj...");
