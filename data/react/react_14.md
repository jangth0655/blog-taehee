---
title: Redux · Redux Toolkit
category: react
createdAt: 2023/01/13
updatedAt:
---

# 리덕스

- React랑 전혀 상관없고 어떠한 자바스크립트 앱에서라도 사용될 수 있는 라이브러리이다.
- 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너이다.
- 자바스크립트 앱이 점차 고도화 되고, 그에 따라 복잡해지는 데이터를 통제하기 위해 고안된 Flux 패턴 기반의 구현체이다.

#

https://images.velog.io/images/wnsaud9322/post/d82c51ab-aeec-40d8-8b7f-2c5571c3e185/image.png

#

## 리덕스의 세가지 철학

· **진실은 하나의 소스로부터 (Single source of truth)**  
→ 애플리케이션의 모든 상태는 하나의 저장소 안에 하나의 자바스크립트 객체 트리로 저장됩니다.

· **상태는 읽기 전용이다. (State is read-only)**  
→ 상태를 수정하는 유일한 방법은 dispatch()에 Action 객체를 담아 호출 하는 것 뿐이다.

· **변화는 순수 함수로 작성되어야 한다.**  
→ reducer는 변화 이전 state와 Action 객체를 입력으로 받아 새로운 state를 반환하는 순수 함수다.  
→ fetch 등 비동기 로직, new Date(), Math.random() 등 처럼 같은 인자로 주어지더라도 다른 응답을 리턴 하거나, 부수 효과(side effect)가 존재하는 함수의 경우 middleware자리에서 처리해야한다.

#

## 리덕스를 사용하는 이유? (상태관리 라이브러리를 사용하는 이유)

1️⃣ 전역 상태 관리

- 멀리 떨어진 컴포넌트 간의 상태 공유

2️⃣ Props Drilling을 피하기 위해

- 여러 컴포넌트에 걸처 있는 변화 · 불필요한 리렌더링 방지
- props를 통해 여러 번 전달되는 데이터가 전달 되는 경우 실제 변화가 적용되어야 하는 컴포넌트 뿐만 아니라 전달 경로에 있는 컴포넌트들도 re-render 됨

#

## 구성

- **Action**

  > 리덕스는 단뱡향이기 때문에 action을 통해서만 데이터를 변경할 수 있다. type, payload 프로퍼티를 가진 자바스크립트 객체. type은 어떤 액션인지, paload는 액션에 따른 데이터를 담고있다.

- **Dispatch**

  > 액션을 실행시킬 수 있는 함수.dispatch에 action을 담아 reducer를 호출한다. 즉 state를 업데이트 하는 유일한 방법은 dispatch함수를 호출하는 것이다.

- **Reducer**

  > 초기값(state)과 dispatch를 통해 받은 action 받아서 새로운 state를 반환하는 순수함수

- **rootReducer**

  > 여러개의 리듀서를 하나의 루트 리듀서로 병합.

- **store**

  > 상태 값들을 저장해두는 공간, store를 통해서 state를 받을 수 있다.

#

## Redux 미들웨어

action과 dispatch 사이에서 어떠한 기능 추가할 수 있게 해주는 미들웨어, 함수라고 할 수 있다

### redux-thunk

리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어, thunk를 사용하면 액션 객체가 아닌 액션 함수를 디스패치할 수 있다.

```javascript
// next를 dispatch라고 생각하면된다.
const thunk = (store) => (next) => (action) => {
  return typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};
```

#

https://blog-wp.hwahae.co.kr/wp-content/uploads/2021/09/210927_fin_05-1.jpg

#

---

## 리덕스 툴킷 (Redux Toolkit)

- 리덕스의 대표적인 문제
  > · 리덕스 스토어 환경 설정은 너무 복잡하다.  
  > · 리덕스를 유용하게 사용하려면 많은 패키지를 설치해야한다.  
  > · 리덕스는 보일러플레이트 즉, 어떤 일을 하기 위해 꼭 작성해야하는 (상용구)코드를 너무 많이 요구한다.

### 위와 같은 문제를 해결하기 위해 리덕스 툴킷 등장

기존의 사용하던 복잡한 리덕스 코드를 하나의 내장된 기능으로 만든 패키지

#

- **configureStore()**

  > 리덕스 createStore를 추상화한 것으로 리덕스의 번거로운 기본 설정 과정을 자동화하였다.

- **slice** : action과 reducer를 하나로 병합

- **Builder Callback** 표기법 (타입스크립트와 호환성을 위해서 더 선호된다.)
  > builder 객체는 addCase, addMatcher, addDefaultCase 메서드를 제공해준다.  
  > ✔️ `builder.addCase` : 액션 타입과 맵핑되는 케이스 리듀서를 추가하여 액션 처리해주며 addMatcher, addDefaultCase 메서드 보다 먼저 실행되어야한다.  
  > ✔️ `builder.addMatcher` : 새로 들어오는 모든 액션에 대해서 주어진 패턴과 일치하는지 확인하고 리듀서를 실행한다.  
  > ✔️ `builder.addDefaultCase` : 케이스 리듀서나 매처 리듀서도 실행되지 않는다면 기본 리듀서 실행한다.

#

- slice
  > reducer와 action

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

interface Item {
  id: string
  text: string
}

// 투두 슬라이스
const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Item[],
  reducers: {
    // 액션 타입은 슬라이스 이름을 접두어로 사용해서 자동 생성됩니다. -> 'todos/addTodo'
    // 이에 상응하는 액션 타입을 가진 액션이 디스패치 되면 리듀서가 실행됩니다.
    addTodo: {
      reducer: (state, action: PayloadAction<item>) => {
        state.push(action.payload)
      },
      // 리듀서가 실행되기 이전에 액션의 내용을 편집할 수 있습니다.
      prepare: (text: string) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})

const { actions, reducer } = todosSlice
export const { addTodo } = actions

export default reducer

</item>
```

#

- extraReducer
  > 내부 리듀서에 맵핑된 내부 액션이 아니라 외부 액션을 참조하는 의도를 가진다. createAsyncThunk 함수와 함께 쓰인다

```typescript
const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    // 'users/fetchUserById' 액션 타입과 상응하는 리듀서가 정의되어 있지 않지만
    // 아래처럼 슬라이스 외부에서 액션 타입을 참조하여 상태를 변화시킬 수 있습니다.

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },
});
```

#

- createAsyncThunk  
  일반적으로 비동기를 위해 사용된다.
  > 액션 타입문자열과 프로미스를 반환하는 콜백함수를 인자로 받아서 주어진 액션타입의 접두어로 사용하는 프로미스 생명주기 기반의 액션 타입을 생성한다.
  > 꼭 외부 네트워크 통신과 관련해서 사용되는 것이 아니고 비동기 로직을 구현할 때 응용할 수 있다.

```typescript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from './userAPI';

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);

    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  // extraReducers에 케이스 리듀서를 추가하면
  // 프로미스의 진행 상태에 따라서 리듀서를 실행할 수 있습니다.
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {})
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(fetchUserById.rejected, (state) => {});
  },
});

// 위에서 fetchUserById, 즉 thunk를 작성해두고
// 앱에서 필요한 시점에 디스패치 하여 사용합니다.

// ...

dispatch(fetchUserById(123));
```
