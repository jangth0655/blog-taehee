---
title: Script
category: nextjs
---

# Script Components

- HTML <Script> 요소의 확장이다.
- **앱에 있는 스크립트를 로딩하는데 우선순위**를 정할 수 있다.
- 로딩성능을 개선하면서 개발자시간을 절약할 수 있다.
- strategy  
  ✓ beforeInteractive : 페이지와 상호작용하기 전에 로드된다.  
  ✓ afterInteractive : 페이지와 상호작용 후 즉시 로드된다.  
  ✓ lazyOnLoad : 다른 모든 데이터나 소스를 불러온 후에 로드
- 스크립트를 불러온다음 해당 함수를 실행

```javascript
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://www.google-analytics.com/analytics.js" />
    </>
  );
}
```
