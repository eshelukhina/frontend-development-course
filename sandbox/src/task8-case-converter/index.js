/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    let result = '';
    let toUpperCase = false;

    for (let i = 0; i < snakeCaseString.length; i++) {
        if (snakeCaseString[i] === '_') {
            toUpperCase = true;
        } else {
            if (toUpperCase) {
                result += snakeCaseString[i].toUpperCase();
                toUpperCase = false;
            } else {
                result += snakeCaseString[i].toLowerCase();
            }
        }
    }

    return result;
};