function solution(today, terms, privacies) {
    var answer = [];
    const termsObject = {};
    const todayStr = today.split('.');
    const todayDate = new Date(todayStr);
    todayDate.setDate(todayDate.getDate() + 1);
  
    terms.forEach((term) => {
        const termArray = term.split(' ');
        termsObject[termArray[0]] = termArray[1];
    })

    privacies.forEach((privacy, index) => {
      const privacyArray = privacy.split(' ');
      const privacyStartDate = privacyArray[0].split('.');
      const privacyEndDate = new Date(privacyArray[0]);
      privacyEndDate.setMonth(privacyEndDate.getMonth() + parseInt(termsObject[privacyArray[1]]));

      if(privacyEndDate < todayDate) {
        answer.push(index + 1);
      }
    })
    
    return answer;
}