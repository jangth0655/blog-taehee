---
title: Link & useRouter
category: nextjs
---

## Link

- Next.js router는 single-page-application과 유사하게 페이지 전환을 해준다.
- **경로 전환을 하기 위해 Link**를 제공한다.
- 객체로 사용하여 보낼 수 있다.  
  `href={{pathname:'/blog/[slug]', query:{slug:post.slug}}}`
- 예제)  
  → `/ → pages/index.js`  
  → `/about → pages/about.js`  
  → `/blog/hello-world → pages/blog/[slug].js`

```javascript
function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  );
}
export default Home;
```

## next/router

- 앱의 함수 컴포넌트내에서 router객체 내부에 접근하려면 useRouter()훅을 사용할 수 있다.
- 훅이기때문에 클래스와 함께 사용 ❌
- withRouter를 사용하거나 클래스를 함수 컴포넌트로 래핑할 수 있다.

```javascript
const router = useRouter();

const handleClick = ({ id }) => {
  router.push(`/blog/${id}`);
};
```
