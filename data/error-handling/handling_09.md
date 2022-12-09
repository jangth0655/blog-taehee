---
title: Nextjs에서 'fs' 모듈을 읽지 못하는 에러
category: error-handling
createdAt: 2022-12-8
updatedAt:
---

# NextJS에서 'fs' 모듈을 읽지 못하는 에러

## ❌ Error

- Error: Module not found: Can't resolve 'fs'

---

## ✅ 원인

- 서버측에서 사용 가능한 node 모듈을 클라이언트에서 import할 때 발생
- nextjs는 서버에서 먼저 실행되기 때문에 브라우저에서 랜더링 할 때 `fs`의 모듈을 읽지 못한다.

---

## 🚀 해결책

- 현재 나의 상황에서는 파일을 동기적으로 읽고 react에게 알려줘야 하는 상황이였다. 하지만 `fs`와 같이 node 모듈을 사용하고 싶다면 서버단에서 사용해야 한다. 따라서 nextjs의 getServerSide, getStaticProps를 통해 사용하여 해결하였다.
