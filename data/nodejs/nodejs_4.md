---
title: Node Module - OS & process 정보
category: nodejs
name: ""
---

## 운영체제 정보

- 네트워크, cpu, 사용자 등 많은 정보를 알 수 있다.

```javascript
const os = require("os"); // os에 있는 모듈을 가져온다.
console.log(os.EOL === "\n"); // mac → true
console.log(os.userInfo);
console.log(os.freemem);
console.log(os.cpus);
```

## 프로세스 정보

- 현재 노드 프로그램이 동작하고 있는, 노드가 현재 동작하고 있는 프로세스의 정보
- 소켓여는것, 현재경로, 프로세스 관련 정보 등등 정보

```javascript
const process = require("process");

console.log(process.version);
console.log(process.pid);
console.log(process.env);
console.log(process.cwd);
console.log(process.uptime);

// 지금은 아니지만, 현재 수행되고 있는 코드가 완료되고 나면,
// 우선 순위를 높여서 콜백을 등록할 수 있다.
process.nextTick(() => {
  console.log("nextTick");
});

// 현재 코드가 다 수행되고 나서, 0초 뒤에 실행된다.
setTimeout(() => {
  console.log("setTimeout");
}, 0);
```
