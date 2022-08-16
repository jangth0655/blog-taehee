---
title: Node Module - file 동기와 비동기
category: nodejs
name: ""
---

# file 모듈

- 파일시스템을 이용하여 동기 또는 비동적으로 파일을 읽고 쓰기
- **비동기는 순차적으로 될 수도, 안될 수도** 있기때문에 주의가 필요하다

```javascript
const fs = required("fs");

// 동기적, 처리될까지 다음 코드 실행 하지 않는다.
try {
  fs.renameSync("./file/txt", "./file-new.txt");
} catch (error) {
  // error 처리
  console.error(error);
}

// 비동기적, 콜백함수
fs.rename("./file-new.txt", "./file/txt", (error) => {
  console.log(error);
});

// promise
fs.promises
  .rename("./file/txt", "./file-new.txt")
  .then(() => console.log(doen))
  .catch(console.error);

// Read a file
fs.readFile("./file/txt"); // buffer형태로 출력

// write a file
fs.writeFile("./file/txt", "hello :)");

// 기존의 데이터를 유지하면서 데이터를 추가하려면
fs.appendFile("./file/txt", "taehee");

// Copy
fs.copyFile("./file/txt", "./file2/txt");

// folder
fs.mkdir("sub-folder");

// Read a directory, 현재 디렉토리안에 있는 모든 파일을 읽는다.
fs.readdir("./");
```
