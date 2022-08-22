---
title: NextJS 구조
category: nextjs
---

## Page

- page는 **pages 디렉토리**에서 리액트 파일에서 export한 리액트 컴포넌트이다.
- 각 페이지는 **파일 이름을 기반**으로 경로가 연결된다.
- 반드시 pages폴더에서 **export default** 해야만 한다.
- 다이나믹 라우트도 지원한다.  
  ✓ `pages/posts/[id].js → posts/1, posts/2`

```javascript
// export default하여 pages/about.js만들면
// "/about"
function About() {
  return <div>About</div>;
}
export default About;
```

---

## Routing

- pages의 개념으로 구축된 라우터를 기반으로 한 파일시스템을 갖고 있다.
- **Index routes** : 자동적으로 루트디렉토리로 지정된다.  
  → `pages/index.js → /`  
  → `pages/blog/index.js → /blog`
- **Nested routes**  
  → `pages/blog/first-post.js → /blog/fist-post`  
  → `pages/dashboard/username.js → /dashboard/username`
- **Dynamic route segment** : 대괄호를 사용하여 매개변수를 통해 동적 라우트를 할 수 있다.  
  → `pages/blog/[slug].js → /blog/:slug` : (`blog/hello-world`)  
  → `pages/[username]/setting.js → /:username/settings` : (`/foo/settings`)  
  → `pages/post/[...all].js → /blog/*` : (`blog/2020/id/title`)
