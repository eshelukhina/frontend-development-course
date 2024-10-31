/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc * Number(digit), 1);
    }
    
    return num;
};