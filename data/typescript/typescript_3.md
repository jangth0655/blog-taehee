---
title: Function
category: typescript
name: ""
---

# Function

--<br />

```typescript
// javascript
function jsAdd(num1, num2) {
  return num1 + num2;
}

// ✅ typescript
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// javascript
function jsFetchNum(id) {
  // code ...
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

// ✅ typescript
function fetchNum(id: string): Promise<number> {
  return;
}

// javascript => ✅ typescript
// Optional parameter, 있을 수도 있고 undefined일 수도 있다.
// or string | undefined
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}

printName("Steve", "Jobs");
printName("taehee");

// Default parameter
function printMessage(message: string = "default message") {
  console.log(message);
}
printMessage();

// Rest parameter
function addNumber(...nums: number[]): number {
  return nums.reduce((a, b) => a + b);
}

console.log(addNumber(1, 2));
console.log(addNumber(1, 2, 3, 4, 5));
```
