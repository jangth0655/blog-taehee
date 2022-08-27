---
title: getStaticProps & getStaticPaths
category: nextjs
---

## getStaticProps

- `getStaticProps`에서 반환된 `props`를 사용하여 **빌드타임에 페이지를 미리 렌더링**한다.
- 항상 **서버에서 실행**되며, 절대 **클라이언트 측에서 실행되지 않는다.**
- 빌드타임시 정적 HTML을 생성하므로 request에 엑세스할 수 없습니다.
- Next.js는 `getStaticProps`의 실행결과를 포함하는 JSON파일을 생성한다.

```javascript
// return {props:{}} 히야한다.
export async function getStaticProps() {
  return {
    props: {},
  };
}
```

---

## getStaticPaths

- `getStaticProps`를 사용하여 **dynamic routes해아한다면**,  
  정적으로 생성된 **`paths`의 리스트를 정의**해야만 한다.
- 반드시 `getStaticPaths`는 `getStaticProps`와 함께 사용되어야만 한다.
- Next.js은 정적으로 `getStaticPaths`에 의해 지정된 `paths`를 사전레딘더링 할 것이다.  
  즉, **몇 개의 페이지가 만들어**지는 미리 정의해야한다.

```javascript
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

// return {props:{}} 히야한다.
export async function getStaticProps() {
  return {
    props: {},
  };
}
```
