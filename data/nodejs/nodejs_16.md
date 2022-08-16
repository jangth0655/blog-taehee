---
title: Express Router
category: nodejs
name: ""
---

# Router

- 동일한 경로에 대해 라우터를 설정할 수 있다.
- 라우터를 설정하고 연결하여 모듈성 있게 정리한다.

- **app.js** ↓

```javascript
app
  .router("/posts")
  .get((req, res, next) => {
    res.status(200).send("GET: /posts");
  })
  .post((req, res, next) => {
    res.status(201).send("POST: /posts");
  });

// Router마다 정리한다.
import postRouter from "./post.js";
import userRouter from "./user.js";

app.use("/posts", postRouter);
app.use("/user", userRouter);
```

- **post.js** ↓

```javascript
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).send("GET: /posts");
});
```

- **user.js** ↓

```javascript
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).send("GET: /users");
});
```
