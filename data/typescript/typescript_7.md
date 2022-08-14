---
title: Intersection
category: typescript
name: ""
---

# Intersection

- & : &으로 표현된 모든 타입에 대해 접근이 가능하다.
- 접근할 때에도 두가지 타입을 모두 만족시키도록 해야한다.

```typescript
type Student = {
  name: string;
  score: number;
};

type Worker = {
  employeedId: number;
  work: () => void;
};

function interWork(person: Student & Worker) {
  console.log(person.name, person.employeedId, person.work());
}

interWork({
  name: "taehee",
  score: 1,
  employeedId: 123,
  work: () => {},
});
```
