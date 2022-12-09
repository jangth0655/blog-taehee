---
title: Infinite Scroll
category: react
createdAt: 2022/10/31
updatedAt:
---

# infinite scroll hook

- scrollTop : 현재 스크롤 위치의 값
- innerHeight : 하단 스크롤바를 포함하는 픽셀 단위의 윈도의 내부높이
- scrollHeight : 오버플로워 때문에 보여지지 않는 콘텐트를 포함한 element의 높이

```javascript
import { useEffect, useState } from 'react';

const useInfiniteScroll = () => {
  const [scrollPerPage, setScrollPerPage] = useState(1);
  const handlerScroll = useCallback((e) => {
    const { scrollHeight } = e.target.documentElement;
    const { scrollTop } = e.target.documentElement;
    const { innerHeight } = window;

    if (scrollTop + innerHeight + 1 > scrollHeight) {
      setScrollPerPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return scrollPerPage;
};
export default useInfiniteScroll;
```
