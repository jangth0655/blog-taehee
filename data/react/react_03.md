---
title: useState · useEffect
category: react
createdAt: 2022-8-19
updatedAt: 2022/2/6
---

# useState, useEffect Hook

## class형 컴포넌트 단점

- 로직이 비교적 복잡하며 컴포넌트 재사용에 용이하지 않았고 this 사용 등 코드가 불필요하게 길어지는 단점이 있다. 뿐만 아니라 메모리 자원 더 사용한다.

- this가 가리키는 것, 내부 상태값의 변화 등 문제로 인해 메서드를 실행하는 시점에 어떤 값을 얻을 수 있을지 확신할 수 없다.

- lifecyle method를 사용할때 componentDidMount, componentDidUpdate, componentWillUnmount 함수가 기능별로 세분화 되있어서 코드가 중복되는 경우가 있다.

#

## hooks 사용하는 이유 (리액트에서 사용 권장)

- 코드가 간결해지고 가독성이 좋아지며 재사용성에 용이하다.
- componentDidMount, componentDidUpdate, componentWillUnmount 등을 useEffect 훅을 사용하여 훨씬 쉽고 간편하게 사용할 수 있다.
- 독립적인 테스트와 재사용이 가능하다.

---

## 1️⃣ useState

함수형 컴포넌트는 랜더링이 되면 새로운 컴포넌트가 다시 생성된다. 하지만 상태관리를 하기 위해서 이전 상태를 기억하고 있어야 하는데 useState 덕분에 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.

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

#

### setState는 비동기로 동작한다.

리액트는 **이전 VDOM과 이후 VDOM을 비교**하여 변경된 부분이 있다면 **변경 사항만 실제 DOM에 업데이트** 한다. 이벤트 핸들러에서 setState의 인자로 콜백함수를 전달하지 않고 직접적으로 값을 업데이트 한다면 해당 값을 덮어씌워 업데이트하기 때문에 실질적으로 기대하던 변경된 값을 볼 수 없다.

- 동일한 state를 연속적으로 업데이트하는 경우, setState가 배치 처리에 의해서 한번의 랜더링으로 최신 상태를 유지한다.
- 리액트는 내부적으로 **16ms 단위로** 진행하는 batch update를 통해 setState를 일괄 처리하여 랜더링을 한 번만 발생하게 한다.  
  (`배치 : 여러개의 state 업데이트를 하나의 렌더링(16ms 기준)으로 묶는 것을 의미한다.`)

- 그럼 **동기적으로 사용하는 방법**은 ??  
  · useEffect의 의존성 배열을 이용하는 것이다.  
  · setState의 인자로 함수를 넣는 것이다.

---

## 2️⃣ useEffect

**useEffect**는 컴포넌트를 외부 시스템과 동기화 할 수 있는 React Hook이다.

```javascript
useEffect(setup, dependencies);
```

- **setup**

> Effect의 로직이 포함된 함수(콜백함수)이다. 컴포넌트가 처음 **DOM에 추가되었을 때 리액트는 이 함수를 실행**시킬 것이고, 다시 랜더링할 때마다 clear up 함수가 있다면 clear up 함수를 먼저 실행한 다음에 콜백함수가 실행된다.

- **optional(dependencies)**

> setup함수 코드 내에서 참조되는 모든 반응값 리스트이다. 뿐만 아니라 리스트에는 컴포넌트 내에서 직접 선언된 props, 변수, 함수 등 포함될 수 있으며 항상 [dep1, dep2, dep3] 인라인 형식으로 작성해야한다.

### ✔️ 주의 사항

- 외부 시스템과 **동기화하려는 것이 아니라면 필요하지 않다.** 즉 사용하지 않는 것이 좋다.
  > · 외부 시스템이란 React에 의해 제어되지 않는 모든 코드를 말한다.
- dependencies로 함수·객체일 경우 자주 실행될 위험이 있다.
  > · 외부로 추출하여 상태를 업데이트한다.

#

### React에서 side-effect 처리

react 함수컴포넌트에서 side effect는 **랜더링이 아닌 외부세계에 영향을 주는 어떠한 행위, 부수적인 행위**라고 말할 수 있다.

즉, 함수가 매개변수를 받아 **결과를 생성하는 것과 무관한 외부의 상태를 변경하거나 외부와 상호작용**해야 하는 코드는 **useEffect 훅을 통해 분리**해야한다.

#

### 비동기를 비롯한 대표적인 side effect

- 데이터를 가져오기 위해서 외부 api 호울할 때 (외부 데이터)
- 네트워크를 통해 request를 전송할 때 (외부 데이터)
- setTimeout(), setInterval() 등의 타이머 함수를 사용할 때 (브라우저에서 타이머 설정)
- 직접 컴포넌트 DOM을 수정할 때 (브라우저)

```javascript
function UserProfile({ name }) {
  const message = `${name}님 환영합니다!`;

  //Side-Effect 코드를 UseEffect로 분리
  useEffect(() => {
    document.title = `${name}의 개인정보`;
  }, [name]);
  return <div>{message}</div>;
}
```

#

### useEffect 의존성 배열

useEffect에서 의존성 배열을 다루는 것은 굉장히 중요한 부분이다. 제대로 다루지 못한다면 버그가 발생할 확률이 높아진다.

- useEffect 두번째 인자로 해당하는 인자 즉 의존성에 따라 useEffect가 실행한다.
- 두번째 인자를 넘기지 않으면 Effect는 매번 실행되고, 빈 배열을 넘긴다면 컴포넌트의 첫번째 랜더링 이후에 딱 한번 실행된다.

```javascript
useEffect(effect, ['의존성']);
```

#

### useEffect 의존성 배열 잘 설정하는 법

- 가능하다면 의존성을 적게 만들어라

`Bad`

```javascript
// bad
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // count 상태를 의존성 배열로 전달해야 한다.
    const intervalID = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, [count]);

  return (
    <div>
      <h1>count:{count}</h1>
    </div>
  );
}
```

`Good`

```javascript
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h1>count:{count}</h1>
    </div>
  );
}
```

#

- 모든 의존성은 빼먹지 말고 의존성 배열에 명시

```javascript
// bad
function Component() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clikced ${count} times`;
  }, []);
}

// good
function Component() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clikced ${count} times`;
  }, [count]);
}
```

#

- 함수 컴포넌트 내부에서 선언한 `object, function`의 경우에는 함수 컴포넌트의 매 호출마다 새로운 객체, 함수가 선언되어 리액트는 이전 객체와 비교하면 새로운 객체라고 판단한다.

따라서 다음 코드는 무한 루프를 반복하게 된다.

```javascript
function Component() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(increaseCount, [increaseCount]);
}
```

이를 해결하가 위해서

⒈ 의존성을 제거하기 → 함수를 effect안에 선언하기

```javascript
function Component() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increaseCount = () => {
      setCount((prev) => prev + 1);
    };

    increaseCount();
  }, []);
}
```

⒉ 함수를 컴포넌트 바깥으로 이동시키기

```javascript
function Component() {
  useEffect(getUserAuth, [getUserAuth]);
}

const getUserAuth = () => {
  localStorage.getItem('ACCESS_TOKEN');
};
```

⒊ 메모이제이션

```javascript
function Component() {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    // do something 1
    increaseCount();
  }, [increaseCount]);

  useEffect(() => {
    // do something 2
    increaseCount();
  }, [increaseCount]);
}
```
