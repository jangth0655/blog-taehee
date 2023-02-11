---
title: useState
category: react
createdAt: 2023/02/11
updatedAt:
---

## 1️⃣ useState

useState는 컴포넌트에 상태 변수를 추가할 수 있는 React hook이다.

```javascript
const [state, setState] = useState(initialState);
```

- useState는 두개의 아이템을 가진 배열을 리턴한다.

  > ⒈ state  
  > · 현재 상태(state → current state) : 현재 상태

  > ⒉ set function  
  > · **상태를 다른 값으로 업데이트**하고 **다시 렌더링을 트리거**할 수 있는 함수

  #

### ✔️ initialValue

state의 초기 값으로 어떠한 타입도 가능하다. 즉 원시형 타입도 가능하고 객체도 가능하다.  
여기서 주의할 점은 **함수를 전달 할 수 있는데**, 초기 함수를 인자로 전달한다면 **순수 함수**야만 하고 매개변수가 없어야하며 어떠한 타입이든 **반환 값을 가져야만 한다.**

#

### ✔️ 주의사항

- useState는 훅이다. 즉 컴포넌트의 최상단 레벨에서 호출해야하고 조건문, 반복문 등 어떠한 문에 종속될 수 없다.
- Strict Mode에서는 두번 호출된다. 하지만 개발 모드에서만 두번호출되고 프로덕션에는 영향을 주지 않는다. 즉 두번 호출 중 하나의 호출은 무시된다.

#

### ☝️ set Function

- useState 훅에 의해 리턴된 함수로 상태의 값을 변경시키며 리랜더링을 트리거한다.
- 다음 상태 값을 직접적으로 전달하거나 이전 상태로 부터 그것(이전 상태)을 계산하는 함수를 전달할 수 있다.

```javascript
const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
  // ...
```

- next State (다음 상태)로 콜백함수를 전달하면, 업데이트하는 함수로 다뤄진다.
  > 콜백함수는 순수함수로 전달해야하며 순수함수의 매개변수는 유일한 값 즉 이전 상태이다. 또한 반드시 다음 상태를 리턴해야 한다.
- 매개변수로 전달한 함수(콜백함수)는 다음 렌더링 동안 현재 상태에 발생한 모든 업데이트를 이전 상태에 적용하고 이전 상태를 토대로 다음 상태를 계산한다.

## 💡 중요

- set Function을 호출한 후 상태 변수를 바로 즉시 읽으면 호출전 이전값을 얻게된다.
  > **그 이유는 스냅샷 처럼 행동하기 떄문이다.**

```javascript
function handleClick() {
  console.log(count); // 0

  setCount(count + 1); // 카운트에 + 1하여 리렌더링 발생
  console.log(count); // Still 0!

  setTimeout(() => {
    console.log(count); // Also 0!
  }, 5000);
}
```

⒈ 함수(이벤트 핸들러)를 실행시킨다.  
⒉ 반환된 jsx를 스냅샷한다.  
⒊ 반환한 스냅샷과 일치하도록 돔트리를 업데이트한다.

https://ifh.cc/g/GAVTGD.jpg

#

