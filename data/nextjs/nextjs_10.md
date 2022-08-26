---
title: Custom Document & Font
category: nextjs
---

# Custom Document

- custom `document`는 페이지를 렌더링하는데 사용되는 <html> 및 <body> 태그를 업데이트할 수 있다.
- `_app`은 페이지가 렌더링 될 때마다 실행되는 반면,  
  **서버사이드에서만 렌더**링된다. 그러므로 `onClick` 등과 같은 **이벤트 핸들러는 사용할 수 없다**.
- `getStaticProps` or `getServerSideProps`는 현재 지원되지 않는다.
-
- `pages/_document.js`

```javascript
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

---

## Font

- 빌딩 과정에서 폰트가 다운로드된다.
- **구글폰트만 지원한다.**.

```javascript
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```
