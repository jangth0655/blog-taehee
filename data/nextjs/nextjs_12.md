---
title: getServerSideProps
category: nextjs
---

# getServerSideProps

- `getServerSideProps`에 반환된 데이터를 사용하여 **해당 페이지를 사전 렌더링**을 한다.(서버)
- 업데이트 할경우 캐시는 적용되지 않으며 다시 새롭게 서버에서 렌더링된다.
- 데이터베이스에서 데이터를 패치를 포함하여 **직접 서버 측 코드를 작성**할 수 있다.
- 파라미터로 context 오브젝트를 받는다.

```javascript
export default function Page({ products }) {
  return (
    <div>
      {products.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { products }, // will be passed to the page component as props
  };
}
```
