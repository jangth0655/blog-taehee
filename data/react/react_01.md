---
title: About react
category: react
name: ""
---

# React

- 2013~ facebook에서 만든 자바스크립트 이벤트에 반응하고 UI 렌더링하는 **UI 라이브러리** 중 하나
- 가장대중적이다 즉, **강력한 커뮤니티가 형성**되어있다.  
  → 문서화가 잘되어있다.  
  → 이슈된 것들이 커뮤니티사이에서 많이 해결되었다.  
  → 이슈된 것들이 커뮤니티사이에서 많이 해결되었다.
- 웹, 모바일, 데스크탑 등등 여러가지로 할 수있는 일들이 많다.

---

## 리액트 컨셉

- What is React? A library for creating user interface(웹 UI를 만드는 라이브러리)
- **컴포넌트**들 (components)로 이루어진 라이브러리, 한 가지 기능을 수행할 수 있는 UI단위이다.
- 컴포넌트들은 서로 독립적이고 재사용이 가능한 것을 말한다.
- 재사용이 가능한 컴포넌트들을 모아서 웹애플리케이션을 만드는 것.
- 리액트 애플리케이션은 하나의 컴포넌트로 이루어져있다. → 제일 상위에 존재하는 컴포넌트 : 루트 컴포넌트
- DOM Tree와 마찬가지로 리액트도 트리형식이다.
- 컴포넌트안에 state가 변경(렌더링)이되면 해당 컴포넌트 안에있는 **자식 컴포넌트도 같이 렌더링** 된다.  
  → 가상 DOM Tree로 리액트 컴포넌트들이 메모리상에 보관되어져 있다.
  → 바로 리액트 컴포넌트들이 DOM Tree에 업데이트 되는 것이 아니라, 이전에 DOM Tree와 비교해서
  → 정말 업데이트 되는 부분이 있다면 **실질적으로 업데이트되는 부분만 변경**된다.
- ✨ **데이터가 변경이 될 때마다 애플리케이션 전체를 리액트가 알아서 render 호출한다.**

## 클래스 vs 함수

- 클래스  
  → 관련 데이터와 함수가 있다.  
  → state오브젝트가 있고, 변경될 때마다 render함수가 호출된다.

```javascript
class LikeButton extends Component {
  state = {
    numberOfLike: 0,
  };
  render() {
    return <button>{thie.state.numberOfLike}</button>;
  }
}
```

- 함수 (React Hook)  
  → 한 가지 기능을 수행.  
  → 클래스컴포넌트에서 할 수 있는 일을 함수 내에서할 수 있다.

```javascript
function App() {
  const [numberOfLike, setNumberOfLike] = useState(0);

  return <h1>Hello</h1>;
}
```
