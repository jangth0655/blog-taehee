---
title: 제네릭
category: typescript
name: ""
---

# ✨ 제네릭

- 타입을 보장받고 여러 타입을 적용할 수 있다.

---

## ✨ 제네릭 조건 ✨

```typescript
const obj1 = {
  name: "name",
  age: 1,
};

const obj2 = {
  animal: "dog",
};

getValue(obj, "name"); // 'name'
getValue(obj, "age"); // 1
getValue(obj, "animal"); // "dog"

function getValue<T, K extends keyof T>(obj: T, key: K): T[k] {
  return obj[key];
}
```

---

## 함수

```typescript
// 숫자만 확인할 수 있다.
// 타입별로 다 만드는것은 너무너무 비효율적 ! 💩
function checkNotNull(arg: number | null): number {
  if (arg == null) {
    throw new Error("not valid number!");
  }
  return arg;
}

const result = checkNotNull(123); // 123 숫자 리턴

// ✅ 제네릭
function genericCheckNotNull<T>(arg: T | null): T {
  if (arg == null) {
    throw new Error("not valid number!");
  }
  return arg;
}

const genericResultStr = genericCheckNotNull<string>("hello"); // <string> 생략가능
const genericResultNum = genericCheckNotNull<number>(123);
const genericResultBoal = genericCheckNotNull(true);
```

---

## 클래스

```typescript
interface Either<L,R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L,R> implement Either<L,R> {
  constructor(private leftValue:L, private rightValue:R){
    left():L {
      return this.leftValue;
    }
    right():R {
      return this.rightValue;
    }
  }
}

const either<number,number> = new SimpleEither(4,5)
either.left()
either.right()
```
