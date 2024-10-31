export const solutionFn = (numbers) => {
    return numbers.reduce((sum, number) => {
        return number % 2 === 0 ? sum + number : sum;
    }, 0);
};