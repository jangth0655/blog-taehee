---
title: Next JS Image
category: nextjs
---

# Next JS Image

- 모던 웹용으로 발전된 HTML img태그의 확장이다.
- Core Web Vitals를 달성하는데 도움이 되는 **다양한 기본 성능 최적화**가 포함되어있다.  
  ✓ Core Web Vitals  
   → 현재 로딩, 상호작용성 및 시각적 안정성을 측정하는 3가지 측정항목으로 구성
- 이미지를 next.js url로 만든다 = /\_next/image url handler로 압축한다.(가벼움)
- lazy loading할 수 있다.  
  → 필요한 시점까지 로딩을 연기한다.

---

## Local Image

- api에 의존하지 않은 파일내부에 있는 이미지
- public에서 import해온다.
- local Image이기 때문에 기본적으로 `placeholder="blur"`를 제공한다.

---

## Remote Image

- 반드시 src의 속성이 url**문자열**이야하며, relative 또는 absolute일 수 있다.
- 빌드 과정에 이미지에 접근할 수없기때문에 **반드시 width,height을 제공**하거나,
- 이미지의 사이즈를 모를 경우 `layout="속성"`을 사용해야합니다.
- 원격 이미지는 blurDataURL props을 수동으로 설정해야합니다.
- **Domain**  
  → next.js 이미지를 사용하기 위해서, `loader`를 기본설정하고 src에 대한 absolute URL을 입력해야한다.  
  → 리모트 이미지에 접근하기 위해서, next.config.js 파일에 remote hostname list를 정의해야한다.

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ["example.com", "example2.com"],
  },
};

// index.js
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  );
}
```
