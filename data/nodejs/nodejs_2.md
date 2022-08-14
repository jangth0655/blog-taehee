---
title: Node Module - Console
category: nodejs
name: ""
---

# Console

- console.log : 로그 출력

-- <br />

```javascript
// 콘솔 로그들을 지움
console.clear();

// 로그 레벨
console.log(); // 개발
console.info(); // 정보
console.warn(); // 경보 (치명적이지 않음)
console.error(); // 에러, 사용자 에러, 시스템 에러

// assert 참이 아닌경우에만 출력
console.assert(2 === 3); // Assertion failed
console.assert(2 === 2); // 출력 안함

// print object
console.log(obj);
console.table(obj); // 표 형식으로
console.dir(obj); // 추가적으로 컨트롤이 가능하다.

// measuring time, 시간이 끝날 때까지 얼마나 걸리는지 알려준다.
console.time("start");
console.timeEnd("end");

//counting, 몇번 호출되었는지 횟수를 알려준다.
function a() {
  console.count("a");
}
a(); // a 1
a(); // a 2

//trace
```
