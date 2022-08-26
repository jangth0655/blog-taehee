---
title: Dynamic Imports
category: nextjs
---

# Dynamic Imports

- Next.js는 `import()`를 사용하여 외부라이브러리를 `lazy loading`하고,  
  next/dynamic을 사용하여 리액트 컴포넌트를 지원합니다.
- next/dynamic는 `React.lazy`의 확장입니다.  
  즉, **한번에 소스를 로드하는 것이아니라 필요할때 로드한다**.
- `Suspense`와 함께 사용하면 `Suspense fallback`이 실행되고 그다음에, `Suspense`가 해결된 후  
  실행됩니다.

```javascript
// 로딩이 되고 난 후 resolve가되면 Header
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHeader = dynamic(() => import("../components/header"), {
  suspense: true,
});

export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicHeader />
    </Suspense>
  );
}
```
