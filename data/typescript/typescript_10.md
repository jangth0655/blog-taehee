---
title: Type Assertion
category: typescript
name: ""
---

# Type Assertion 💩

- 타입을 강요할 때
- 타입을 확실히 알고 있을 때
- ✅ 하지만, 타입이 다를경우 예상치 못한 에러가 발생할 수 있다.
- ✅ 100% 확신할 때 사용한다.

```typescript
function jsStrFunc() as string {
  return "hello";
}

// any 타입이라면 때문에 string api를 사용할 수가 없다.
const result = jsStrFunc();

//  ! 타입을 확신 할 때
function findNumber() : number[] | undefined {
  return undefined
}
const numbers = findNumber()!;
numbers!.push(2);
```
