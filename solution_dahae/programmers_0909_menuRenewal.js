// 순열과 조합 연습

// DP 문제
// 조합
const getCombination = (arr, selectNum) => {
    if(selectNum === 1) // 조합 중 1개만 뽑을 시
    return arr.map(v => [v]); // 2개 뽑을 경우 배열로 나오니 이것도 배열로 리턴
        /* selectNum이 2일 경우 
        1 => 1,2 / 1,3 
        2 => 2,3 (2,1 조합의 경우 중복임)
        그래서 숫자를 생각하지 않는게 아니라, 해당숫자보다 작은 숫자는 이미 나왔기 때문에 고려하지않음
        */
    const result = [];
    arr.forEach((v, i) => {
        console.log('### value : ', v);
        console.log('### index : ', i);
        const rest = arr.slice(i+1); // arr의 i+1 번째부터 끝까지 자른 array
        console.log('### rest => ', rest);
        const combination = getCombination(rest, 1);
        console.log('### combination => ', combination);
        const attached = combination.map((combi) => [v, ...combi]); //2차원 3차원 배열 안되게 spread로 사용
        console.log('### attached => ', attached);
        result.push(...attached);
        console.log('### result => ', result);
    });
    return result;
};

const arr = [0,1,2];
console.log('###### array => ', arr);
const combi = getCombination(arr, 2);
console.log('###### result combi => ', combi);