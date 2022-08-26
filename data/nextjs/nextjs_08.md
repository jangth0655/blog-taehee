---
title: Middleware
category: nextjs
---

# Middleware

- 미들웨어는 운영체제와 운영체제에서 실행되는 애플리에키션 사이에 위하는 소프트웨어
- 미들웨어는 **request가 완료되기 전에 코드를 실행**할 수 있습니다.
- API Routes도 포함하여 민들웨어가 실행된다.
- rewrite, redirection, header, cookies등을 통해 response를 수정할 수 있습니다.
- ✅ `pages/middleware.ts`
- pages폴더 루트안에 있으면 모든 페이지에 대해 적용된다.

```typescript
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.ua?.isBot) {
    return new Response("Plz don't be a bot", { status: 403 });
  }
  if(!req.cookies.저장된 쿠키이름){
    return NextResponse.redirects('/')
  }
}
```
