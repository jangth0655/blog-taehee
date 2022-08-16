---
title: Http Server / JSON
category: nodejs
name: ""
---

# 서버 골격 만들기

```javascript
const http = required("http");
const http2 = required("http2"); // https 나중에 배포할때

const server = http.createServer((req, res) => {
  if (url === "/") {
    res.write("welcome");
  } else if (url === "/course") {
    req.write("Course");
  } else {
    res.write("Not found");
  }
});
server.listen(4000); // port
```

---

## JSON

- 어떤 언어에서든 데이터 구조와 실제 데이터를 다른 언어 및 플랫폼에서 해석 가능한 형식으로 주고 받을 수 있어야한다.  
  → 가능하게하는 것이 바로 **JavaScript Object Notation(JSON) 데이터 교환 포멧**이다.
- 클라이언트에서 데이터를 서버에서 가지고 오기위해서 Json 형태의 데이터를 가져와야한다.

```json
"person" : [
  {
    name:"taehee",
    age:"29",
    location:"suwon"
  }
]
```
