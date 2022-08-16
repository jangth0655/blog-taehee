---
title: Express Error Handling
category: nodejs
name: ""
---

# Error Handling

- 클라이언트 요청에 응답하지 못했다면 **적절한, 정확한 에러메시지**를 전달해야한다.
- 시스템 내부에 문제가 있더라도 **서버가 중지되지 않도록** 처리하는 것

```javascript
// 동기적 에러를 잡을 수 있다,
// 반면 ✅ 비동기는 콜백함수 내부에 에러가 전달 즉 내부적으로 에러가 발생하기 떄문에 \
// ✅ 콜백함수에서 처리해야한다.
app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("/file.txt");
  } catch (e) {
    res.status(404).send("file not found.");
  }
});

// Promise, 내부에서 에러가 발생하기 떄문에 .catch로 처리해야한다.
app.get("/file2", (req, res) => {
  fsAsync
    .readFile("/file.txt") //
    .then((data) => {}) //
    .catch(next); // next()로 에러 전달
});

// async, await, ✅ await는 동기적 처리를 하지만, async {} 자체는 비동기이다.
// ✅ 즉 async {}에 에러가 발생한다면, promise에 발생하는 에러와 같다.
// ✅ async{} 내부 await는 동기적이기 때문에 try, catch 사용
app.get("/file3", async (req, res) => {
  try {
    const data = await fsAsync.readFile("/file.txt"); // 동기적
  } catch (e) {
    res.status(404).send("file not found.");
  }
});

// 최종적으로 보류한 에러처리
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
});
```