✅ 스냅샷 ? [공식문서](https://beta.reactjs.org/learn/state-as-a-snapshot)

리액트 렌더링이란 함수 컴포넌트를 호출하는 것을 말하며 반환하는 jsx는 시간에 따른 UI의 스냅샷과 같다. 그리고 props, event handler, local variable은 모두 렌더링 당시의 상태를 사용하여 계산된다.

```javascript
<button
  onClick={() => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }}
>
  +3
</button>
// +3이된다.
```

- 클릭 핸들러가 호출될 경우 setNumber(number + 1); 동작하게된다. 이때 setNumber는 변경된 값(0 + 1)을 준비하게된다.
- 마찬가지로 두번째 setNumber(number + 1); 동작하며 다시 변경된 값 (0+1)을 준비하게 된다.
- 이처럼 리액트는 **setNumber(number + 1); 자체를 스냅샷(고정)하여** 계산하기 때문에 클릭하여도 3이 되는 것이 아니라 값이 1이 된다.

https://ifh.cc/g/9optbN.jpg

#

## ✅ 최신 상태를 업데이트 하려면 어떻게 해야할까 ??

다음 렌더링 전에 값(이전 값)에 대해 여러 작업을 해야하는 상황도 있다.

- **React 배치 (일괄처리) 업데이트**
  > 함수(이벤트 핸들러)에서 상태를 업데이트 시킬 경우 핸들러가 종료될 때까지 상태를 업데이트 하지않는다. 이러한 것을 배치 상태 업데이트라 하며, 이러한 동작은 리액트 앱을 빠르게 실행할 수 있게 한다.
- **여러번 상태 업데이트하기**
  > 다음 랜더링 전에 동일한 상태 변수를 여러번 업데이트 하는 경우 이전 값을 계산할 수 있는 함수를 전달하는 것이다. (즉 이전 상태 값으로 무언가를 하도록 지시)

```javascript
setNumber((n) => n + 1); // 업데이트 함수
```

이처럼 setFunction함수에 콜백 함수를 사용한다면,  
다음 렌더링 중 setFunction를 호출하면 리액트는 큐에 넣는다. 그리고 React는 이전 setFunction함수의 반환 값을 큐에 있는 값과 변경하고 변경한 값(반환 값)을 다음 업데이트의 이전값으로 전달한다.

다음 예시를 확인해보자.

```javascript
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>

```

⒈ number + 5를 queue에 넣는다.

⒉ 함수(setNumber(n => n +1))를 queue에 넣는다.

⒊ 핸들러가 종료되며 결과적으로 42가 상태값이 된다.

#

### ✔️ Key 재설정하여 렌더링하기

일반적으로 키는 리스트의 키로 등록하여 사용한다. 하지만 또 다른 사용법이 있는데, 키가 변경하면 해당 키를 가지고 있는 컴포넌트는(자식 포함) 리렌더링 한다.

### ✔️ State는 업데이트 되지만 화면은 업데이트 되지 않는경우 ??

리액트는 Object.is 비교에 의해 결정된 대로 다음 상태와 이전상태가 같다면 업데이트를 무시한다. 리액트에서 상태는 읽기 전용으로 간주되므로 기존 객체를 변경하는 대신 교체를 해야한다.

(리액트는 상태를 불변으로 다뤄야한다. → 랜더링 가능)

```javascript
// 🚩 Don't mutate an object in state like this:
form.firstName = 'Taylor';

// ✅ Replace state with a new object
setForm({
  ...form, // 기존데이터를 복사하기 위해
  firstName: 'Taylor',
});
```

---

### Closure (클로저 )

[클로저 참고](https://taehee-homepage.vercel.app/posts/js/js_06)

중첩된 함수 중 내부 함수에서 외부함수에 있는 환경(렉시컬환경)에 접근할 수 있는 것을 말한다.  
✔️ 클로저의 조건  
· 중첩함수(내부함수)가 상위 스코프의 식별자를 참조하고 있어야한다.  
· 중첩함수가 외부 함수보다 더 오래 유지 되어야한다.

#

### **useState**는 클로저를 이용해서 함수의 상태를 기억한다

```javascript
let hooks = [];
let idx = 0;

function customUseState(initialVal) {
  hooks.push(initialVal);
  const state = hooks[idx];
  const _idx = idx; // 이 훅이 사용해야 하는 인덱스
  const setState = (newVal) => {
    // closure
    hooks[_idx] = newVal; // hooks 배열과 _idx 변수를 기억하여 참조 유지
  };
  idx++;
  return [state, setState];
}
```

위 코드에서 useState의 초기값 initialValue를 넣어주고 추후 값을 변경하기 위해 setState를 사용한다.
setState함수는 newValue를 인자로 받아 hooks배열에 push하고 해당 값을 기억할 수 있다.
