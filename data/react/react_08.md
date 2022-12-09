---
title: Suspense
category: react
createdAt: 2022/10/14
updatedAt: 2022/10/23
---

# Why? Suspense & React.Lazy

- 리액트 앱은 일반적으로 수 많은 컴포넌트, 메서드, 라이브러리들로 구성된다.
- 필요할때만 로드하려고 노력하지 않으면 한번에 많은 양의 데이터를 다운 받기 때문에 성능이 저하된다.

## Suspense

- Suspense lets components “wait” for something before rendering.
- 로딩상태를 컴포넌트와 분리한다.
- **로딩상태를 나타내는 코드를 작성해야 하는 부분이 줄어들고**(코드복잡성 ⬇), 명화기 파악할 수 있다.
- 코드에서 로딩 상태를 나타는 부분을 제거해줄 수 있어, 이미 데이터를 받았다고 생각하고 코드를 작성할 수 있다.
- 단순이 데이터 로딩 뿐만 아니라 이미지, 스크립트, 비동기 작업을 기다리는 데에도 사용될 수 있다.
- swr, react-query를 사용한다면, 해당 공식문서에서 suspense를 어떻게 지원하는지 확인할 수 있다.

```javascript
<Suspense fallback={<Loading />}>
  <ProfilePage />
</Suspense>
```
