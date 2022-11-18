---
title: NextJS와 LocalStorage
category: error-handling
name: ''
---

# NextJS에서 LocalStorage

## ❌ Error

- Error: ReferenceError: localStorage is not defined

---

## ✅ 원인

- NextJS는 서버사이드에서 랜더링이 되기 떄문에 window 오브젝트가 정의되지 않아 LocalStorage가 정의 되지 않았다고 한다.

---

## 🚀 해결책

- typeof window !== "undefined"으로 체크하여 서버사이드에서 렌더링이 된 후에
- 로컬스토리지를 확인하였습니다.

```typescript
const useUser = () => {
  const [user, setUser] = useState<UserInfo>(getUserInfo());
  const router = useRouter();

  function getUserInfo() {
    return typeof window !== 'undefined' ? storage.getStorage() : '';
  }

  useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user]);
  return {
    email: user?.user?.email,
    userId: user?.user?.id,
  };
};
export default useUser;
```
