/**
 * 获取数据类型
 * @param data
 * @returns {String}
 */
export function dataType(data) {
    const type = {
        "[object String]": "string",
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Null]": "null",
        "[object Number]": "number",
        "[object Undefined]": "undefined",
        "[object Boolean]": "boolean",
        "[object Function]": "function"
    };
    const resType = Object.prototype.toString.call(data);
    return type[resType];
}

/**
 * 判断是否是字符串类型
 * @param data
 * @returns {Boolean}
 */
 export function isString(data) {
    return dataType(data) === "string";
  }
  
  /**
   * 判断是否是数组类型
   * @param data
   * @returns {Boolean}
   */
  export function isArray(data) {
    return dataType(data) === "array";
  }
  
  /**
   * 判断是否是对象类型
   * @param data
   * @returns {Boolean}
   */
  export function isObject(data) {
    return dataType(data) === "object";
  }
  
  /**
   * 判断是否是null类型
   * @param data
   * @returns {Boolean}
   */
  export function isNull(data) {
    return dataType(data) === "null";
  }
  
  /**
   * 判断是否是数字类型
   * @param data
   * @returns {Boolean}
   */
  export function isNumber(data) {
    return dataType(data) === "number";
  }
  
/**
 * 判断一个对象中是否包含某个属性
 * @param {要判断的对象} obj
 * @param {判断的对象属性} p
 */
export function isHasOwnProperty(obj, p) {
    if (dataType(obj) !== "object") {
        return false;
    }
    return obj.hasOwnProperty(p)
}
/**
 * 判断是否是json字符串
 * @param {string}  str  -  字符串
 */
export function isJSON(str) {
    if (typeof str == "string") {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == "object" && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
}