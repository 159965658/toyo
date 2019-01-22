//date.js
const formatDate = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => { //data 为空 type = 1 type 0 时间戳 1时间对象 2时间字符串
    if (!date) { //时间等于null 
        date = new Date();
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}

const padLeftZero = (str) => {
    return ('00' + str).substr(str.length);
};


export default formatDate;