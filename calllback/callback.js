class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
         if (id === 'rechard' && password === 'asiae') {
            onSuccess(id);
         } else {
            onError(new Error('not found'))
         }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'rechard') {
                onSuccess({name: 'rechard', role: 'admin'} )
            } else {
                onError(new Error('no access'))
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password')

userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, You have a ${userWithRole.role} role.`)
            },
            (error) => {
                console.log(error)
            }
        )
    },
    (error) => {
        console.log(error);
    }
);

// callback이 보기 힘들어서 나온 게 promise
// promise then도 보기 힘들어서 나온 게 async await
// 결국 구조는 똑같다
// 날씨 추워지면 컴퓨터가 느려진다
// 비동기 방식(ex setTimeOut) 보장이 안된다