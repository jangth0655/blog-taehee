---
title: PureComponents / memo & useCallback
category: react
createdAt: 2022-8-19
updatedAt: 2022/10/23
---

## pureComponent와 memo

- state와 props 변경된다면 애플리케이션 전체가 업데이트된다.
- 성능이 괜찮은이유 : Virtual DOM이 있기때문에
- 하지만 무거운 데이터를 받아오는 componentDidUpdated함수 등 있다면  
  → 전체가 업데이트 되기 때문에 예상하지 못한 일들이 발생할 수 있다.
- **pureComponent와 memo**는 state, props가 변화가 없다면 render함수 호출 ❌

---

## shouldComponentsUpdated

- 성능 최적화를 위해 사용한다.
- 컴포넌트의 출력이 현재 state와 props에 영향받지 않는지 여부를 React에 알려준다. (true or false)
- **즉, 참조값이 같으면 업데이트할 필요가 없기때문에 false**
- 디폴트로 state가 변경되면 re-render하는 것 (true).
- 새로운 props와 state를 받았을 때 렌더링 전에 호출된다.

---

## pureComponent

- 일반 Component 경우에는 shouldComponents를 구현하지 않았기때문에 setState가 호출될 때 render
- 성능향상을 위해 같은 state와 props로 같은 결과를 렌더한다면, pureComponent를 사용하면 된다.
- React.Component와 차이점은 **얕은 props와 state를 비교**로 shouldComponents를 구현한다.  
  → 하위 컴포넌트들에 props 업데이트를 스킵하기 때문에 하위 컴포넌트 'pure'를 확실히 확인해야 한다.

---

## memo

- React는 가상트리가 있고 DOM tree와 비교하여 변경이 필요하면 실질적으로 DOM Tree를 변경한다.
- React는 **컴포넌트를 랜더링 하고 결과를 메모이징**한다.
- props와 state들을 얕은 비교를하여 변경사항을 체크한다.
- **props와 state가 같다면 메모이징된 내용을 재사용**한다.
- 렌더링 결과를 메모이징(Memorizing)하여 불필요한 리렌더링을 스킵한다.
- 따라서 memo는 이러한 확인작업을 스킵하기때문에 성능상 이점을 얻을 수 있다.

```javascript
//✅ 메모
const MemorizedBtn = React.memo(Button);

// memo()가 Button 컴포넌트를 랩핑해도 된다.
function Button({ text, changeValue }) {
  return <button onClick={changeValue}>{text}</button>;
}

// ✨✨✨ state, props가 변경되면, 해당컴포넌트(자식컴포넌트)가 리렌더링된다.
function App() {
  const [value, setValue] = React.useState('Save Changes');
  const changeValue = setValue('Revert Changes');
  return (
    <div>
      <MemorizedBtn changeValue={changeValue} text={value} />
      <MemorizedBtn text='Continue' />
    </div>
  );
}
```

---

## useCallback

- 인라인 콜백과 해당 의존성 배열을 전달 받아 수행된다.
- 의존성 배열이 변경될 떄에만 콜백 함수가 수행된다.
- 불필요한 렌더링을 막기위해, 상호 의존적인 관계 중 하나가 변경된 경우에만 메모화된(메모라이징)콜백을 반환한다.
- 같은 참조값을 가지고 있는경우 렌더링하지 않는다. (메모라이징)
- **useCallback(fn,deps) = useMemo(() => fn,deps)**

```javascript
const memoizedCallback = useCallback(() => {
  () => {
    doSomething(a, b);
  };
}, [a, b]);
```
