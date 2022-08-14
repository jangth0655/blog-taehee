---
title: Node Module - Buffer & Stream
category: nodejs
name: ""
---

# Stream & Buffer

- **Stream** : 서버에서 데이터(동영상 등) 전체가 아니라 잘게잘게 나눠진 데이터를 조금씩 보내진 것  
  → progressive download
- **Buffer** : 데이터를 한 곳에서 다른 한 곳으로 전송하는 동안 일시적으로 그 데이터를 보관하는 메모리 영역 // array of integers (메모리에 들어있는 데이터 자체를 가리킨다.)
- **Buffering** : 정보의 송수신을 원할하게 하기 위해서 정보를 일시적으로 저장하여 처리 속도의 차이를 흡수하는 방법
- 서버에서 데이터를 전달하는 속도가 사용자가 다운로드 속도보다 빠르다면 버퍼링을 이용해서 버퍼를 채워놓을 수 있다.
- 서버에서 데이터를 전달하는 속도보다 사용자가 다운로받는 속도가 느리다면 충분한 버퍼가 없기때문에 버퍼링에 걸렸다고 말한다.
- **메모리와 시간이 효율적이다.** → 파일을 한번에 전달(read)하는 것이 아니라 조금씩 전달(read)하기 때문에

-- <br />

```javascript
const buf = Buffer.from("Hi"); // <Buffer 48 69>
buf.length; // 2
buf[0]; // 72 → 배열로 접근하면 아스키코드로 출력
buf.toString("utf-8"); // → "Hi" 기본으로 utf-8

//create
//데이터가 들어있을 수 있기때문에 항상 초기화하는 것이 좋다.
const buf2 = Buffer.alloc(2); // 사이즈 2만큼 메모리에서 사용가능한 공간을 확보하고 초기화 시켜준다
buf2[0] = 72;
buf2[1] = 105;
buf2.toString(); // Hi
const buf3 = Buffer.allocUnafe(2); // 공간만 확보하고 초기화하지 않는다.

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]); // 합친다.
newBuf.toString();
```

---

## 파이프

```javascript
const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip(); // 압축
const writeStream = fs.createWriteStream("./file2.zip");
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done");
});
```
