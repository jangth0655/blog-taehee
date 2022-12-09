---
title: ContextAPI 에러
category: error-handling
createdAt: 2022/10/28
updatedAt:
---

# ContextAPI

## ❌ Error

- Error: The object passed as the value prop to the Context provider changes every render
  The object passed as the value prop to the Context provider

```javascript
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getLocalStorage({ name: TOKEN_NAME })
  );

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
```

---

## ✅ 원인

- Context를 사용할 경우,  
  → provider 하위에서 context에 대한 value 값이 변경될 때마다 하위 컴포넌트 전부 리랜더링 되는 것이 원인

---

## 🚀 해결책

- Context value를 useMemo를 이용하여 불필요한 리랜더링을 방지한다.

```javascript
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getLocalStorage({ name: TOKEN_NAME })
  );
  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
```
