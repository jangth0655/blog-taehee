---
title: Type vs Interface
category: typescript
name: ""
---

# Type vs Interface

- 타입과 인터페이스로 Object 정의하는 것은 둘다 가능 ✅
- Extends 확장도 둘다 가능 ✅
- 인터페이스만 결합이 가능 ✅
- 타입만 computed properties 가능 ✅
- **인터페이스는 Object에서만 가능하다**
- **Interface** : 의사소통의 규격사항,계약
- **Type alias** : 어떠한 것을 구현할 목적이 아니라 **데이터를 담을 때**, 데이터의 모습(타입)을 결정

```typescript
type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// 인터페이스 결합
interface PositionInterface {
  p: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// type computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string
```
