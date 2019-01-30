
export default (img) => { //data 为空 type = 1 type 0 时间戳 1时间对象 2时间字符串 
    if (img) {
        return img;
    }
    return 'http://img2.imgtn.bdimg.com/it/u=3846895839,2711067435&fm=26&gp=0.jpg';
}