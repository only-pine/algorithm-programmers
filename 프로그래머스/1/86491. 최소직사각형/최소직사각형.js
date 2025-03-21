function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (const [width, height] of sizes) {
        let maxValue = Math.max(width, height);
        let minValue = Math.min(width, height);
        
        maxWidth = Math.max(maxWidth, maxValue);
        maxHeight = Math.max(maxHeight, minValue);
    }
    
    return maxWidth * maxHeight;
}