function solution(friends, gifts) {
    var answer = 0;
    const copiedFriends = friends.slice();
    const copiedGifts = gifts.slice();
    const object = {};
    
    copiedFriends.forEach((friend) => {
        object[friend] = {};
        object[friend]['sendGiftCount'] = 0;
        object[friend]['receivedGiftCount'] = 0;
        object[friend]['giftCount'] = 0;
      
        friends.forEach((each) => {
          if (friend !== each) {
            object[friend][each] = 0;
          }
        })
        
        copiedGifts.forEach((gift) => {
            const giftArray = gift.split(' ');
            
            if (giftArray[0] === friend) {
                object[friend][giftArray[1]] = 
                  object[friend][giftArray[1]] === 0 ? 1 : object[friend][giftArray[1]] + 1;
                object[friend]['sendGiftCount'] += 1; 
            }
            
            if (giftArray[1] === friend) {
                object[friend]['receivedGiftCount'] += 1; 
            }
        })
        
        object[friend]['giftPercent'] = 
            object[friend]['sendGiftCount'] - object[friend]['receivedGiftCount'];
    })
    
    for (let index = 0; index < friends.length - 1; index++) {
        const indexFriend = object[friends[index]];
        
        for (let subIndex = index + 1; subIndex < friends.length; subIndex++) {
            if (friends[index] === friends[subIndex]) {
                continue;
            }
          
            const subIndexFriend = object[friends[subIndex]];
            
            //서로 주고 받은 내역이 있는 경우
            if (indexFriend[friends[subIndex]] !== 0 ||
               subIndexFriend[friends[index]] !== 0) {
                //index가 subIndex에게 선물 준 경우가 더 많은 경우
                if(indexFriend[friends[subIndex]] > subIndexFriend[friends[index]]) {
                    indexFriend['giftCount'] += 1;
                } 
                //subIndex가 index에게 선물 준 경우가 더 많은 경우
                else if (indexFriend[friends[subIndex]] < subIndexFriend[friends[index]]){
                    subIndexFriend['giftCount'] += 1;
                } 
                //index와 subIndex가 서로 동일하게 선물 준 경우
                else {
                    //index의 선물 지수가 subIndex의 선물 지수보다 큰 경우
                    if (indexFriend['giftPercent'] > subIndexFriend['giftPercent']) {
                        indexFriend['giftCount'] += 1;
                    } 
                    //subIndex의 선물 지수가 index의 선물 지수보다 큰 경우
                    else if (indexFriend['giftPercent'] < subIndexFriend['giftPercent']){
                        subIndexFriend['giftCount'] += 1;
                    }
                }
            } 
            //서로 주고 받은 내역이 없는 경우
            else if (indexFriend[friends[subIndex]] === 0 &&
               subIndexFriend[friends[index]] === 0) {
                if (indexFriend['giftPercent'] > subIndexFriend['giftPercent']) {
                    indexFriend['giftCount'] += 1;
                } else if (indexFriend['giftPercent'] < subIndexFriend['giftPercent']){
                    subIndexFriend['giftCount'] += 1;
                }
            }
        }
        
        answer = Math.max(answer, indexFriend['giftCount']);
    }
    
    return answer;
}

/*
1. 두사람 사이에 선물을 주고 받은 내역이 있다.
- 이번달 까지 선물을 더 많이 준 사람이 다음달에 선물을 하나 받는다.

2. 두사람 사이에 선물을 주고 받은 내역이 없다 또는 주고 받은 내역이 같다.
- 선물 지수가 작은 사람이 선물 지수가 큰 사람에게 선물을 하나 준다. 
- 선물 지수도 동일하다면, 다음 달에 선물을 주고 받지 않는다.

# 선물 지수 = 이번달까지 자신이 친구들에게 준 선물의 수 - 받은 선물의 수
-> 선물을 가장 많이 받을 친구가 받을 선물의 수

friends: 친구들의 이름이 담긴 배열
gift: 친구들이 주고받은 선물 기록을 담은 배열 = "A B" 형태
    - A : 선물을 준 친구의 이름
    - B : 선물을 받은 친구의 이름
*/