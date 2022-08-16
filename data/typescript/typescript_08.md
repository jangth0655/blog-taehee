---
title: Enum
category: typescript
name: ""
---

# Enum

- 여러가지의 **관련된 상수 값들을 한 곳에 모아서 정의**할 수 있게 도와주는 타입
- 자바스크립트에서는 없다. (타입스크립트에서 자체적으로 제공)
- 따로 값을 정의하지 않는다면, 자동으로 0부터 값이 매겨진다.
- **문제점** : enum으로 타입이 지정된 변수에 다른 어떠한 숫자도 할당 할 수있다.
- ✅ 대신 **Union타입을 활용**할 수 있다.

```typescript
enum Days {
  Monday, // Monday = 1  → 1부터 시작함.
  Tuesday, // "화요일" → 문자열도 따로 값을 매길 수 있다.
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
console.log(Days.Tuesday); // 1

// Days 타입이 생략됨
let day: Days = Days.saturday;

// Days에 정의된 어떤 것이든 할당을 할 수가 있다.
day = Days.Monday;
day = 1; // ✅  문제점 !
```
