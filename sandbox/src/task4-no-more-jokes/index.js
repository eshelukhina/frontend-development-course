/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    const isAValidNumber = typeof leftOperand === 'number' && !isNaN(leftOperand);
    const isBValidNumber = typeof rightOperand === 'number' && !isNaN(rightOperand);

    if (isAValidNumber && isBValidNumber) {
        return leftOperand + rightOperand;
    } else if (!isAValidNumber && !isBValidNumber) {
        throw new Error("Operands are not numbers");
    } else if (!isAValidNumber) {
        throw new Error("The left operand is not number");
    } else {
        throw new Error("The right operand is not number");
    }
};