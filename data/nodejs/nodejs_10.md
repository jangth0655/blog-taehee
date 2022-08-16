---
title: Http
category: nodejs
name: ""
---

# Http/Https

- **Hypertext Transfer Protocol** : 여러 미디어를 전송하는 프로토콜(규약)
- **request & response로 이루어진 프로토콜** 이며 **Stateless 프로토콜**이다  
  → 각 개별적인 요청은 서로 연관이없고, 요청이 끝나면 상태가 사라진다.
- 클라이언트와 서버 통신 할때 TCP커넥션이 생성되고,  
  ✓ 클라이언트 → 서버 request // request가 온다면, 클라이언트 ← 서버 해당하는 response
- HTTP는 클라이언트와 서버간 데이터를 주고 받을 때 암호화 처리가 되어있지 않다.
- HTTS SSL/TLS와 같은 암호화된 안전한 방식으로 클라이언트와 서버간 보안관계가 설정된다.
- HTTS는 바이너리형태로 데이터 주고받으며, 헤더부분도 압축하고

---

## Status Code

- 서버에서 response를 할떄 statusCode를 함께 보낸다.
- Http 표준에서 정의되어서 공통적으로 약속된 언어
- **1xx** : 정보 // **2xx** : 성공 // **3xx** : 리다렉션 // **4xx** : 클라이언트 에러 // **5xx** : 서버 에러

---

## Request Method & URL

- URL (Uniform Resource Locator) : 서버에 요청을 할때 특정 리소스에 대한 고유한 경로
- Request Method를 이용하여 server애 어떤 리소스와 어떤 액션을 요청한다.
- **요청에 따라 status code도 달라진다.**
- GET : 데이터 요청
- POST : create
- PUT : update
- DELETE : 삭제
- PATH : 부분적으로 업데이트
- HEAD : 데이터는 받지않고 헤드만 받고 싶다면
- OPTIONS : 해당 URL에서 사용가능한 request옵션에 대해 알고 싶을 때
- TRACE: 서버에 반응을 받을 때
- **서버에 요청을 읽기만하고 데이터를 변경하지 않는 request method** : GET,HEAD,OPTIONS,TRACE
- **서버에 있는 데이터를 변경하는 request method** : POST,PUT,DELETE,PATH
- ✨✨✨ **Idempotent**  
  → 동일한 요청을 했을 때 요청 횟수와 상관없이 항상 서버를 동일한 상태와 효과를 유지할 수 있는지
- PUT : idempotent Yes 데이터 전체를 업데이트하기때문에
- PATCH : idempotent No 데이터를 일부만 업데이트하기 때문에

---

## HEAD

- **Http는 stateless이기 때문에** 세션과 쿠키(브라우저만)를 이용한다.
- 클라이언트가 서버에 로그인 요청을 한다면  
  → 로그인에 필요한 정보를 헤더에 담아서 쿠키(정보전달 매개체)를 통해 전달
- 표준적인 헤더 내용과 커스텀 내용이 있다.
- 커스텀 내용은 : domain-key .. 처럼 이용한다.
- 표준화가된 헤더를 사용하는 것이 좋다.
