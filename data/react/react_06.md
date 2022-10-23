---
title: React route
category: react
name: ""
---

# Route

- SPA(Single Page Application)  
  → 하나의 URL로 한번 페이지가 로딩후에 새로운 페이지가 열리는 것이 아니고, 부분적인 내용만 업데이트 되는 것
- **Routing** : 네트워크상에 특정 URL로 어떤 경로를 통해 데이터를 받아올지 경로를 설정해준다.
- 즉, HTTP request(사용자가 URL링크를 요청)했을 때 **특정 페이지로 연결할 경로를 결정**해주는 메카니즘

```javascript
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function APP() {
  <Router>
    <Routes>
      /* path 경로 element 해당 스크린 */
      <Route path="/" element={<MyScreen />} />
    </Routes>
  </Router>;
}
```
