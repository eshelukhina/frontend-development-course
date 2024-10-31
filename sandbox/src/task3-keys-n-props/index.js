/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const typeCountMap = {};

    Object.keys(obj).forEach((key) => {
        const valueType = typeof obj[key];
        typeCountMap[valueType] = (typeCountMap[valueType] || 0) + 1;
    });

    return typeCountMap;
};