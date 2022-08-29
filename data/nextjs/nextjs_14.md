---
title: Incremental Static Regeneration(ISR)
category: nextjs
---

# ISR

- 사이트를 **빌드한 후 정적페이지를 생성거나 업데이트**할 수 있다.
- ISR을 사용하면 전체 사이트를 **다시 빌드할 필요없이** 페이지별로 static-generation을 사용할 수 있다.
- 수백만 페이지로 확장하면서 Static의 이점을 유지할 수 있습니다.
- **ISR을 사용하려면 getStaticProps에 revalidate를 추가**한다.
- revalidate를 10으로 설정했다면  
  ✓ 초기 요청과 10초 전까지는 캐쉬된 데이터가 즉각적으로 보여진다.  
  ✓ 10초 후에 여전히 캐쉬된 데이터가보이고, 백그라운드에서 next.js가 regeneration 한다.  
  ✓ 성공적으로 생성되면, 캐시를 무효화하고 업데이트된 페이지가 보여지고, 실패햐면 캐쉬 데이터가 보여진다.

```javascript
export default function Page({ posts }) {
  return posts[0].title;
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        {
          title: "Hello World!",
        },
      ],
    },
    revalidate: 10, // In seconds
  };
}
```

---

## On-demand Revalidation

- next.js는 특정페이지에 대해 **캐쉬를 수동적으로 제거**하기 위하여 On-demand ISR를 지원합니다.  
  → revalidate설정이 따로 필요 없다.
- revalidate가 생략하고, 기본값 false로 할 것이고, API route에서 revalidate가 호출될 때  
  on-demand페이지만 revalidate한다.

```javascript
export default function Page({ posts }) {
  return posts[0].title;
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        {
          title: "Hello World!",
        },
      ],
    },
    // delete revalidate: 10,
  };
}

// API route
await res.revalidate("/post/1"); // 실제 경로
```
