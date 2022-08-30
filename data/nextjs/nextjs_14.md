---
title: Incremental Static Regeneration(ISR)
category: nextjs
---

# ISR (Incremental Static Regeneration)

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

- 설정한 시간에 따라서만 적용되는 것이 아니라 **특정경로를 revalidate**할 수 있다.
- on-demand revalidation을 위해 **revalidate 지정할 필요**가 없다.  
  즉, **수동으로 재검증(revalidate)**할 수 있다.
- revalidate을 생략하면 기본값으로 false가 되며, revalidate을 호출할떄만 페이지를 재검증한다.
- 정확한 경로를 호출해야한다.

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
    // delete revalidate: 10, revalidate:false(디폴트 값)
  };
}

// API route
await res.revalidate("/post/1"); // 실제 경로
```

---

## StaticPaths - fallback

- `paths`키는 미리 렌더링될 `paths`를 결정한다. 즉 **paths를 정확하게 설정**.
- `params`는 반드시 해당 페이지이름에서 사용하고 있는 파라미터와 매치되어야한다.

```javascript
return {
  paths: [
    { params: { id: "1" } },
    {
      params: { id: "2" },
      // with i18n configured the locale for the path can be returned as well
      locale: "en",
    },
  ],
  fallback: false,
};
```

- **fallback:false** : paths가 반환되지 않는 모든 경로는 404page된다.
- **fallback:true**  
  → 빌드타임에 생성되지 않는다. (경로 설정하지 않는다.)  
  → request가 있을 때 HTML을 생성한다.  
  → 만약 아직 페이지를 생성하지 않았다면, 유저는 로딩 혹은 다른 컴포넌트를 보게될 것이고  
   얼마 후 next.js 백그라운드에서 생산된 html을 보여준다.  
  → 이후 같은 request한 유저는 생성된 html페이지를 빠르게 볼 수 있다.
- **fallback:blocking**  
  → SSR과 동일하게 첫번째 request에서 HTML이 만들어질 때까지 기다렸다가 HTML을 반환다.
  → 로딩 또는 어떤 컴포넌트를 볼 수 없다.
  → 페이지를 업데이트하지 않는다. 업데이트 하기위해서는 ISR을 함꼐 사용해야한다.

```javascript
// fallback : blocking
return {
  paths: [],
  fallback: "blocking",
};

// fallback : true
if (router.isFallback) {
  return <div>Loading...</div>;
}

return {
  paths: [],
  fallback: "blocking",
};
```
