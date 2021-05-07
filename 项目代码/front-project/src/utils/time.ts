function pluralize(time: number, label: string) {
    if (time === 1) {
        return time + label
    }
    return time + label
}

/**
 * @param {number} time
 */
export function timeAgo(time: number) {
    const between = Date.now() / 1000 - Number(time) / 1000
    if (between < 3600) {
        return pluralize(~~(between / 60), '分钟')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), '小时')
    } else if (between < 2073600) {
        return pluralize(~~(between / 86400), '天')
    } else if (between < 62208000) {
        return pluralize(~~(between / 2073600), '月')
    } else {
        return pluralize(~~(between / 62208000), '年')

    }
}

export function computeTime(time: string): string {
    let nowTime = new Date().getTime()
    let createTime = new Date(time).getTime()
    let comTime = nowTime - createTime
    if (comTime <= 1000 * 60) return '1分钟前'
    if (comTime < 1000 * 60 * 60) return Math.floor(comTime / 1000 / 60) + '分钟前'
    if (comTime < 1000 * 60 * 60 * 24) return Math.floor(comTime / 1000 / 60 / 60) + '小时前'
    if (comTime < 1000 * 60 * 60 * 24 * 30) return Math.floor(comTime / 1000 / 60 / 60 / 24) + '天前'
    if (comTime < 1000 * 60 * 60 * 24 * 365) return Math.floor(comTime / 1000 / 60 / 60 / 24 / 30) + '月前'
    return Math.floor(comTime / 1000 / 60 / 60 / 24 / 365) + '年前'

}