---
title: 서버와 client의 매칭 문제 (NextJS)
category: error-handling
createdAt: 2022/11/18
updatedAt:
---

# NextJS에서 서버사이드 렌더링과 클라이언트

## ❌ Error

- Error: ReferenceError: localStorage is not defined

---

## ✅ 원인

- NextJS는 서버사이드에서 랜더링이 되기 떄문에 window 오브젝트가 정의되지 않아 LocalStorage가 정의 되지 않았다고 한다.

---

## 🚀 해결책

- typeof window !== "undefined"으로 체크하여 서버사이드에서 렌더링이 된 후에 로커스토리지확인

```typescript
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {mounted && <Component {...pageProps} />}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
```
