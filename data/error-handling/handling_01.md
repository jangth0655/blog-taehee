---
title: Cors
category: error-handling
name: ""
---

# CORS

## ❌ Error

- 로그인 인증을 구현하기 위해 서버와 클라이언트 간 쿠키를 주고 받는 과정 중 cors 에러가 발생하였다.

---

## ✅ 원인

- 브라우저에서 보완 문제로 기본적으로 **서로 다른 origin(출처)간 데이터 엑세스를 허용하지 않는 것**

---

## 🚀 해결책

- 서버(express)에서 cors 미들웨어 설치 및 옵션설정  
  · credential : true  
   → 응답헤더에 Access-Control-Allow-Credential:true가 추가된다.  
  · origin:true  
   → 요청 헤더에 설정된 출처를 반영,수락

```javascript
const corsOptions = {
  credential: true,
  origin: true,
};
app.use(cors(corsOptions));
```

- 클라이언트 사이드에서 credential 설정

```javascript
// client (nextjs)
// axios라면 withCredentail, fetch라면 credential:"include"
await axios(`${process.env.NEXT_PUBLIC_SERVER!}/${url}`, {
          method: "POST",
          data,
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }).data;
```

---

## 개념 정리

- **SOP** (Same-Origin Policy) : 동일 출처 정책  
  → **동일한 출처** 즉, 같은 URL만 api 등을 통해 **데이터 엑세스를 허용**하는 정책

### **✓ CORS**

- **Cross-Origin Resource Sharing**, same-origin의 반대 개념
- 어떠한 기준을 충족한다면 다른 출처 간에 리소스를 공유할 수 있도록 하는 것
- origin : 서버의 위치를 찾아가기 위한 필요한 프로토콜 + 호스트 + 포트
- 브라우저가 보내는 headers 안에 origin과 서버의 Access-Control-Allow-Origin을 비교하여 확인한다.
- CORS에서 보내는 요청  
  · **Simple Request** : 예비 요청 없이 본 요청 만으로 확인, GET, POST 등  
   → Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width**를 제외한 헤더를 사용하면 안된다.**  
  · **Preflight Request(예비요청)**  
   → PUT, DELETE 등 데이터에 영향을 주는 요청은 예비요청을 먼저 보내고 안전 여부를 확인 후 본 요청을 다시 보낸다.  
  · **Credential Request** : 인증된 요청 사용  
   → fetch에 credentail 옵션을 추가  
   → same-origin : 디폴트 값으로 같은 출처 간 요청에만 인증 정보를 담는다.  
   → include : 모든 요청에 인증 정보를 담는다.  
   → omit : 모든 요청에 인증 정보를 담지 않는다.  
   → **same-origin, include**는 Access-Control-Allow-Origin의 값을 허용하지 않는다.  
   → **same-origin, include**는 응답해더는 반드시 Access-Control-Allow-Credentials: true 존재해야한다.
