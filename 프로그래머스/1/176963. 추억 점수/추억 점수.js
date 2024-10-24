function solution(name, yearning, photo) {
    const answer = [];
    
    photo.forEach((array) => {
        let sum = 0;
        
        for (const element of array) {
            sum += name.indexOf(element) > -1 ? yearning[name.indexOf(element)] : 0;
        }
        
        answer.push(sum);
    })

    return answer;
}