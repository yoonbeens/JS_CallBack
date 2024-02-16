const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        reject(new Error('no network'));
        // resolve('richard');
        //resolve() = const resolve = () => {};
    }, 2000);
});

promise.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
});

/* resolve와 reject는 일반적 함수처럼 
안으로 안으로 계속 할당해서 쓰는 게 아니라
정의된 함수를 밖에서 끌어와서 쓰는 거다 */

// .then: resolve나 reject가 호출될 때까지 기다리는 것