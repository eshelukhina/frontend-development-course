/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет", 
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    const outputArray = [];

    for (let index = 0; index < array.length; index++) {
        const currentElement = array[index];
        const shouldInclude = filterFn(currentElement, index, array);
        if (shouldInclude) {
            outputArray.push(currentElement);
        }
    }

    if (inplace) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (!filterFn(array[i], i, array)) {
                array.splice(i, 1);
            }
        }
        return array;
    }

    return outputArray;
};