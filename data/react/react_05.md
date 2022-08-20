---
title: PureComponents / memo & useCallback
category: react
name: ""
---

## pureComponent와 memo

- state와 props 변화가 없다면 렌더함수가 호출되지 않는다.

---

## shouldComponentsUpdated

- 성능 최적화를 위해 사용한다.
- 컴포넌트의 출력이 현재 state와 props에 영향받지 않는지 여부를 React에 알려준다. (true or false)
- **즉, 참조값이 같으면 업데이트할 필요가 없기때문에 false**
- 디폴트로 state가 변경되면 re-render하는 것 (true).
- 새로운 props와 state를 받았을 때 렌더링 전에 호출된다.

---

## pureComponent

- 성능향상을 위해 같은 state와 props로 같은 결과를 렌더한다면, pureComponent를 사용하면 된다.
- React.Component와 차이점은 **얕은 props와 state를 비교**로 shouldComponents를 구현한다.  
  → 하위 컴포넌트들에 props 업데이트를 스킵하기 때문에 하위 컴포넌트 'pure'를 확실히 확인해야 한다.

---

## memo

- React는 가상트리가 있고 DOM tree와 비교하여 변경이 필요하면 실질적으로 DOM Tree를 변경한다.
- memo는 이러한 확인작업을 스킵하기때문에 성능상 이점을 얻을 수 있다.
- 렌더링 결과를 메모이징(Memorizing)하여 불필요한 리렌더링을 스킵한다.
- React는 **컴포넌트를 랜더링 하고 결과를 메모이징**한다.
- 다음에 렌더링이 일어날 때 **props가 같다면 메모이징된 내용을 재사용**한다.

```javascript
//✅ 메모
const MemorizedBtn = React.memo(Button);

// memo()가 Button 컴포넌트를 랩핑해도 된다.
function Button({ text, changeValue }) {
  return <button onClick={changeValue}>{text}</button>;
}

// ✨✨✨ state, props가 변경되면, 해당컴포넌트(자식컴포넌트)가 리렌더링된다.
function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = setValue("Revert Changes");
  return (
    <div>
      <MemorizedBtn changeValue={changeValue} text={value} />
      <MemorizedBtn text="Continue" />
    </div>
  );
}
```

---

## useCallback

- 반복되는 함수(객체)를 메모라이징 하여 성능을 향상시킬 수 있다.  
  → 동일한 함수를 반환한다.
- 불필요한 렌더링을 막기위해, 상호 의존적인 관계 중 하나가 변경된 경우에만 메모화된(메모라이징)콜백을 반환한다.
- 같은 참조값을 가지고 있는경우 렌더링하지 않는다.
- **useCallback(fn,deps) = useMemo(() => fn,deps)**
