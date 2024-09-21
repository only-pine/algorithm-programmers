function solution(price, money, count) {
    /* 첫번째 방법
    let index = 1;
    let sum = 0;
    
    while (index <= count) {
        sum += price * index; 
        index++;
    }
    */
    
    // 두번째 방법
    const sum = Array(count).fill(0).map((a, b) => b + 1).reduce((acc, cur) => acc + (price * cur), 0);

    return sum - money > 0 ? sum - money : 0;
}