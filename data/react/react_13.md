---
title: React Query (TanStack Query)
category: react
createdAt: 2022/11/5
updatedAt: 2022/11/8
---

## 커스텀 훅의 문제점

- hooks은 **값의 재사용이 아니라 로직을 재사용하기 위함이다**.
- 글로벌적으로 사용하거나 캐시하기 위한 것이 아니다.
- 캐시가 되지 않는다. (사용할때마다 네트워크 통신이 발생한다.)
- 네트워크가 끊겨도 retry 등 재시도 기능이 없다.

---

## React Query (TanStack Query)

- hooks의 문제점을 해결해 줄 수 있다.
- **고유한 키 값에 따라 데이터를 메모리에 보관한다 (캐시)**.
- **키에 따라 데이터를 불러오고 리패칭한다.**
- query keys  
  → 키에 의존하여 캐시를 관리한다.  
  → **캐시를 잘 사용하려면 키를 잘 명시하고 분리해야한다.**  
  → 배열의 첫번재는 고유한 키, 두번째, 세번째는 등은 얼마나 세부적으로 키를 조절하는지에 따라 전달한다.
- **예)**
- 예를 들어 서로 다른 컴포넌트에서 동일한 키를 사용하여 query를 한다면,  
  → 패칭이 한 번 일어난다.  
  → 키가 동일하기 때문에 컴포넌트들은 동일한 캐시데이터를 전달 받는다.  
  → 즉, 동일한 키라고 하더라도 배열에 더 세부적으로 키를 전달하면 다른 캐시데이터를 전달 받는다.

- react query의 두번째 인자 → 함수전달  
  → 네트워크에서 받아온 데이터를 전달하는 함수
  → 값을 바로 return 하던지, promise형태로 값을 리턴해야한다.

---

## React Query의 옵션

- **stale(오래된)이 기본적으로 설정됨**  
  → `Query instances via useQuery or useInfiniteQuery by default consider cached data as stale.`
- **stale 상태라면**  
   → The window is refocused  
   → The network is reconnected
- staleTime 옵션을 설정해주면된다.
- query를 사용하지 않는다면 가비지컬렉터가 작동한다.
- stale 상태라면 다시 데이터를 받아와서 캐시데이터를 업데이트한다.
- stale 상태  
  → 동일한 네트워크통신을 요청했을 경우 캐시된 데이터를 사용한다.
  → 캐시는 되어있지만 stale 상태이기 때문에 백그라운드에서 다시 데이터를 받아온다.
  → 그 다음 캐시를 업데이트한다.

---

```javascript
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json()
      ),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
```
