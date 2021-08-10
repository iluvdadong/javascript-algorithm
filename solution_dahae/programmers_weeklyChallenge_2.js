/**
 * https://programmers.co.kr/learn/courses/30/lessons/83201
 * 위클리 챌린지 2번 째
 */

function solution(scores) {
    let answer = '';
    let newArray = [];

    for (let i = 0; i < scores.length; i++) {
        let selfScore;
        let totalScore = 0;
        let count = 0;
        newArray = [];
        for (let j = 0; j < scores.length; j++) {
            if (i === j) selfScore = scores[j][i];
            console.log(`(${j}, ${i})`);
            newArray.push(scores[j][i]);
        }
        newArray.sort((a, b) => a - b);
        newArray.forEach((v) => {
            if (v === selfScore) count++;
        });
        if (count === 1 &&
            (newArray[0] === selfScore || newArray[newArray.length - 1] === selfScore)) {
            newArray.forEach((v) => {
                totalScore += v;
            });
            totalScore -= selfScore;
            totalScore /= (newArray.length - 1);
        } else {
            newArray.forEach((v) => {
                totalScore += v;
            });
            totalScore /= newArray.length;
        }
        if (totalScore >= 90) {
            answer += 'A';
        } else if (totalScore >= 80 && totalScore < 90) {
            answer += 'B';
        } else if (totalScore >= 70 && totalScore < 80) {
            answer += 'C';
        } else if (totalScore >= 50 && totalScore < 70) {
            answer += 'D';
        } else {
            answer += 'F';
        }
    }
    return answer;
}

console.log(solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65]
]));


///////////////////////////////////////////////////////////////// 정리 전

// /**
//  * https://programmers.co.kr/learn/courses/30/lessons/83201
//  * 위클리 챌린지
//  */

// function solution(scores) {
//     let answer = '';
//     let newArray = [];
//     //1. i*j 인데 i*0, i+1 * 0, .... 더해서 배열을 만든다.
//     //2. i와 j가 일치하는 수가 무엇인지 따로 담는다.
//     //3. 그 배열을 정렬한다.
//     //4. 제일 작은 수 와 제일 큰 수를 비교하고 일치, 하면 다른 것도 같은 수가 있는지 확인. 없으면 true

//     for (let i = 0; i < scores.length; i++) {
//         let selfScore;
//         let totalScore = 0;
//         let count = 0;
//         newArray = [];
//         for (let j = 0; j < scores.length; j++) {
//             if (i === j) selfScore = scores[j][i];
//             console.log(`(${j}, ${i})`);
//             newArray.push(scores[j][i]);
//         }
//         console.log('-----------------------');
//         console.log(newArray);
//         console.log('selfScore', selfScore);
//         newArray.sort((a, b) => a - b);
//         console.log(newArray);
//         newArray.forEach((v) => {
//             if (v === selfScore) count++;
//         });
//         if (count === 1) {
//             if (newArray[0] === selfScore || newArray[newArray.length - 1] === selfScore) {
//                 newArray.forEach((v) => {
//                     totalScore += v;
//                 });
//                 console.log('1 total', totalScore);
//                 totalScore -= selfScore;
//                 console.log('2 total', totalScore);
//                 console.log('2 self', selfScore);
//                 totalScore /= (newArray.length - 1);
//                 console.log('3 self', totalScore);

//             } else {
//                 newArray.forEach((v) => {
//                     totalScore += v;
//                 });
//                 totalScore /= newArray.length;
//             }
//         } else {
//             newArray.forEach((v) => {
//                 totalScore += v;
//             });
//             totalScore /= newArray.length;
//         }
//         console.log('count', count);
//         console.log('###### totalScore', totalScore);
//         if(totalScore >= 90) {
//             answer += 'A';
//         } else if(totalScore >= 80 && totalScore < 90) {
//             answer += 'B';
//         } else if(totalScore >= 70 && totalScore < 80) {
//             answer += 'C';
//         } else if(totalScore >= 50 && totalScore < 70) {
//             answer += 'D';
//         } else {
//             answer += 'F';
//         }
//     }
//         console.log('### answer:', answer);
//         return answer;
// }

// console.log(solution([
//     [100, 90, 98, 88, 65],
//     [50, 45, 99, 85, 77],
//     [47, 88, 95, 80, 67],
//     [61, 57, 100, 80, 65],
//     [24, 90, 94, 75, 65]
// ]));