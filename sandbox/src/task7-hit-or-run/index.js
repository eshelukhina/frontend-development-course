/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
    const isPrime = num => num > 1 && Array.from(
        { length: Math.sqrt(num) }, (_, i) => i + 2
    )
        .every(i => num % i !== 0);
    const result = isPrime(randomNum) ? 'run' : 'hit'

    return result;
};