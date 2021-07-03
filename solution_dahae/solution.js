// 1. 세수중 최솟값 - DONE
function solution(a, b, c) {
    let answer;
  
    let arr = [a, b, c];
    arr.sort(function(a, b) {
        return a-b;
    });
    answer = arr[0];
    console.log(arr);

    return answer;
  }
  console.log('1번');
  console.log(solution(6, 5, 11));
  

  // 2. 삼각형 판단하기 - DONE
  // 가장 큰 수 > 나머지 두 수의 합
  // yes or no 출력
  function solution2(a, b, c) {
    let answer;
    let arr = [a, b, c]
    
    arr.sort(function(a, b){
        return b-a
    });

    // 삼각형 성립 조건: 제일 큰변의 길이가 나머지 두 변의 길이의 합 보다 작아야 성립된다.
    if(arr[0] < arr[1] + arr[2]) answer = 'yes';
    else answer = 'no';

    return answer;
  }
  
  console.log('2번');
  console.log(solution2(2, 3, 5)); //no
  console.log(solution2(4, 5, 6)); //yes
  
  // 3. 연필 개수 - DONE
  // 1다스에 12개  
  // N명의 학생수에게 연필을 나눠줄 때 필요한 연필 다스의 수
  function solution3(studentNum) {
    let answer;

    // N명의 학생에게 
    if(studentNum % 12 === 0) answer = studentNum / 12;
    else answer = (studentNum / 12) + 1;

    return parseInt(answer);
  }

  console.log('3번');
  let studentNum = 25;
  console.log(solution3(studentNum));
  // 출력 3
  
  // 4. 1부터 N까지의 합계
  function solution4(n) {
    let answer = 0;
    // n부터 시작해서 1이 되면 break;
    while(n > 0) {
      console.log(n);
      answer += n;
      n--;
    }
    return answer;
  }
  console.log('4번');
  let n = 10;
  console.log(solution4(n));
  
  
  // 5. 최솟값 구하기
  function solution5(arr) {
    let answer;
    
    //함수를 많이 생략함
    let newArr = arr.sort((a,b) => a-b )
    answer = newArr[0];
    return answer;
  }
  
  console.log('5번');
  let arr5 = [5, 3, 7, 11, 2, 15, 17];
  console.log(solution5(arr5)); // 2
  
  
  // 6. 홀수  :  map 사용시 
  // 합계, 홀수중 최솟값
  function solution6_1(arr) {
    let answer;
    let oddArr = arr.map(value => {
      console.log(value);
      if(value % 2 !== 0) return value;
    })
    console.log(oddArr);
      //  map 사용시 return 되는 값이
      // [undefined, 77, undefined, 41, 53, undefined, 85]
      // 새로 배열을 만들어주지만 기존의 배열의 순서나 크기가 달라지지 않는다.
    return answer;
  }
  
  console.log('6번_map');
  let arr6 = [12, 77, 38, 41, 53, 92, 85];
  console.log(solution6_1(arr6)); // [256,41]
  

  // 6. 홀수 : filter 사용시 return 하는 값이 true 일때만 그때의 value 값으로 새로운 배열을 만든다. 
  // 합계, 홀수중 최솟값
  function solution6_2(arr) {
    let answer;
    let oddArr = arr.filter(value => {
      return value % 2 !== 0
    })
    console.log(oddArr); // [77, 41, 53, 85]
    answer = oddArr.sort((a,b) => a-b)[0];
    return answer;
  }
  
  console.log('6번_filter');
  console.log(solution6_2(arr6)); // [256,41]
  
  // 7. 10부제
  // 일의 자리 숫자를 보고 1제 위반하는 차량의 대수 출력
  function solution7(arr) {
    let answer;
  
    return answer;
  }
  
  let arr7 = [25, 23, 11, 47, 53, 17, 33];
  let day = 3;
  console.log(solution7(arr7, day)); // 3
  
  
  // 8. 일곱난쟁이
  // 일곱난쟁이의 합은 100 
  // 아홉난쟁이 중 일곱난쟁이를 구하라
  function solution8(arr) {
    let answer;
  
    return answer;
  }
  
  let arr8 = [20, 7, 23, 19, 10, 15, 8, 25, 13];
  console.log(solution8(arr8)); // [20,7,23,19,10,8,13]
  
  // 9. A to #
  function solution9(arr) {
    let answer;
  
    return answer;
  }
  
  let arr9 = 'BANANA';
  console.log(solution9(arr9)); // B#N#N#
  
  // 10. 문자 찾기
  // R의 개수를 찾아라
  function solution10(arr) {
    let answer;
  
    return answer;
  }
  
  let arr10 = 'COMPUTERPROGRAMMING';
  let word = 'R';
  console.log(solution10(arr10, word)); // 3
  
  
  // 11. 대문자 찾기
  function solution11(arr) {
    let answer;
  
    return answer;
  }
  
  let arr11 = 'KoreaTimeGood';
  console.log(solution11(arr11)); // 3
  
  
  
  // 12. 대문자 통일
  function solution12(arr) {
    let answer;
  
    return answer;
  }
  
  let arr12 = 'itisTimeToStudy';
  console.log(solution12(arr12));
  
  
  // 13. 대소문자변환
  // 대문자는 소문자, 소문자는 대문자로 변환
  function solution13(arr) {
    let answer;
  
    return answer;
  }
  
  let arr13 = 'stuDY';
  console.log(solution13(arr13));
  
  
  // 14. 가장 긴 문자열
  function solution14(arr) {
    let answer;
  
    return answer;
  }
  
  let arr14 = ['time', 'tosomeplace', 'sad', 'student', 'beautiful'];
  console.log(solution14(arr14)); // tosomeplace
  
  
  // 15. 가운데 문자 출력(substring, substr)
  // 짝수일땐 가운데2개출력
  function solution15(arr) {
    let answer;
  
    return answer;
  }
  
  let arr15 = 'study';
  console.log(solution15(arr15)); // u
  
  
  // 16. 중복문자제거(indexof)
  function solution16(arr) {
    let answer;
  
    return answer;
  }
  
  let arr16 = 'ksekkset';
  console.log(solution16(arr16)); // kset
  
  
  // 17. 중복단어제거
  function solution17(arr) {
    let answer;
  
    return answer;
  }
  
  let arr17 = [
    'time',
    'tosomeplace',
    'time',
    'student',
    'beautiful',
    'good',
    'student',
  ];
  console.log(solution17(arr17));
  