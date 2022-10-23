---
title: useReducer & context
category: react
name: ""
---

## useReducer

- 여러 하위값과 관련된 복잡한 상태 로직이 있는 경우, 전 상태값과 의존성이 강한경우 선호된다.
- 콜백대신 dispatch를 전달할 수 있기 때문에 성능을 취적화할 수 있다.
- 사용  
  → 리듀서 함수를 선언하고, 초기 state와 action을 전달 받는다.  
  → 전달받은 state와 action을 통해 리듀서 함수에서 처리한다.  
  → 리듀서를 사용할 컴포넌트에서는 useReducer에 초기 state와 사용할 리듀서 함수를 전달한다.  
  → useReducer는 처리된 데이터와 dispatch함수를 반환한다.  
  → dispatch는 리듀서에 사용될 action(type, value 등)을 리듀서에 전달한다.

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count:{state.count}
      <button onClick={()=>dispatch(type:"decrement")}>-</button>
      <button onClick={()=>dispatch(type:"increment")}>+</button>
    </>
  )
}
```

---

## Context

- 여러 컴포넌트에서 상태를 공유 및 엑세스 해야할 경우 사용된다.
- 모든 컴포넌트에 적용하는 것 보단 필요한 경우 context로 랩핑하여 사용하는 것이 좋다.  
  → context가 변경되면 해당 context를 공유하고 있는 컴포넌트가 리랜더링 되기 때문에.
- 사용  
  → createContext를 생성하고  
  → context가 사용될 컴포넌트로 전달하기 때문에  
  → Provider 컴포넌트를 만들어 context를 사용할 컴포넌트를 랩핑한다.  
  → context를 사용할 컴포넌트에서는 useContext를 통해서 값을 받아올 수 있다.

```javascript
const MyContext = React.createContext(defaultValue);

const Provider = ({ children }) => {
  return (
    <MyContext.Provider value={"공유 하는 값"}>{children}</MyContext.Provider>
  );
};

const App = () => {
  return (
    <Provider>
      <AppComponent />
    </Provider>
  );
};

const AppComponent = () => {
  const value = useContext(MyContext);
  return <div></div>;
};
```
