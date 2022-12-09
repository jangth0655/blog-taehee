---
title: vercel 500 internal Server Error
category: error-handling
createdAt: 2022-12-8
updatedAt:
---

# Vercel에서 500 internal Server Error

## ❌ Error

- Error: vercel 500 internal Server Error

---

## ✅ 원인

- 500 서버에러를 접했을 경우 어느 부분에서 발생하였는지 감을 잡지 못하였다.
  한참을 확인하고 디버깅을 하다가 원인을 찾았았다. 원인은 getServerSideProps 함수에서 일어난 것인데
  서버사이드 내부에서 node 모듈 `fs`의 readdirSync를 사용하였는데 인자로 경로가 올바르지 못한 것이었다.
  아래와 같은 작성한 코드에서 `./data` 경로는 vercel에서 찾을 수 없는 경로이기 때문에 발생한 것이라고 생각했다.

  ```typescript
  export const getServerSideProps = () => {
    const file = readdirSync(`./data/javascript`);
    props: {
      file;
    }
  };
  ```

---

## 🚀 해결책

- `./`경로는 현재 모듈의 파일 경로를 나타내고 `process.cwd()`는 node 전역 객체의 cwd 메서드인 현재 작업 디렉토리의 경로를 반환한다. 따라서 `process.cwd()`의 경로 값을 사용하여 해결하였다.

```typescript
export const getServerSideProps = () => {
  const file = readdirSync(`${process.cwd()}/data/javascript`);
  props: {
    file;
  }
};
```
