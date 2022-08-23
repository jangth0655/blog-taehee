---
title: Custom App
category: nextjs
---

# Custom App

- Next.js은 **앱컴포넌트를 초기화 페이지**로 사용한다.
- 앱컴포넌트를 **재정의(override)**할 수 있고 **페이지 초기화를 컨트롤**할 수 있다.
- 앱컴포넌틀 통해  
  → 페이지들 사이간 레이아웃을 유지할 수 있다.  
  → 페이지들 이동(탐색)할 때 상태를 유지할 수 있다.  
  → 'componentDidCatch'를 사용한 사용자 오류처리할 수 있다.  
  → 추가적인 데이터를 페이지에 주입할 수 있다.  
  → global CSS를 추가할 수 있다.
- Custom App(**청사진**) 만들기 **\_app.js**  
  ✓ `Component` props : 활성페이지, 라우터간 네비게이트를 할때 마다 새로운 `page`로 변경해준다.  
  따라서 앱컴포넌트에 보내는 모든 `props`는 `page`로 받게된다.  
  ✓ `pageProps` : page에대해 미리 로드되는 초기 props가 있는 객체이다.

```javascript
// _app.js → Custom App

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```
