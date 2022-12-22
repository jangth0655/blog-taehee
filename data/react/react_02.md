---
title: 리액트 랜더링 · jsx
category: react
createdAt: 2022/8/19
updatedAt: 2022/12/20
---

## React에서 작성한 코드가 어떻게 화면에 보여질까?

리액트의 컴포넌트를 정의할 때 jsx문법(자바스크립트 확장)을 많이 사용한다. 이러한 **jsx**은 바벨과 같은 툴에 의해 **자바스크립트로 변환**되는데 이때 `createElement`함수를 호출하게 된다. 이를 통해 **UI 구조를 설명하는 일반적인 js 객체인 React Element를 리턴 한다.**  
변환된 객체 안에는 type과 props 프로퍼티가 존재한다. type은 DOM노드의 태그 이름이고 props는 jsx에 포함된 모든 속성들이다.(props의 children은 하위 노드들)  
이렇게 **생성된 자바스크립트 객체**를 활용하여 **VirtualDOM 트리를 구성**하게 된다. 그리고 **객체를 render로 호출**하면 비로소 **실제 DOM요소**가 된다.

```javascript
// 일반적인 jsx문법
return <SomeComponent a={42} b="testing">Text here</SomeComponent>

// 이것을 호출해서 변환된다.
return React.createElement(SomeComponent, {a: 42, b: "testing"}, "Text Here")

// 호출결과 element를 나타내는 객체로 변환된다.
{type: SomeComponent, props: {a: 42, b: "testing"}, children: ["Text Here"]}

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
