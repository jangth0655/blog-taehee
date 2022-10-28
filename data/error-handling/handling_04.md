---
title: Nextjs router Abort fetching component for route
category: error-handling
name: ""
---

# Nextjs router Abort fetching component for route

## ❌ Error

- Error: Abort fetching component for route

---

## ✅ 원인

- 한 페이지에서 useEffect 종속성으로 router를 여러번 호출하면 router가 중복되면서 오류 발생.

---

## 🚀 해결책

- router를 여러번 호출하지 않으면 된다.
- 나의 경우 useEffect에서 setTimeout()을 사용하여 순서를 정리하였다.

```javascript
useEffect(() => {
  // 먼저 확인한 후 router 사용
  setTimeout(() => {
    // 앞에서 확인한 로직 이후 실행됨.
  }, 0);
}, [router]);
```
