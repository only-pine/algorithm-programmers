function solution(survey, choices) {
    var SURVEY_TEST = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"]
    ];
    var answer = '';
    var resultObj = {};
    
    for (const surveyArray of SURVEY_TEST) {
        const [first, second] = [...surveyArray];
        resultObj[first] = 0;
        resultObj[second] = 0;
    }
    
    survey.forEach((sur, index) => {
        const [disagree, agree] = sur.split('');
        
        switch (choices[index]) {
            case(1) :
                resultObj[disagree] += 3;
                break;
            case(2) :
                resultObj[disagree] += 2;
                break;
            case(3) :
                resultObj[disagree] += 1;
                break;
            case(4) : 
                break;
            case(5) :
                resultObj[agree] += 1;
                break;
            case(6) :
                resultObj[agree] += 2;
                break;
            case(7) : 
                resultObj[agree] += 3;
                break;
        }
    })
    
    for (const surveyArray of SURVEY_TEST) {
        const [first, second] = [...surveyArray];
        
        if (resultObj[first] >= resultObj[second]) {
            answer += first;
        } else {
            answer += second;
        }
    }
    
    return answer;
}

/*
카카오 성격 유형 검사
1번 지표 : 라이언형(R) / 튜브형(T)
2번 지표 : 콘형(C) / 프로도형(F)
3번 지표 : 제이지형(J) / 무지형(M)
4번 지표 : 어피치형(A) / 네오형(N)

검사지의 선택지
매우 비동의(3) / 비동의(2) / 약간 비동의(1)
모르겠음
매우 동의(3) / 동의(2) / 약간 동의(1)

* 하나의 지표에서 각 성격 유형 점수가 같으면, 
두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단한다.

파라미터
- survey : 질문마다 판단하는 지표를 담은 1차원 문자열 배열 
    - 배열 요소의 첫번째 문자열 = 질문의 비동의 관련 성격 유형
    - 배열 요소의 두번쨰 문자열 = 질문의 동의 관련 성격 유형
- choices : 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열
    - 1 : 매우 비동의
    - 2 : 비동의
    - 3 : 약간 비동의
    - 4 : 모르겠음
    - 5 : 약간 동의
    - 6 : 동의
    - 7 : 매우 동의
    => choices[i]의 값으로 검사자가 어떤 선택지를 골랐고, 어떤 성격 유형에 점수를 줘야하는지 판단해야한다.
반환값
: 검사자의 성격 유형 검사의 결과를 지표 번호 순서대로 반환

0. 성격 유형 검사 지표를 상수로 만든다.
1. survey를 forEach 함수를 써서 반복시킨다.
2. survey[i]의 문자열을 나누고, choices[i]의 데이터를 가져온다.
    2.1 choices[i] < 4 이면 resultObj에 survey[i]의 첫번째 문자열을 키, choices[i]값에 따른 점수를 밸류로 저장한다.
    2.2 choices[i] > 4 이면 resultObj에 survey[i]의 두번째 문자열을 키, choices[i]값에 따른 점수를 밸류로 저장한다.
3. survey의 forEach가 끝나면, resultObj와 성격 유형 검사 상수를 통해 결과값을 반환한다.
*/