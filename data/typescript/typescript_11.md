---
title: About 객체지향(OOP)
category: typescript
name: ''
---

# 객체지향 (OOP, Object Oriented Programing)

- 프로그래밍 패러다임 (a programing paradigm) : 프로그램 방식 중 특정 방식을 가리킨다.
- **관련된 데이터와 함수를 함께 묶는다**. (관심사 분리)
- 프로그램을 객체로 정의해서 객체들끼리 서로 의사소통하도록 디자인하고 프로그래밍하는 것,
- 즉 **서로 관련 있는 데이터와 함수**를 여러가지 오브젝트로 정의해서 풀어나가는 것
- 오브젝트 단위로 만들어 나간다.
- 오브젝트 안에 있는 **데이터** : fields or properties, **함수** : method
- **class** : template or "청사진", 데이터가 없고 구조 뼈대. → 오브젝트 생성

---

## ✨ 객체지향원칙

- **Encapsulation**(캡슐) :  
  → **서로 연관있는 데이터, 함수들을 한 오브젝트에 담아두고** 외부에서 보일 필요가 없는 **데이터를 잘 숨겨** 캡슐화한다.
- **Abstraction**(추상적) :  
  → 내부의 모든 기능을 이해하지않고 **외부 인터페이스를 통해 사용**할 수 있도록
- **Inheritance**(상속) :  
  → 상위 클래스에서 하위클래스에서 재사용할 수 있다. (IS-A 관계 => 상위클래스 === 하위클래스)
- **Polymorphism**(다형성) :  
  → 상속 받은 함수 등에서 다양한 형태로 나타낼 수 있다.

---

## 접근제어자 (캡슐화)

- 외부에서 클래스 내부의 데이터를 직접적으로 번경하는것은 좋지 않다.  
  ✨ **캡슐화**
- 예상치못한 에러가 발생할 수 있다.
- public : 기본적인 상태, 모든곳에서 접근이 가능
- private : 클래스 내부에서만 접근 허용
- private : 상속받은 클래스 관계에서만 접근 허용, 외브에서 허용 ❌
- **클래스 내부에서 함수를 통해 인스턴스를 생성**하는 경우,
- 생성자 함수 **(constructor)를 private** 하게 만든다.

```typescript
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7;

  private constructor(private coffeeBeans: number) {}

  static makeMachine(coffeeBeans: number): CoffeeMaker {
    return new CoffeeMaker(coffeeBeans);
  }

  makerCoffee(shots: number): CoffeeCup {
    if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
}

const maker = new CoffeeMaker(32);
console.log(maker);

// get, set 함수

class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private internalAge: number
  ) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age(): number {
    return this.internalAge;
  }

  set age(num: number) {
    this.internalAge = num;
  }
}
```
