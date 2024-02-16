class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if (id === 'rechard' && password === 'asiae') {
                resolve(id);
                // console.log(id); resolve나 reject 뒤에 무언가 있으면
                // 실행이 되어버리니(비동기가 아니게 되니) 항상 마지막에 써야 한다
            } else {
                reject(new Error('not found'))
            }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'rich') {
                    resolve({name: 'rechard', role: 'admin'} )
                } else {
                    reject(new Error('no access'))
                }
            }, 1000);
        });
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password')

userStorage.loginUser(id, password)
    // .then( user => user) //프로미스는 값만 줘도 알아서 리턴해 준다
    // .then( user => {console.log(user); return user="rich";}) //rich로 해도 된다
    // .catch( (error) => {console.log(error); return "rich";}) // 이것도 됨
    // 이런 것들이 다 되기 때문에 문제가 된다. catch가 어떤 것의 catch인지 알기도 어렵다
    // 이런 체인링은 프로미스 객체로만 이루어진 체인링이다(then이 알아서 프로미스 객체를 불러서 리턴한다)
    .then( (user) => userStorage.getRoles(user) )
    .then( (userWithRole) => { alert(`Hello ${userWithRole.name}, You have a ${userWithRole.role} role.`); })
    .catch( (error) => console.log(error) )

