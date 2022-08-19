---
title: State & Props
category: react
name: ""
---

# State와 Props

- *https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper*
- 컴포넌트의 주요 책무는 로우데이터(row-data)를 풍부한 HTML로 바꾸는 것입니다.
- 즉, state & props는 둘다 자바스크립트 오브젝트이며 HTML로 출력하는 로우데이터를 구성합니다.
- Props(Properties) : 컴포넌트로 전달받는다.
- State : 컴포넌트 내에서 관리받는다.(함수 내에서 선언된 변수랑 유사하다.)

---

## State

- **컴포넌트 안**에서 우리가 정의한 **컴포넌트의 State오브젝트**입니다.
- 컴포넌트 UI를 위한 데이터를 보관하는 오브젝트
- 데이터에 업데이트가 발생하면 리액트가 자동적으로 우리가 구현한 render 함수를 호출한다. (re-render)
- ✨✨✨ **State를 절대로 직접적으로 어떤 경우에도 수정하면 ❌**  
  → State를, 오브젝트를 항상 불변성(Immutability)으로 유지하는 것이 좋다.  
  → **setState는 비동기적**으로 동작하기 때문에 즉, 여러번 상태를 업데이트 하는 경우  
   ✓ 이전 업데이트 내용이 다음 업데이트 내용으로 덮어 쓰여질 수 있다.
  ✓ 비동기 특성상 예상치 못한 곳에서 예상치 못한 순가에 버그가 발생

---

## Props

- 컴포넌트 밖에서 주어진 데이터 (전달받는)
- Props는 State와 다르게 **컴포넌트 외부에서 데이터를 제공**받습니다. (재사용을 높이기 위해)