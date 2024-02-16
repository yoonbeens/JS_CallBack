// const { log } = require("async");

// async function f() {
//     return 1;
// }

// /* 리턴 값을 알아서 받기 때문에 알아서 프로미스로 리턴을 해준다 */
// // f().then(value => alert(value));
// f().then(alert);
// // f().then(value => console.log(value));
// f().then(console.log);


//예제 1번
// async function f1() {

// }


function fetch() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve("일반함수 반환값"), 1000);
    });
}


//예제 2번
async function f2() {
    let promise = new Promise( (resolve, reject) => {
        setTimeout(() => resolve("완료"), 1000);
    })

    let result = await promise;

    alert(result);

    let func_result = await fetch();

    alert(func_result);
}

f2();

//머물러 있지 않고 빠져 나가서 다른 거 실행 하다가
//값이 돌아오면 실행한다
//순서와 시간을 보장해준다

//콜백은 프로미스로 대체 수 있지만
//프로미스는 콜백으로 대체할 수 없다

//프로미스 객체여야지만 순서가 보장된다