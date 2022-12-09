---
title: Union Types
category: typescript
createdAt: 2022-8-15
updatedAt:
---

# ✨ Union Types

- OR
- **정의한 타입들 중 하나**를 선택할 때 이용할 수 있다.

```typescript
type Direction = 'left' | 'right' | 'up' | 'down';
function move(direction: Direction) {
  console.log(direction);
}
move('left'); // 자동으로 Direction type을 보여준다.

type TileSize = 8 | 16 | 32;
const tile: TileSize = 8;

// function : login -> success, fail
type SuccessState = {
  response: {
    body: string;
  };
};

type FailState = {
  reason: string;
};

type LoginState = SuccessState | FailState;

function login(id: string, password: string): Promise<LoginState> {
  return {
    response: {
      body: 'logged in!!',
    },
  };
}
```

---

## Discriminated Union

- Union type에 차별화되는 이름이 동일한 타입을 두어 간편하게 구별 할 수 있는 것

```typescript
type SuccessState = {
  result: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  result: 'fail';
  reason: string;
};

type LoginState = SuccessState | FailState;

// printLoginState(state)
// success => good, fail => uu
function printLoginState(state: LoginState) {
  if (state.result === 'success') {
    console.log(`${state.response.body}`);
  } else {
    console.log(`${state.reason}`);
  }
}
```
