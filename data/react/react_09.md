---
title: Server Components (with Nextjs)
category: react
name: ""
---

# React Server Components

- 서버에서 React 컴포넌트를 렌더링할 수 있다.
- 자바스크립트 번들 사이즈에 영향을 주는 큰 의존성을 대신 서버측에서 처리할 수 있다.  
  → 브라우저에 더 적은 자바스크립트를 보내면서 페이지와 상호작용하는 시간이 더 적다.  
  → UX 성능이 향상된다.
- SSR과 React Server Components는 다르다.  
  ✓ 리액트 서버 컴포넌트는 페이지를 렌더링는걸 신경쓰지 않고, 서버에서 컴포넌트 렌더링하는 것을 신경쓴다.  
  ✓ SSR은 서버에서 페이지 전체를 렌더링하기 떄문에 페이지를 로드하는데 많은 시간이 걸릴 수 있다.
  ✓ 반면 Server Components는 특정 컴포넌트만 서버에서 실행된다.
- 파일 뒤에 'file.server.[js,ts,tsx,jsx]' 한다.

```javascript
// nextjs config
module.exports = {
  // ...기타 옵션
  experimental: {
    severComponents: true,
    runtime: "nodejs",
    reactRoot: true,
  },
};
```

```javascript
// file.server.js
// 서버사이드에서 컴포넌트 실행
function List() {
  // 서버에서 컴포넌트를 실행하기 때문에
  // 직접 db 엑세스할 수 있다.
  return <h1>Server Component</h1>
}

  export default function Coins() {
    return (
      <h1>Welcome RSC</h1>
      <Suspense fallback={'Rendering in the sever...'}>
        <List />
      </Suspense>
    )
  }
```
