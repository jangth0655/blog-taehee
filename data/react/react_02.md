---
title: 리액트 구조
category: react
createdAt: 2022-8-19
updatedAt: 2022/9/23
---

# 리액트 구조

- 우리가 만든 컴포넌트들을 html로 연결해줘야하는데 **그것이 `react-dom` 이다.**
- ReactDOM의 render함수가 id가 root인 html의 태그와 root 컴포넌트를 연결해준다.
- 즉, root라는 id를 가진요소에 제일 상위 컴포넌트(App)와 연결해준다.
- 사용자엑 최종적으로 보여진느것은 html 즉 다큐먼트.

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
- 리액트는 상태번화 이벤트 해들링, 데이터 표현 등의 로직들이 서로 연결되어 있기 때문에 그리고  
  → '느슨한 결합'을 위해 html파일과 logic의 파일을 분리하는 대신에, 한 컴포넌트에서 표현할 수 있도록함.
- 자바스크립트 코드가 작성이 가능하다.

```javascript
function App() {
  const name = 'taehee';
  return (
    //<></>
    <React.fragment>
      <h1>Hello !!</h1>
      {name && <h1>Hello !!!!! {name}</h1>}
    </React.fragment>
  );
}
```
