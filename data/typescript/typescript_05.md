---
title: Type Alias
category: typescript
name: ""
---

# ✨✨ Type Alias

- 원하는 새로운 타입을 정의할 수 있다.
- 리터럴 타입으로 정의할 수 있다.

```typescript
type Text = string;
const name: string = "tahee";
const address: Text = "korea";

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "taehee",
  age: 12,
};

// String Literal Types
// 다른 문자열 변경불가
type Name = "name";
let taeheeName: Name;
taeheeName = "name";

type Boal = true;
const isCat: Boal = true; // false → error
```
