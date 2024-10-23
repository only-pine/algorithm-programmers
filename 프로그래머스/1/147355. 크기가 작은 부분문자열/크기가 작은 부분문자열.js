function solution(t, p) {
    const numStr = [];
    
    for (let index = 0; index <= t.length - p.length; index++) {
        numStr.push(t.slice(index, index + p.length));
    }

    return numStr.filter((num) => num <= p).length;
}