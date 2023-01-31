---
title: (팀) PINTALK - 관리자 페이지 redux 활용하기
category: dev-story
createdAt: 2023/01/31
updatedAt:
---

# 리덕스 툴킷 - 비동기활용과 상태관리

## ✔️ 리덕스 툴킷 사용이유

- props drilling을 방지
- 여러 컴포넌트간 상태 공유
- 불필요한 리랜더링 방지
- 작은 상태까지도 관리하며 상태에 따른 비동기 처리를 효율적으로 하기 위해

#

## ✔️ 리덕스 세팅

- Thunk를 통한 외부데이터(비동기) 처리는 slice extraReducers 함수를 통해 처리하였다.
- 내부적인 상태관리는 reducer를 통해 관리하였다.

```javascript
export const getList = createAsyncThunk(
  'GET_USER',
  async ({ page, submitData }, thunkApi) => {
    try {
      const response = await (
        await axios.get('/userMemberList', {
          params: {
            page,
            //.. 검색 시 데이터 받아옴 없으면 null 처리
          },
        })
      ).data;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = thunkApi.rejectWithValue(error.response.data)
          .payload.error;
        const statusCode = thunkApi.rejectWithValue(error.response.data).payload
          .status;
        throw new HttpError(statusCode, errorMessage).errorMessage;
      } else {
        console.error('Unknown Error');
      }
    }
  }
);

const initialState = {
  payload: [],
  submitData: undefined,
  loading: false,
  error: undefined,
  page: 1,
};

export const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    handlePage(state, action) {
      state.page = action.payload;
    },
    handleSubmit(state, action) {
      state.submitData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = [...action.payload];
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
```

---

## 1️⃣ 관리자 페이지

### Pagination 컴포넌트의 page 상태 관리

pagination 컴포넌트를 따로 분리하고 page 값에 따라 해당 하는 데이터를 비동기 처리하는 상황

```javascript
/*
	pageInfo : {
		totalPage: ..
		currentPage: ..
		startPage: ..
		endPage: ..
	}
*/
function Pagination({pageInfo}){
	const pageDispatch = useDispatch();
	//....
	const handlePageChange = (p) => {
    pageDispatch(userSlice.actions.handlePage(p));
  };

	return ...
}
```

- pageInfo는 상위컴포넌트에서 리스트 데이터의 페이지 정보를 받아오는 props이다.
- dispatch를 통해 page를 클릭할 때 마다 리스트 Slice의 리듀서를 호출하게 되며 reducer에서 로직을 처리한다.
- reducer에 의해 처리된 page 상태(값)는 리스트 Slice의 thunk의 매개변수로 전달되며 page 값에 따라 비동기 처리가된다.

#

https://ifh.cc/g/B7fTQF.jpg

---

### ☝️ 조건에 맞는 검색 값 관리 및 비동기 처리

조건에 맞는 검색을 했을 경우, 검색하기 위한 input 값에 따라 검색 데이터를 받아야하고 조건에 맞는 리스트 조회와 페이지네이션을 함께 구현해야하는 상황

```javascript
const submitData = {
      address: address?.trim() || null,
      //... 등 14개
    };
    userSubmitDispatch(userSlice.actions.handleSubmit(submitData));

// ✅ custom hook 비동기 데이터 보내기
const useMembers = () => {
	//...
	  const userListArgs = {
    page: userStatusSelector.page,
    submitData: userStatusSelector.submitData,
  };
  useEffect(() => {
    dispatch(getList(userListArgs));
  }, [userStatusSelector.page, userStatusSelector.submitData]);
	// ...
}

// ✅ userSlice
export const getList = createAsyncThunk('GET_USER', async ({ page, submitData }, thunkApi) => {
  try {
    const response = await (
      await axios.get('/userMemberList', {
        params: {
          page,
          address: submitData?.address,
         //.. submitData
        },
      })
    ).data;
    return response;
	// .... error 처리
```

- 검색 input의 값을 reducer로 보내고 리스트 Slice Thunk의 인자로 전달하였다.
  > Thunk로 전달 과정은 위 코드에서 커스텀 훅스를 거치게된다.  
  > custom hooks로 관리한 이유 : 로직을 한 곳에서 처리하고 수정하기 위해서
- thunk에서 전달받은 검색 input 값은 axios의 params로 맵핑하여 비동기 호출을 한다.

#

https://ifh.cc/g/4FBVaA.jpg

---

### ✅ 리스트에 관련된 page 값과 검색 input 값을 hooks로 관리하여 thunk로 전달

-로직을 하나로 관리하며 재사용성을 높이기 위해 custom hooks을 만들어 관리하였다.

```javascript
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/slices/userReducer';

const useMembers = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userSlice);
  const userStatusSelector = useSelector((state) => state.userSlice);

  const userListArgs = {
    page: userStatusSelector.page,
    submitData: userStatusSelector.submitData,
  };

  useEffect(() => {
    dispatch(getList(userListArgs));
  }, [userStatusSelector.page, userStatusSelector.submitData]);

  return {
    users: userList.payload[0],
    loading: userList.loading,
    error: userList.error,
    PageInfo: userList.payload[1],
  };
};
export default useMembers;
```
