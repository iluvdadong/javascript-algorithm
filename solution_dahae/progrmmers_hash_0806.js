/*
    프로그래머스 > 해쉬 > 위장
*/

function solution(clothes) {
    let answer = 1;
 
    let sorts = {};

    // 옷 종류별 갯수 카운트
    for(let cloth of clothes) {
        //cloths 2차원 배열을 한줄씩 읽는다.
        console.log('cloth[1]', cloth[1]);
        // 종류 sorts[headgear] 객체 key로 있으면 그키의 value 를 ++ 숫자로 올리고
        // 종류 sorts[headgear] 객체에 key로 headgear가 없으면 그냥 그대로 1
        if(sorts[cloth[1]]) {
            sorts[cloth[1]]++;
        } else {
            sorts[cloth[1]] = 1;
        }
        // sorts['dahae'] = 1;
        // sorts['이것이key'] = '이것이 value';
        // console.log('sorts[cloth[1]]', sorts[cloth[1]]);
    }
    console.log(sorts);

    // 숫자 하나씩 올리기(각 종류별 아무것도 안입는 경우의 수 추가)
    for(let key in sorts) {
        sorts[key]++;
    }

    console.log(sorts);

    for(let key in sorts) {
       answer *= sorts[key];
    }

    return answer-1;

}

solution(
    [
        ["yellowhat", "headgear"],
        ["bluesunglasses", "eyewear"],
        ["green_turban", "headgear"]
    ]
);