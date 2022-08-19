---
title: 리액트 구조
category: react
name: ""
---

# 리액트 구조

- 우리가 만든 컴포넌트들을 html로 연결해줘야하는데 **그것이 `react-dom` 이다.**
- 즉, 사용자에게 궁극적으로 배포되는 것은 html
- html에서 id가 root인 element를 리액트 root 컴포넌트와 연결해준다. (`react-dom`)
- root라는 id를 가진요소에 제일 상위 컴포넌트(App)와 연결해준다.

```javascript
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  document.getElementById('root')
);
```

---

## JSX

- 자바스크립트코드이다. (_`https://reactjs.org/docs/introducing-jsx.html`_)  
  → 자바스크립트 문법을 확장한 것이다.
- 다수의 태그들을 리턴할 수 없기때문에 형제 노드가 있는경우 묶어줘야한다.
- 자바스크립트 코드가 작성이 가능하다.

```javascript
function App() {
  const name = "taehee";
  return (
    //<></>
    <React.fragment>
      <h1>Hello !!</h1>
      {name && <h1>Hello !!!!! {name}</h1>}
    </React.fragment>
  );
}
```
