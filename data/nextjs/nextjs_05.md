---
title: Redirect & Rewrite
category: nextjs
---

# Redirect & Rewrite

- next.config.js(or mjs): next.js의 설정을 커스텀하기위해  
  → node.js module로 next.js서버와 빌드 단계에서 사용됩니다. (not browser build)
- next.config.js를 설정할 경우 서버를 재시작해야한다.
- **Redirects** : 들어오는 request path를 다른 목적지 path로 리디렉션 해준다.
- permanent : 브라우저/검색엔진에 해당 정보를 기억할지 여부를 나타낸다.(cache 여부)
- **Rewrites** : 프록시 url역할을 하며, **목적지 path를 마스크**한다.
  → request url로 리디렉션되지만, 실제 url은 변경되지 않는다.

```javascript
// next.config.js
module.excport = {
  reactStrictMode = true,
  async redirects(){
    return [
      {
        source : '/old-post/:path',
        destination: "/new-post/:path"
        permanent: false
      }
    ]
  }
  async rewrites() {
     return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
};
```
