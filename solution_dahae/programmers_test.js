// let loggedIn = false;
// let basketAdded = false;
// let customerInfos = [];

// function solution(infos, actions) {
//     let answer = [];
//     let customerAction = [];
//     const actionArray = actions;

//     customerInfos = infos;
//     actionArray.forEach(value => {
//         customerAction = value.split(" ");
//         if (customerAction[0] === 'LOGIN') {
//             console.log("LOGIN =======================");
//             if (loggedIn === false) {
//                 answer.push(handleLogin(customerAction[1], customerAction[2]));
//             } else {
//                 answer.push(false);
//             }
//         } else if (customerAction[0] === 'ADD') {
//             console.log("ADD =======================");
//             answer.push(handleAddBasket());
//         } else if (customerAction[0] === 'ORDER') {
//             console.log("ORDER =======================");
//             answer.push(handleOrder());
//         }
//     });
//     console.log(answer);
//     return answer;
// }

// // 로그인
// const handleLogin = (id, password) => {
//     console.log("## id: ", id);
//     console.log("## password: ", password);
//     customerInfos.forEach(value => {
//         idPasswordArray = value.split(" ");
//         console.log("## idPasswordArray: ", idPasswordArray);
//         console.log("## loggedIn: ", loggedIn);
//         if (id === idPasswordArray[0] &&
//             password === idPasswordArray[1] &&
//             loggedIn === false) {
//             loggedIn = true;
//         } else {
//             loggedIn = false;
//         }
//     });
//     return loggedIn ? true : false;
// };

// // 장바구니
// const handleAddBasket = () => {
//     basketAdded = true;
//     return loggedIn ? true : false;
// };

// // 주문하기
// const handleOrder = () => {
//     if (basketAdded === true) {
//         basketAdded = false;
//         return true;
//     } else {
//         return false;
//     }
// };

// solution(
//     infos = ["kim password", "lee abc"],
//     actions = [
//         "ADD 30",
//         "LOGIN kim abc",
//         "LOGIN lee password",
//         "LOGIN kim password",
//         "LOGIN kim password",
//         "LOGIN lee abc",
//         "ADD 30",
//         "ORDER",
//         "ORDER",
//         "ADD 40",
//         "ADD 50"
//     ]);

let loggedIn = false;
let basketAdded = false;
let customerInfos = [];

function solution(infos, actions) {
    let answer = [];
    let customerAction = [];
    const actionArray = actions;
    customerInfos = infos;

    actionArray.forEach(value => {
        customerAction = value.split(" ");
        if (customerAction[0] === 'LOGIN') {
            if (loggedIn === false) {
                answer.push(handleLogin(customerAction[1], customerAction[2]));
            } else {
                answer.push(false);
            }
        } else if (customerAction[0] === 'ADD') {
            answer.push(handleAddBasket(customerAction[1]));
        } else if (customerAction[0] === 'ORDER') {
            answer.push(handleOrder());
        }
    });
    return answer;
}

// 로그인
const handleLogin = (id, password) => {
    let idPasswordArray = [];
    customerInfos.forEach(value => {
        idPasswordArray = value.split(" ");
        if (id === idPasswordArray[0] &&
            password === idPasswordArray[1] &&
            loggedIn === false) {
            loggedIn = true;
        }
    });
    return loggedIn;
};

// 장바구니
const handleAddBasket = () => {
    basketAdded = loggedIn;
    return loggedIn;
};

// 주문하기
const handleOrder = () => {
    if (basketAdded) {
        basketAdded = false;
        return true;
    } else {
        return false;
    }
};