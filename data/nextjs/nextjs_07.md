---
title: API Routes
category: nextjs
---

# API Routes

- Nextjs로 API를 빌드하기 위한 솔루션을 제공한다.
- `pages/api`내 모든 어떤 폴더든, `/api*`로 맵핑되며 API 엔드포인트로 처리된다.
- API Routes가 작동하려면 **반드시 export default를 해야만한다.**
- 외부 URL를 마스킹하여 사용할 수도 있고, 환경변수를 통해 안전하게 외부 서비스에 엑세스할 수 있다.
- CORES 헤더를 지원하지 않는다.(기본적으로 same-origin only)  
  → handler를 CORES request helpers로 랩핑하여 해결할 수 있습니다.

```javascript
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
  }
  res.status(200).json({ name: "taehee" });
}
```
