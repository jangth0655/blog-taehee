---
title: Error Handling
category: typescript
name: ""
---

# Error Handling

- 예상치 못한 오류가 있거나 메모리에 문제가 있거나 심각한 이슈가 발생하여 애플리케이션이 중지될 수도 있다.
- **Exception** : 예상치 못한 에러, 이슈를 말한다.  
  → 잘처리하고 핸들링 하는것이 안정성과 유지보수성을 높일 수 있기 때문에 중요하다
- **Error State** : 예상할 수 있는 에러
- ✨ **Exception와 ErrorState를 구분**해서 처리할 필요가 있다.

---

## Handling

- Error를 잘 처리하지 못한다면 **catch하지 않는것**이 더 좋다.
- **의미있는 곳**에서 처리하는 것이 좋다.
- 에러를 예상할 수 있는 곳에서는 타입으로 깔끔하게 정리하는 것이 좋다.

```typescript
type NetWorkErrorState ={
  result:"failed";
  reason:"offline" | "down" | 'timeout';
}
type SuccessState = {
  result:"success"
}
type ResultState = SuccessState | NetWorkErrorState
class NetworkClient {
  // 성공 또는 실패할 수있다고 예상할 수있다.
  tryConnect(): ResultState {
    throw new Error("no network");
  }
}

class UserService {
  constructor(private client: NetWorkClient) {}
  login() {
    this.client.tryConnect();
    //login
  }
}

class App {
  constructor(private userService:UserService) {
    run() {
      try {
        this.userService.login()
      }catch(error) {
        // show dialog to user
      }
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
service.login();
```

---

## Exception

- 예상치 못한 에러, 이슈를 말한다.
- try -> catch -> finally

```typescript
function readFile(fileName: string): string {
  if (fileName === "not exists") {
    throw new Error(`file not exist ${fileName}`);
  }
  return "file";
}

function closeFile(fileName: string) {
  //
}

// error 잡고, closeFile과 "!!!" 코드가 정상적으로 출력된다.
const fileName = "not exists";
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`catched!!`);
  return;
} finally {
  closeFile(fileName);
}

console.log("!!!");
```
