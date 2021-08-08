// 첫번째 풀이
// function solution(array, commands) {
//     let answer = [];
//     let newArray = [];

//     commands.forEach((e) => {
//         newArray = [];
//         for (let i = e[0] - 1; i < e[1]; i++) {
//             newArray.push(array[i]);
//         }
//         newArray.sort();
//         console.log(newArray);
//         answer.push(newArray[e[2] - 1]);
//     });
//     return answer;
// }

function solution(array, commands) {
    let answer = [];

    answer = commands.map(v => {
        return array.slice(v[0]-1, v[1]).sort((a,b) => a-b)[v[2]-1];
    })
    console.log(answer);
    return answer;
}

solution(
    [1, 5, 2, 6, 3, 7, 4], // array
    [ // commands
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3]
    ]
);

