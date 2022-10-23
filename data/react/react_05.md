---
title: Lifecycle & useEffect
category: react
name: ""
---

## Lifecycle Method

- 컴포넌트가 사용자에게 뵤여질때,  
  → 컴포넌트에 의해 **처음 DOM에 렌더링**될 때 'mounting'  
  → 컴포넌트에 의해 생성된 **DOM이 제거**될 때 'unmounting'  
  → 컴포넌트가 업데이트 되었을 때

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

## **useEffect**

- 필요한 이유 :
- 리액트는 상태가 업데이트되면 리렌더링이 된다.
- 만약 fetch를 같이 데이터를 받아오는 **무거운 작업이 필요**하다면,
- 리액트의 상태가 변경될때 마다 다시 fetch가 작동되기 때문에 성능에 너무 안좋을 수 있다.

```javascript
export default function Products() {
  const [products, setProducts] = useState([]);

  fetch("...");
  //....
  setProducts(data);
}
```

- useEffect 컴포넌트가 처음 마운트될 때, 혹은 의존성에 따라 사용될 수 있다.
- 의존성을 주입하여 의존성에 따라 업데이트를 컨트롤 할 수 있다.

```javascript
export default function Products() {
  const [products, setProducts] = useState([]);

  //해당 컴포넌트가 보여질때 처음 한번만 호출된다.
  useEffect(() => {
    fetch("...");
    //....
    setProducts(data);

    // 컴포넌트가 언마운트될때 (사라질 때)
    return () => {
      console.log("component unmount");
    };
  }, []);
}
```

```javascript
export default function Products() {
  const [products, setProducts] = useState([]);
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck((prev) => !prev);
  };

  // check가 업데이트 될때 마다 useEffect가 실행된다.
  useEffect(() => {
    fetch("...");
    //....
    setProducts(data);
  }, [check]);
}
```
