function solution(new_id) {
    let recommendedId = new_id;
    
    //1단계
    recommendedId = recommendedId.toLowerCase();
    
    //2단계
    const recommendedIdArray = Array.from(recommendedId);
    const filteredArray = recommendedIdArray.filter((char, index) => {
        if (char === char.toUpperCase() && 
            Number.isNaN(Number(char)) && 
            char !== '-' && 
            char !== '_' && 
            char !== '.') {
            return false;
        }
        
        return char;
    })
    
    //3단계
    const deletedIndexArray = [];
    for (let index = 0; index < filteredArray.length; index++) {
      let subIndex = 1;
      
      if (filteredArray[index] === '.') {
        while (filteredArray[index] === filteredArray[index + subIndex]) {
          subIndex++;
        }
        
        if (subIndex > 1) {
            deletedIndexArray.unshift([index, index + subIndex]);
            index = index + subIndex - 1;
        }
      }
    }
    
    for (const deletedIndex of deletedIndexArray) {
        const [first, second] = [...deletedIndex];
        filteredArray.splice(first, second - first - 1);
    }
    
    recommendedId = filteredArray.join('');

    //4단계
    if (recommendedId.at(0) === '.') {
        recommendedId = recommendedId.slice(1);
    }
    
    if (recommendedId.at(recommendedId.length - 1) === '.') {
        recommendedId = recommendedId.slice(0, recommendedId.length - 1);
    }
    
    //5단계
    if(recommendedId === '') {
        recommendedId = 'a';
    }
    
    //6단계
    if (recommendedId.length > 15) {
        recommendedId = recommendedId.slice(0, 15);
        
        if (recommendedId.endsWith('.')){
            recommendedId = recommendedId.slice(0, 14);
        }
    }
    
    //7단계
    if (recommendedId.length <= 2) {
        const lastChar = recommendedId[recommendedId.length - 1];
        recommendedId = recommendedId.padEnd(3, lastChar);
    }
    
    return recommendedId;
}