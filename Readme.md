# Promise

- executor
    - 선언과 동시에 등록된 익명 함수는 바로 실행 된다
    - 리턴값은 Promise 객체 :: chaining 이 가능한 이유

- resolve
    - 인자 없이 함수만 호출 가능 => resolve()
    - 인자와 함께 함수 호출 => resolve(인자)
    - 여러 인자와 함께 함수 호출 => resolve([인자1, 인자2, ...]) ::배열 사용

- reject
    - error 표현을 인자로 Error 객체 사용 => reject(new Error(인자))

- state
    - pending
        - fulfilled
        - reject

- consumer
    - then
        - 리턴값은 Promise 객체 :: chaining이 가능한 이유
    - catch
        - 리턴값은 Promise 객체 :: chaining이 가능한 이유
    - finally
        - resolve, reject 상황과 관계 없이 맨 마지막에 실행됨


Promise를 사용하면 비동기에서 온 값이 프로미스 객체에 저장되기 때문에 코드 작성이 용이해진다

callback함수 특성상 resolve, reject 코드 이후에 코드를 작성하면, 해당 코드는 실행 되지않고 오류나야 하나, Promise는 동기적이어서 다음 코드까지 모두 실행됨
원칙상으로는 resolve, reject 호출하기 이전에 코드를 작성 후 마지막에 호출코드를 작성해줘야 한다

더이상 추가콜이되선안되는데
그 이후에 코드를 작성해도
비동기방식의 특성상 모두 콜이 된다