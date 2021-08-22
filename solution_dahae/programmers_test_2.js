let finalGrades = {}

function solution(grades) {
    let answer = [];
    let splitedArray = [];
    let gradesArray = grades;
    let finalGrades = [];

    gradesArray.forEach(value => {
        splitedArray = value.split(" ")

        finalGrades[splitedArray[0]] = splitedArray[1];

    });
    console.log(finalGrades);
    return answer;
}


solution(["DS7651 A0", "CA0055 D+", "AI5543 C0", "OS1808 B-", "DS7651 B+", "AI0001 F", "DB0001 B-", "AI5543 D+", "DS7651 A+", "OS1808 B-"]);