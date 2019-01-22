import formatDate from './date.js'
export default (sdate, fmt = 'yyyy-MM-dd hh:mm:ss') => { //data 为空 type = 1 type 0 时间戳 1时间对象 2时间字符串 
    if (sdate) {
        const date = new Date(sdate);
        return formatDate(date, fmt);
    }
    return null;
}