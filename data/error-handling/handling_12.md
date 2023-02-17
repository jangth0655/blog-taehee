---
title: 팀프로젝트 Pintalk - useRef type 적용 에러 해결
category: error-handling
createdAt: 2023-02/16
updatedAt:
---

## ❌ Error

useRef을 Props로 전달하여 useRef의 타입을 React.RefObject로 지정하려는 상황에서 에러가 발생하였다.

```typescript

interface Props {
  selectorRef: React.React.RefObject<HTMLSelectElement | null>;
}

const BirthSelector = ({ selectorRef, dateRange, title, register }: Props) => {
  const { ref, ...rest } = { ...register };

  return (
    <div className="flex items-center">
      <select
        defaultValue=""
        ref={(e) => {
          ref(e);
          // 변경불가
          selectorRef.current = e; // ❌
        }}
  //....
```

- Error: Cannot assign to 'current' because it is a read-only property

read-only 즉 current를 읽을 수 만 있고 변경할 수 없는 에러이다

---

## 🚀 해결책

useRef의 타입에는 **아래와 같이 2가지로 생각**할 수 있다

- 값 저장 용도

  > ref 객체는 **React.MutableRefObject<제네릭> 타입**이 되며, ref객체.current 의 **값 수정이 가능**하다.

- DOM 취득용도
  > ref 객체는 **React.RefObject<제네릭> 타입이** 되며, ref.current(참조하는 DOM) **값 자체는 수정이 불가**하다  
  > 단, ref.current.속성 (DOM 객체.속성)은 수정이 가능하다.

```typescript
interface Props {
  selectorRef: React.MutableRefObject<HTMLSelectElement | null>;
}

const BirthSelector = ({ selectorRef, dateRange, title, register }: Props) => {
  const { ref, ...rest } = { ...register };

  return (
    <div className="flex items-center">
      <select
        defaultValue=""
        ref={(e) => {
          ref(e);
          selectorRef.current = e; // ✅ 수정 가능
        }}
    //....
```
