---
title: Node Module - 모듈
category: nodejs
name: ""
---

## This

- 함수 안에서 this : global
- class : 클래스 자체를 가리킨다.
- 그냥 로그 출력 : this === module.exports

---

## 모듈(export, require)

- 다른 모듈에 있는것을 쓰기 위해서는 해당하는 모듈에서 노출할것을 export해야한다.

```javascript
// count.js
let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.export.getCount = getCount;
module.export.increase = increase;
console.log(module) // 모듈정보

export = {}
export.increase = increase  // module 생략이 가능하다 but 차이가 있다!
console.log(module) // getCount만 있다. increase is not defined


// app.js
console.log(getCount); // getCount is not defined

const counter = required("./counter/js");
counter.increase();
console.log(getCount); // 1
```

---

## 모듈(export, import)

```javascript
// counter.js
let count = 0;

export function increase() {
  count++;
}

export function getCount() {
  return count;
}

// app.js
import { increase, getCount } from "./counter.js";
increase();
console.log(getCount());

import * as counter from "./counter.js";
counter.increase();
console.log(counter.getCount());
```
