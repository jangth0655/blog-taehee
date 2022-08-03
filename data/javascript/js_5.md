---
title: 프로토타입(Prototype)
category: js
name: ""
---

# 프로토타입(Prototype)

- 원형, 그룹에서 가지고 있는 공통적인 특징, 개발 중인 첫번째 예제,
- 완성된 형태가 아니라 그전에 빠르게 스케치한 것, 대략적인 형태를 만들어 놓은 것
- 대략적으로 만들어놓은 애플리케이션 등등
- **비슷한 객체들의 공통된 상태, 함수 등을 하나의 프로토타입**으로 만들어 객체지향을 구현함 그 원형.
- javascript의 프로토티입 : prototype-based object-orientation
- **js에서 모든 객체들은 내부적으로 object라는 프로토타입을 가지고 있다.** → 객체간 상속을 위해
- 외부에서는 접근이 불가
- `__proto__, Object.getPrototypeOf(), Object.setPrototypeOf()` 접근 가능

## 1. 디스크립터

- = 프로토타입 object안에서도 object 상태의 정보를 갖고 있는 디스크립터가 있다.
- = **객체 안에 key들을 수정,삭제,열거 할 수 있는지의 정보를 가지고 있는 디스크립터가 있다**.
- = 오브젝트의 각각의 키,값은 프로퍼티 디스크립터라고 하는 객체로 저장됨.

-- <br />

```javascript
const dog = { name: "wow", emoji: "🐶" };
Object.keys(dog);
Object.values(dog);
Object.entries(dog); // output : [["name","wow"],["emoji","🐶"]]
"name" in dog; // key 확인
dog.hasOwnProperty("name"); // key 확인
```

## 2. 객체 불변성

- 동결 : `Object.freeze` → 추가,삭제,쓰기,속성 재정의 ❌,  
  but freeze된 객체에서 다른 객체를 참조하고 있다면 그 참조하는 객체까지는 freeze 하지않는다.
- 밀봉 : `Object.seal` → 값의 수정 ✅ , 추가 ❌, 삭제 ❌, 속성 재정의 ❌  
  → `javascript const cat = {...dog}`
