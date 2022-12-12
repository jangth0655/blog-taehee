---
title: 리액트 랜더링 · jsx
category: react
createdAt: 2022/8/19
updatedAt: 2022/12/12
---

## 랜더링

- React로 구현된 애플리케이션은 일반적으로 **하나의 루트 DOM 노드**가 있다. react를 렌더링 하기 위해서는 우선 루트 DOM 요소를 ReactDOM.createRoot()로 전달하고 render함수 인자로 전달하여 렌더링 한다.
- 브라우저 DOM과 다르게 **React는 일반 객체이며 불변객체**이다. 즉 엘리먼트를 생성한 이후에는 엘리먼트의 자식 및 속성을 변경할 수 없다. **UI를 업데이트할 수 있는 유일한 방법은 새로운 엘리먼트를 생성**하여 `root.render(element)`로 전달 하는것이다.

```javascript
//HTML 파일

<div id='root'></div>;

// App.js
const root = React.DOM.createRoot(document.getElementById('root'));
root.render(element);
```

https://velog.velcdn.com/images%2Fhanblueblue%2Fpost%2F5cd402f8-39a4-476e-8e30-0be06aeec018%2Fimage.png

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
