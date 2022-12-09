---
title: Custom Error Class
category: react
createdAt: 2022/10/31
updatedAt:
---

# Custom Error Class

- status code에 따른 예외처리  
  → 서버의 status code를 확인하고 이에 따른 예외처리를 해준다.

```javascript
export default class HTTPError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = 'HTTPError';
    this.statusCode = statusCode;
  }

  get errorMessage() {
    switch (this.statusCode) {
      case 404:
        this.message = '해당 레포를 찾을 수 없습니다.';
        break;
      case 422:
        this.message = '요청이 잘못된 endpoint로 전달되었습니다';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
}
```
