---
title: Basic Type
category: typescript
name: ""
---

# Basic Type

- javascript의 타입  
  ✓ 원시타입(Primitive) : number, string, boolean, bigint, symbol, null, undefined  
  ✓ 그 외의 Object : function, array...
- 타입스크립트 : 한번 정의된 타입에 다른 타입은 담을 수 없다.

-- <br />

```typescript
// number
const num: number = 1;

// string
const str: string = "hello";

// boolean
const boal: boolean = true; // false

// undefined 비어있는 공간이 자체가 없다, (무언가 있거나 없거나)
let age: number | undefined; // 보통은 null보단 undefined ✅
age = undefined;
age = 1;

// null 명확히 공간이 비었다라고 명시
let name: string | null;

// ❌ unknown, 어떤 종류의 데이터가 담길지 알 수 없다.
let notSure: unknown = 0;
notSure = "he";
notSure = true;

// ❌ any, 어떤 타입도 가능하다.
let anything: any = 0;
anything = "hello";

// void, 아무런 값도 리턴하지 않는다. 생략 가능하다.
function print(): void {
  console.log("hello");
}

// never,  절대 리턴하지 않는 함수, 호출하면 중지되고 kill된다.
function throwError(message: string): never {
  // message -> sever (log)
  //throw new Error(message); // 애플리케이션이 죽는다.
  //while (true) {}
}

// ❌ object, 원시타입을 제외한 모든 오브젝트 타입을 전달할 수 있다.
let obj: Object;
function acceptSomeObject(obj: Object) {}

acceptSomeObject({ name: string });
acceptSomeObject([1, 2, 3, 4]);
```
