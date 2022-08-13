---
title: About NodeJS
category: nodejs
---

# Node JS

- 1995년 브라우저에 자바스크립트 엔진을 탑제하기 시작했다. (javascriptCore, Chakara, **V8**...)
- 2009년 ✨ Ryan Dahl → node 개발
- NodeJS : chrome v8을 기반으로 **브라우저 밖에서도 사용할 가능한 자바스크립트 런타임환경**이다.

---

## 노드의 특징

- Nod JS 내부 :  
  ✓ v8(c++) : javascript engine  
  ✓ Libuv(c) : Non-Blocking → 각 운영체제마다 파일,네트워크 등을 **비동기적으로 읽고 쓰도록** 해주는 라이브러리.  
  ✓ IIhttp(typescript, c) : HTTP parsing  
  ✓ Open SSL(c) : tls, crypto  
  ...등등
- **Javascript Runtime** 💡  
  → v8 : c++로 만들어졌고, 오픈소스이며 성능이 좋다
- **Single Thread** 🔧  
  → 스레드 : 프로세스(프로그램)안에 각각 담당하고 있는 일이 있는 일꾼  
  → 싱글쓰레드 : 하나의 일을 동기적으로 처리한다.  
  → Non-Blocking I/O와 Event-Driven 방식으로(런타임환경 특징때문에) 여러 일을 동시적으로 처리할 수 있다.
- **Non-Blocking I/O** 🖥  
  → 블로킹 : 동기적 / 하나의 일을 끝날때 까지 기다렸다가(블로킹) 다음으로 넘어가는 방식  
  → 논블로킹 : 비동기적 / 콜백을 던져주고 나서 기다리지 않고 바로 다음으로 넘어가는 방식  
  → Non-Blocking I/O : I/O를 할떄 처리될때 까지 기다리지 않고 바로 넘어가는 방식
- **Event-Driven** 💿  
  → 이벤트를 통해서 등록한 콜백을 호출한다.
- Node 애플리케이션은 Main Single Thread에서 동작한다.  
  → **콜백함수에서 가벼운 일들을 처리해야 한다**.  
  → 이벤트 루프를 막지말아야한다.
