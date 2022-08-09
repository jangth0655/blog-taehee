---
title: This
category: js
name: ""
---

# <This>

- 문맥에 따라 this가 가리키는 것이 달라진다.
- 앞으로 만들어질 인스턴스, 현재의 객체 자기자신을 가리키는 용도
- 나 자신의 인스턴스를 가리키는 것 즉, 특정한 객체와 this를 묶어두는, 연결하는 것을 This 바인딩
- c, c#, java → 한번 this가 인스터를 가리키는 것이 결정이 되면 계속 그 인스턴스를 가리킨다.
- 하지만, **java(type)script는 런타임 상에서 동적으로 this 바인딩이된다**.  
  → 호출하는 사람(caller)에 의해 동적으로 결정된다.

---

## 글로벌 컨텍스트의 this

- 브라우저 : window 객체
- 노드 : 모듈
- 함수 : globalThis / 엄격모드(use strict)에서는 undefined

--<br />

```javascript
const x = 0;
module.exports.x = x;
console.log(this); // output :{x:0} // module을 가리킨다.

cosole.log(globalThis); // node에서 사용할 수 있는 전역객체를 가리킨다.
globalThis.setTimeout();
//setTimeout() // globalThis 생략할 수 있다.

//함수
function fun() {
  console.log(this);
}
fun(); // output : globalThis객체

//but
// 'user strict' 모드에서는 스코프내에서 this가 기리키는 것이 없으므로
// undefined
```

---

## 정적 바인딩

- javascript는 동적으로 this바인딩 되기때문에
- bind함수를 이용해서 수동적으로 바인딩해준다.
- **Arrow 함수** 사용 :  
  → 렉시컬 환경에서의 this를 기억한다.  
  → Arrow 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.

--<br />

```javascript
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`${this.name}`);
  };
}

// 수동적으로 bindig 해주기
this.printName = this.printName.bind(this);

// 간편하게 binding 해주기 Arrow function
this.printName = function = () => {
    console.log(`${this.name}`);
  };
```

---

## Arrow function

- 자바스크립트의 함수는 이것저것 다 할 수있다.
- 생성자 함수로 사용 가능하다 (클래스)
- 하지만, 여기에는 무거운 프로토타입(많은 데이터를 담고 있는 객체)이 생성됨.

--<br />

```javascript
const dog = {
  // ❌
  name: "Dog",
  play: function () {
    console.log("멍멍");
  },
};
const obj = new dog.play(); // 무거운 객체를 담고있어서 좋지않다.

// --------------------------------

//ES6 ✅
const dog = {
  name: "Dog",
  play() {
    console.log("멍멍");
  },
};
const obj = new dog.play(); // 불가능
// --------------------------------
const dog = {
  name: "Dog",
  play: () => console.log("멍멍");
};
const obj = new dog.play(); // 불가능
```
