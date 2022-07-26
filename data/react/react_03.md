---
title: useState & Props
category: react
createdAt: 2022-8-19
updatedAt: 2022/10/23
---

## useState

- 리액트는 컴포넌트가 호출되면 내부적으로 다시 리랜더링 된다.
- useState 경우  
  → 내부적으로 데이터를 기억하고 있다.  
  → 리랜더링될 때 디폴트 값은 전달이 되지만, 내부적으로 이전값을 기억하고 있기 때문에  
  → 변경되지 않는다면 이전값을 보여준다.

---

## State와 Props

- *https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper*
- 컴포넌트의 주요 책무는 로우데이터(row-data)를 풍부한 HTML로 바꾸는 것입니다.
- 즉, state & props는 둘다 자바스크립트 오브젝트이며 HTML로 출력하는 로우데이터를 구성합니다.
- **props**(Properties) : 컴포넌트로 전달받는 데이터, 컴포넌트 밖에서 주어지는 데이터
  → why? 컴포넌트의 재사용을 높이기 위해서.
- **state** : 컴포넌트 내에서 관리받는다.(함수 내에서 선언된 변수랑 유사하다.)
- state와 props가 변경이 되면 해당 컴포넌트(자식컴포넌트)가 전체적으로 렌더링된다.  
  → 하지만 **실질적으로 업데이트 되는 요소만 업데이트한다.**

---

## State

- **컴포넌트 안**에서 우리가 정의한 **컴포넌트의 state오브젝트**입니다.
- 컴포넌트 UI를 위한 데이터를 보관하는 오브젝트
- 데이터(state)에 업데이트가 발생하면 리액트가 자동적으로 우리가 구현한 render 함수를 호출한다.
- ✨✨✨ **State를 절대로 직접적으로 어떤 경우에도 수정하면 ❌**  
  → State를, 오브젝트를 항상 불변성(Immutability)으로 유지하는 것이 좋다.  
  → **setState는 비동기적**으로 동작하기 때문에 즉, 여러번 상태를 업데이트 하는 경우  
   ✓ 이전 업데이트 내용이 다음 업데이트 내용으로 덮어 쓰여질 수 있다.  
   ✓ 비동기 특성상 예상치 못한 곳에서 예상치 못한 순간에 버그가 발생

---

## ✨✨ setState (상태변경)

- setState()는 컴포넌트의 state오브젝트 업데이트를 예약합니다.
- state가변경 될 때, 컴포넌트는 re-rendering를 응답합니다.
- **데이터(state)가 변경이 되면 → 리액트가 render() 호출하여 UI가 업데이트 된다.**
- ✨ 우리가 원하는 의도한데로 **컴포넌트를 업데이트하기 위해**서는 **setState() 호출**해야한다.  
  → 리액트가 업데이트 되어야 한다고 알여주기 위해서
- **오브젝트 state를 변경해야할 경우**  
  → 원시값의 경우 값 자체를 변경해도된다. 하지만,  
  → 오브젝트를 복사하는 경우 참조값만 복사하기 때문에, 직접적으로 수정(덮어 씌우면)하면 에러가 나타날 수 있다.  
  → 오브젝트를 업데이트해야할 경우 스프레드 연선자 or 새로운 배열 및 오브젝트를 만들어 업데이트한다.
- **불변성을 유지해야하는 이유**  
  → 불변성 : 직접적으로 변경하지 않고 새로운 값을 만들어내는 것  
  → 리액트는 내부적으로 새로운 값이 있을 경우 랜더링한다.  
  → 오브젝트인 경우 얕은복사를 하기 때문에, 즉 참조값만 가리키는 것이기 떄문에  
  → 새로운 껍데기(오브젝트)를 만들지 않으면 랜더링이 되지 않는다.
- setState를 호출한다고 해서 바로 render함수가 호출되는 것이 아니라,  
  업데이트 요청을 하고 다시 뒤에서 이어지는 코드가 실행된다.
- 따라서 **비동기로 동작하기 때문에 동시 다발적으로 요청된 여러 setState를 더 효율적으로 처리**할 수 있다.
- state를 업데이트 하기 이전 state값에서 계산이 이루어지는 경우  
  → 이전 state값을 받아서 그 값을 업데이트 해야한다. (**state(prev => new prev)**)

---

## Props

- 컴포넌트 밖에서 주어진 데이터 (전달받는)
- Props는 State와 다르게 **컴포넌트 외부에서 데이터를 제공**받습니다. (재사용을 높이기 위해)
