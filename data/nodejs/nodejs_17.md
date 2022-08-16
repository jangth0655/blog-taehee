---
title: Express 미들웨어 & CORS
category: nodejs
name: ""
---

## Express 내부적으로 지원하는 미들웨어

```javascript
app.use(express.json()); // body를 보려면, (body를 파싱해준다.)
app.use(express.urlencoded({ extended: false })); // body를 파싱, HTML Form에대하여
app.use(express.static("public")); // 정적 파일(이미지, html,css,js 등)을 처리할 수 있다.
```

---

## Express 외부적으로 지원하는 미들웨어 (커뮤니티에서 제공하는)

- request안에 있는 쿠키에 대한 정보를 보려면, **cookieParser**
- 사용자에게 요청을 받을때마다 요청에 대한 정보를 log해준다. **morgan**
- 헤더에 정보가 추가된다. **helmet**

---

## CORS

- 브라우저에서만 가지고 있는 CORES 정책이 있다.
- 클라이언트와 서버가 동일한 IP주소에서 동작하고 있다면, 리소스를 제약없이 공유하고 주고받을 수 있다.
- 하지만, **다른 IP주소에 있다면 원칙적으로는 어떤 데이터도 주고받을 수 없다**.
- **따라서**, 서버에서 클라이언트에게 response를 할 때, **Access-Control-Allow-Origin을 Header에 추가**해야한다.  
  → ✅ client(Browser)에서 서버가 허용한 것을 알고 데이터를 받을 수 있다.

```javascript
// 불편하다 매번 설정해야한다.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://url");
  next();
});

// cors 미들웨어
import cors from "cors";
app.use(
  cors({
    origin: ["특정 도메인"],
    credentials: true, // 헤더에 토큰이나 사용자 정보를 추가하려고 할 때
  })
); // 등록만 하면된다.
```
