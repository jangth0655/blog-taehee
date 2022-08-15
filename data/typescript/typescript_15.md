---
title: Utility Types
category: typescript
name: ""
---

# Utility Types

- 타입을 변환이 가능하다.

---

## Index Type

```typescript
const obj = {
  name: "taehee",
};
// Object 접근 방법
obj.name;
obj["name"];

type Animal = {
  name: string;
  age: number;
  gender: "male" | "female";
};

type Name = Animal["name"]; // Name:string 타입
type Gender = Animal["gender"]; // "male" | "female"
type Keys = keyof Animal; // 'name'|'age'|'gender'

type Person = {
  name: string;
  gender: Animal["gender"];
};
const person: Person = {
  name: "taehee",
  gender: "male",
};
```

---

## Mapped Type

- 기존의 있는 타입들을 이용하면서 다르게 변환시키는 타입

-- <br />

```typescript
type Video = {
  title: string;
  author: string;
  description: string;
};

type VideoOptional = {
  title?: string;
  author?: string;
  description?: string;
};

// T타입을 받아와서 새로운 타입으로 변환
// T가 가지고 있는 키들중에 P = T의 키값을 다시 정의함.
type Optional<T> = {
  [P in keyof T]?: T[P];
};
type VideoOptional2 = Optional<Video>;
const videoOp: VideoOptional2 = {
  title: "", // optional, 있어도 되고 없어도 된다.
};
```

---

## Conditional Type

- 타입을 조건적으로 사용할 수 있다.

-- <br />

```typescript
type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean
```

---

## ReadOnly

```typescript
type ToDo = {
  title: string;
  description: string;
};

function display(todo: ReadOnly<ToDo>) {}
```

---

## Partial Type

- 기존의 타입중에서 부분적인 것만 허용하고 싶을 때

-- <br />

```typescript
type ToDo = {
  title: string;
  description: string;
  label: string;
  priority: "high" | "low";
};

function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
  return { ...todo, ...fieldToUpdate };
}
const todo: ToDo = {
  title: "learn Typescript",
  description: "study hard",
  label: "study",
  priority: "high",
};
updateTodo(todo, { priority: "low" }); // priority만 변경됨
```

---

## Pick Type

- 여러가지 타입을 가지고 있을경우 그 중에 몇가지만 타입을 다루기위해서 사용
- 원하는 타입만 가지고 제한적으로 사용

-- <br />

```typescript
type Video = {
  id: string;
  title: string;
  url: "";
  data: string;
};
type VideoMetadata = Pick<Video, "id">;
function getVideoMetadata(id: string): VideoMetadata {
  return {
    id: "video",
  };
}
```

---

## Omit Type

- pick과 반대로 원하는 것을 뺀다.

```typescript
type Video = {
  id: string;
  title: string;
  url: "";
  data: string;
};
type VideoMetadata = Omit<Video, "id" | "url">;
function getVideoMetadata(id: string): VideoMetadata {
  return {
    title: string;
    data: string;
  };
}
```

---

## Record Type

- 각 타입을 서로 묶는다(엮는다)

```typescript
type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: contact },
};
```
