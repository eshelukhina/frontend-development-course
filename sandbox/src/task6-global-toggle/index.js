/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const classes = document.querySelectorAll(`.${className}, .${className}_active`);

    if (classes.length === 0) {
        return;
    }

    classes.forEach((inline) => {
        if (inline.classList.contains(`${className}_active`)) {
            inline.classList.remove(`${className}_active`);
            inline.classList.add(className);
        } else if (inline.classList.contains(className)) {
            inline.classList.remove(className);
            inline.classList.add(`${className}_active`);
        }
    });
};