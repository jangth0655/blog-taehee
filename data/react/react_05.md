---
title: useContext
category: react
createdAt: 2022-8-20
updatedAt: 2022/12/29
---

# useContext

리액트는 여러개의 컴포넌트들로 이뤄져 있는 애플리케이션이라고 할 수 있다. 또한 리액트의 데이터 흐름은 일반적으로 위에서 아래 즉 **상위컴포넌트에서 하위 컴포넌트** 내려간다.

이처럼 여러 컴포넌트에서 **전역적으로 데이터가 필요한** 경우(예를 들어 User, Theme 등) 문제가 발생하는데

- **props drilling** 반복적으로 여러 컴포넌트에 props를 전달한다. 가독성 뿐만 아니라 유지보수에 좋지 않다.
- props를 업데이트 할때 마다 **해당 props를 갖고 있는 컴포넌트는 리랜더링이 발생**하는데 즉 props drilling을 통해 props가 필요하지 않는 컴포넌트에서도 **불필요한 리렌더링이 발생**하는 문제가 있다.

https://blog.logrocket.com/wp-content/uploads/2021/05/react-component-tree.png

따라서 useContext를 props drilling을 하지 않고도 **필요한 데이터를 여러 컴포넌트에 쉽게 공유**해 줄 수 있다.

#

## 간단하게 다크모드 구현해보기

### · context

```javascript
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    console.log('toggle');
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
```

context를 생성하여 context.Provider의 value로 상태 및 함수를 넣어주고 children(하위 컴포넌트)를 wrapping 한다.

- createContext에 초기값을 넣어주고 context를 생성한다.
- 생성된 context를 통해 Provider로 children(하위 컴포넌트)을 wrapping한다.
- useContext 훅을 사용하여 해당 데이터를 공유하여 사용한다.

#

### · App.js(useContext 사용)

```javascript
import ThemeProvider, { useTheme } from './context/themeContext';

function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;

const Page = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className='page'>
      <Header />
      <Content />
      <button onClick={toggleTheme} className='button'>
        다크모드
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <header className='header'>
      <h1>Welcome 홍길동 !</h1>
    </header>
  );
};

const Content = () => {
  const { isDark } = useTheme();
  return (
    <div>
      <h1>{isDark ? '다크모드' : '라이트모드'}</h1>
      <span>홍길동님, 좋은 하루 되세요.</span>
    </div>
  );
};
```
