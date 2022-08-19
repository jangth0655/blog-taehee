---
title: setState
category: react
name: ""
---

# setState

- setState()는 컴포넌트의 state오브젝트 업데이트를 예약합니다.
- state가변경 될 때, 컴포넌트는 re-rendering를 응답합니다.
- **데이터(state)가 변경이 되면 → 리액트가render() 호출하여 UI가 업데이트 된다.**
- ✨ 우리가 원하는 의도한데로 **컴포넌트를 업데이트하기 위해**서는 **setState() 호출**해야한다.  
  → 리액트가 업데이트 되어야 한다고 알아 차리게 하기위해서

---

## ✨ setState함수는 비동기 API

- setState를 호출한다고 해서 바로 render함수가 호출되는 것이 아니라,  
  업데이트 요청을 하고 다시 뒤에서 이어지는 코드가 실행된다.
- **비동기로 동작하기 때문에 동시 다발적으로 요청된 여러 setState를 더 효율적으로 처리**할 수 있다.
- state를 업데이트 하기 이전 state값에서 계산이 이루어지는 경우  
  → 이전 state값을 받아서 그 값을 업데이트 해야한다. (**state(prev => new prev)**)
