import {isObject} from "./dataType"
/**
 * 深度克隆对象、数组
 * @param obj 被克隆的对象
 * @return 克隆后的对象
 */
export function cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * 增强CSS，可以在页面上输出全局css
 * @param css 要增强的css 字符串
 * @param id style标签的id，可以用来清除旧样式
 */
export function cssExpand(css, id) {
    let style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `@charset "UTF-8"; ${css}`;
    // 清除旧样式
    if (id) {
        let $style = document.getElementById(id);
        if ($style != null) $style.outerHTML = "";
        style.id = id;
    }
    // 应用新样式
    document.head.appendChild(style);
}
/**
* 判断是否IOS环境
* @returns Boolean
*/
export function isIOS() {
    let isIphone = navigator.userAgent.includes("iPhone");
    let isIpad = navigator.userAgent.includes("iPad");
    return isIphone || isIpad;
}
/**
 * 判断是否安卓环境
 * @returns Boolean
 */
export function isAndroid() {
    const u = navigator.userAgent;
    return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
}

/**
* 判断是否微信端环境
* @returns Boolean
*/
export function isWeChat() {
    const ua = navigator.userAgent.toLowerCase();
    let isWX = "";
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        // 微信端
        isWX = true;
    } else {
        // 非微信端
        isWX = false;
    }
    return isWX;
}
/**
 * 将url参数转化为对象
 * @param {*} url
 * @returns Object
 */
export function splitQueryString(url) {
    // 非空判断
    if (!url) return;
    //对url地址进行分割
    const temp1 = url.split("?");
    const pram = temp1[1];
    const keyValue = pram.split("&");
    let obj = {};
    //循环分割挂过后的地址
    for (let i = 0; i < keyValue.length; i++) {
        let item = keyValue[i].split("=");
        let key = item[0];
        let value = item[1];
        obj[key] = value;
    }
    return obj;
}
/**
 * 将对象转化为url参数
 * @param {*} obj
 * @returns String
 */
export function joinQueryObject(obj = {}) {
    // 非空判断
    if (!isObject(obj)) return;
    let arr = [];
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
        }
    }
    return arr.join("&");
}
