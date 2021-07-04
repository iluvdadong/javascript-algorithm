/*
코딩테스트 연습
2020 카카오 인턴십
키패드 누르기
https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

*/

// number: 숫자의 배열이 들어옴
// hand: left || right
// return 값: 왼손 사용시 L / 오른손 사용시 R

// 147 이면 무조건 왼속
// 369 면 무조건 오른손
// 258일 경우에 왼손의 전 위치, 오른손의 전위치 기억해서, 그 숫자까지의 거리가 가까운
// 만약 같을 시에는 hand로 결정

function solution(numbers, hand) {
    
    let answer = [];
    let inputArr = numbers;
    let inputHand = hand;
    // 147 이면 무조건 왼손

    inputArr.forEach((e, i) => {
        console.log(`##${i}`);
        console.log(e);

        if(e === 1 || e === 4 | e == 7 ) {
            answer.push('L');
        } else if(e === 3 || e === 6 | e == 9 ) {
            answer.push('R');
        } else {
            // 258일 경우에 왼손의 전 위치, 오른손의 전위치 기억해서, 그 숫자까지의 거리가 가까운 손을 출력

            // 만약 같을 시에는 입력한 hand로 결정

        }
    });
 
    console.log(`## answer => ${answer}`);
    return answer;
}

solution([1,4,7,3,6,9], "right");

//연습

console.log('###########################');

let obj = {
    a: 1,
    b: 'hello',
    c: [1, 2]
  }
  for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
  }

  console.log('###########################');

  var arr = ['dahae', 'dadong', 'mylove'];

// arr의 요소하나를 돌면서 걔를 각요소 v의 길이length로 치환해라
var arr2 = arr.map(v => v.length) 
console.log(arr2);

