---
title: Lifecycle & useEffect
category: react
name: ""
---

## Lifecycle

- 컴포넌트에 의해 **처음 DOM에 렌더링**될 때 'mounting'
- 컴포넌트에 의해 생성된 **DOM이 제거**될 때 'unmounting'

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // 컴포넌트 출력이 DOM에 렌더링된 후
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

---

## useEffect

- Lifecycle(componentDidMount, componentDidUpdate, componentDidUnmount) 매소드와 유사하다.
- React는 DOM이 업데이트된 후 렌더링하게 하된다.  
  → **첫 번째 랜더링 후와 모든 업데이트 후에 실행된다**.
- useEffect 내애서 state와 props에 즉각적으로 바로 엑세스 할 수 있다.
