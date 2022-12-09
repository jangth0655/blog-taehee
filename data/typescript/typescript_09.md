---
title: 타입 추론(Type Inference)
category: typescript
createdAt: 2022-8-15
updatedAt:
---

# 타입추론 Type Inference

- 타입을 지정하면, 타입스크립트에서 자동으로 타입을 유추할 수 있도록 해준다.
- 타입을 지정하지 않으면 암묵적으로 any타입이된다.
- **원시타입경우를 제외하고는 타입을 정확히 명시하는 것이 중요하다**.

```typescript
let text = 'string'; // text type = string

// any type ❌ → 타입을 정확히 명시해줘야 한다.
function print(message) {
  console.log();
}

// 리턴되는 값도 타입이 추론됨 (number)
function add(x: number, y: number) {
  return x + y;
}

const result = add(1, 2); // 자동으로 result도 유추된다.
```
