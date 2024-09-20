function solution(numbers) {
    let totalSum = 0;
    for (let index = 1; index < 10; index++) {
        totalSum += index;
    }
    
    let numbersSum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    return totalSum - numbersSum;
}