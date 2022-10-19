---
title: Recoil duplicated key in Nextjs
category: error-handling
name: ""
---

# Recoil duplicated key

## ❌ Error

- Duplicate atom key. This is a FATAL ERROR in
  production. But it is safe to ignore this warning if it occurred because of
  hot module replacement.

---

## ✅ 원인

- Nextjs에서 파일이 변경되면 다시 빌드하는데, 빌드 중에 여러번 atom의 state가 재선언된다.
- key는 교유값을 가져야 하는데 재선언 과정에서 중복문제가 발생된다.

- ***

## 🚀 해결책

- key : "key/${난수}"  
  → 키가 중복되지는 않지만 계속 생성되는 문제 발생
- intercept-stdout  
  → dev상태에서 recoil의 경고를 안전하게 무시할 수 있는 방법

```javascript
const intercept = require("intercept-stoudt");
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}
```

---
