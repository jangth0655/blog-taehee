---
title: Array & Tuple
category: typescript
createdAt: 2022-8-15
updatedAt:
---

## Array

- 한가지 타입만을 가질 수 있는 배열

```typescript
const fruits: string[] = ['apple', 'banana'];
const scores: Array<number> = [1, 2, 3];
// readonly 사용하려면 string[]
function printArray(fruits: readonly string[]) {}
```

## Tuple

- 꼭 필요한 경우, 꼭 유용할 경우를 제외하고는 권장하지 않는다. ❌
- tuple → interface, class, typeAlias
- 배열인데, 서로 다른 타입을 함께 가질 수 있는 배열

```typescript
let student = [string, number];
student = ['name', 123];
student[0]; // name
student[1]; // 123
const [name, age] = student;

// tuple 활용 react
const [string, setString] = useSate('');
```
