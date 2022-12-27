---
title: useRef
category: react
createdAt: 2022/12/26
updatedAt:
---

## 공식 사이트 useRef

- useRef는 인자로 초기값을 넣어 ref 프로퍼티 current를 초기화 한다. 그리고 ref 객체는 mutable하다.
- DOM 노드가 변경될 때마다 **current 프로퍼티 값을 해당 DOM 노드로 설정**한다.

```javascript
const ref = useRef(value);

// return ref object
{
  current: value;
}
```

useRef를 호출하면 ref 오브젝트를 반환해준다. 반환된 ref는 컴포넌트 전생애주기를 통해 유지된다. 즉 컴포넌트가 언마운트되기 전까지는 그대로 유지할 수 있다.

#

## 언제 사용될까

- state와 비슷하게 어떠한 값을 저장해 두는 저장공간으로 사용된다.  
  → **state가 변화하면 랜더링**되고 **컴포넌트 내부 변수들은 다시 초기화**된다. 하지만 **ref는** 변화하여도 렌더링이 일어나지 않아 **변수의 값이 유지**된다. 뿐만 아니라 state가 변화하여 렌더링 되어도 ref의 값은 유지된다.
- DOM 요소에 접근하고 컨트롤할 때 사용된다.

```javascript
import { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount((prev) => prev + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref', countRef.current);
  };

  return (
    <div className='App'>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>Plus State</button>
      <button onClick={increaseCountRef}>Plus Ref</button>
    </div>
  );
}

export default App;
```

위 코드에서 ref의 값을 아무리 증가시켜도 화면에 ref의 값은 나타나지 않는다. 하지만 `console.log`를 통해 확인해보면 `ref.current`는 변경되는 것을 알 수 있고 state(count) 값을 변경하면 렌더링이 발생하면서 ref의 값도 렌더링 즉 화면에 나타나는 것을 확인할 수 있다.

#

## 함수 컴포넌트 내부 변수와 Ref

```javascript
import { useRef, useState } from 'react';

function App() {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  let countVar;

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref', countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var', countVar);
  };

  const doRendering = () => {
    setRender((prev) => prev + 1);
  };

  return (
    <div className='App'>
      <p>Ref : {countRef.current}</p>
      <p>Ref : {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
    </div>
  );
}

export default App;
```

위 코드에서 ref 값과 변수의 값을 증가시키고 렌더 버튼을 클릭하여 render의 값을 증가시켜 화면을 렌더링한다.(state가 변화하면 화면이 리렌더링)

여기서 ref와 변수의 차이점을 확인할 수 있는데 ref의 값은 증가시킨 이전 값을 유지(저장)하고 있어 렌더링할 때 화면에 증가된 ref값이 나타난다.  
왜냐하면 ref의 값은 컴포넌트 전 생애주기를 통해 유지가 되기 때문이다.(컴포넌트 마운트~언마운트)  
반면 변수의 값은 그대로 0이 되는데 그 이유는 화면이 렌더링되면 함수 컴포넌트 내부의 변수는 다시 초기화가 되기 때문이다.

#

## useRef통해 DOM요소 접근하기

앞서 `const ref = useRef(value)`, useRef를 호출하면 ref 오브젝트 `{current:value}`를 반환한다고 했다. 그리고 ref 오브젝트를 접근하고자 하는 요소(태그)에 ref 속성으로 넣어주면 DOM요소에 접근할 수 있다.
