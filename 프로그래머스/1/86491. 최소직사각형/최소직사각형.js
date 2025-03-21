function solution(sizes) {
    const array = sizes.map(([a, b]) => (a >= b) ? [a, b] : [b, a]);
    
    let maxWidth = 0, maxHeight = 0;
    
    for (const [width, height] of array) {
        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    }
    
    return maxWidth * maxHeight;
}