---
title: React Recoil(상태관리)
category: react
name: ""
---

# 상태관리

- 리액트 컴포넌트는 내장 상태 객체가 있다.
- 작은 리액트 애플리케이션은 컴포넌트를 사용하여 구축되며, 내부적으로 상태관리하고 잘 작동한다.
- **recoil 사용 이유**  
  ✓ 애플리에키션이 커질 수록 컴포넌트간 상태를 공유하고 관리하는 복잡성을 다루는 것은 어려워진다.  
  ✓ 컴포넌트 상태는 공통 상위컴포넌트(조상)만 통해서 상태를 공유할 수 있다.  
  ✓ react랑 사용방법이 유사하다.

---

## Recoil (Core ConCeption)

- 아톰(atom)과 셀렉터(selector)를 통해 자식 컴포넌트로 내려가는 데이터 흐름 그래프를 만들 수 있다.
- 상태가 필요한 컴포넌트에만 공유할 수 있다. (**여러 props를 거처 상태를 공유할 필요 없다.**)
- 상태 값(value)이 필요하다면, 컴포넌트가 직접 아톰에 엑세스 할 수 있다.

---

## **Atoms**

- 컴포넌트가 구독하고 있는 상태단위
- 유니크한 키가 필요하며 디폴트 값도 가지고 있다.
- 아톰이 업데이트 될 때, 아톰을 구독한 각 컴포넌트는 새 값으로 리렌더링된다.
- 여러 컴포넌트에서 동일한 아톰을 사용하는 경우, **해당 여러 컴포넌트는 상태를 공유**할 수 있다.
- 디버깅, 지속성, 모든 아톰의 맵을 볼 수 있는 **고유 키가 필요**하다.
- 아톰을 읽기 위해서는 useRecoilValue()
- 아톰의 상태를 업에티하는 setter함수 ? useSetRecoilState()
- 아톰의 상태와 setter함수를 함께 적용할 수 있는 useRecoilState()

---

## atom과 상호작용하는 훅

- useRecoilState() : atom 읽고 쓰려고할 때
- useRecoilValue() : atom을 읽기만할 때
- useSetRecoilState() : atom에 쓰려고만할 때
- useResetRecoilState() : atom을 초깃값으로 초기화할 때

```javascript
// index.js index에서 RecoilRoot로 랩핑
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
  document.getElementById('root')
);

// atoms.js
export const isDarkAtom = atom({
  key:"isDark", // 고유한 키
  default:false // 기본 값
})

// App.js atom 연결
function App() {
  const isDark = useRecoilValue(isDark);
  return (
    <Layout></Layout>
  )
}
```

---

## **Selector**

- **이전 상태를 유지**하면서 **새로운 값을 파생하는 함수**라고 생각할 수 있다.
- **상태를 기반으로 하는 데이터를 계산**하는데 사용한다.
- **get** : 전달받은 인수({get} 함수)를 사용하여 아톰과 다른 셀렉터에 접근할 수 있다.
- **set** : 쓰기 가능한 상태를 반환한다.

```javascript
// atom
export const toDoState = atom({
  key: "toDo",
  default: [],
});

// selector
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [[toDosArray][DoingArray][DoneArray]];
  },
});

// ToDoList.js
const [toDo, ding, done] = useRecoilValue(toDoSelector); // useState와 비슷화다.
```
