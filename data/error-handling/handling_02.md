---
title: Netlify - redirection and rewrite Error
category: error-handling
name: ""
---

# Netlify - redirection and rewrite (배포 시 에러 발생)

## ❌ Error

- Looks like you've followed a broken link or entered a URL that doesn't exist on this site.

---

## ✅ 원인

- react router은 브라우저(client side) 라우팅을 처리하는데,
- 루트가 아닌 페이지로 이동할 때, Netlify(서버)에서는 경로를 어떻게 처리할지 몰라서 생기는 에러.

---

## 🚀 해결책

- public 폴더에 "\_redirects.txt" 파일을 통해 해결할 수 있다.
- 모든 페이지를 html.index로 이동시키며 status code 200을 준다.

```txt
/* /html.index 200
```
