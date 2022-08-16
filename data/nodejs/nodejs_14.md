---
title: Express Server
category: nodejs
name: ""
---

# Make Server

```javascript
import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  console.log("req", req);
  res.send("hi");
});

app.listen(4000);
```

---

## About Request (params, query)

- url params : url을 통해 주어진 정보
- url query : 지정된 parameter에 값을 할당하는 url의 일부이다.  
  → `http://locahost:3000/taehee?keyword=frontend` // {keyword:frontend}

```javascript
app.get("/sky/:id", (req, res, next) => {
  console.log("req", params); // {id:`${id}`}
  console.log("req", req.query); // ?keyword=abc -> {keyword:'abc'}
  res.end();
});
```

---

## About Response

- request에대 **항상 response를 해야한다.**
- 같은 콜백에서 **반드시 response를 리턴**해야한다.

```javascript
app.get("/", (req, res, next) => {
  res.setHeader("key", "value"); // header에 정보를 전달할 수 있다.
  res.json({ ok: true }); // res.send('ok'), res.end() ...
});
```

---

## ✨✨✨ About Middleware

- 누가 먼저 요청을 했는지 중요하다. 즉 **요청 순서가 중요**하다.
- 항상 흐름이 이어져야 한다.
- `next(error, 'route')` 에러와 route를 전달할 수 있다.  
  → route : 다음 요청의 경로로 넘어간다.
- app.all : 어떠한 req.method를 보내던간에 항상 수행이된다. → /경로
- app.use : all과 똑같이 모든 method에 대해 수행하지만, → /경로/\*

```javascript
// /api에 대해서만
app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

// /sky, /sky/asdf ... 접근 가능
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first"); // res,next를 호출하지 않으면 서버 반응 ❌, (더 이상 진행되지 않는다)
    next(); // 다음으로 넘어간다.
  },
  (req, res, next) => {
    // next() 호출했기때문에 출력됨
    console.log("first1");
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.get("/", (req, res, next) => {
  console.log("third");
});

// 어떠한 경로도 처리되지 않았다면
app.use((req, res, next) => {
  res.status(404).send("Not Found.");
});

// 중간에 에러가 발생하더라도 마지막에 에러처리가 된다.
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Sorry");
});
```

---

## Post

```javascript
app.use(express.json());
app.post("/", (req, res, next) => {
  console.log(req.body);
});
```
