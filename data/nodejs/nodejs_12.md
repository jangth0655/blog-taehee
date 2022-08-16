---
title: REST APIs
category: nodejs
name: ""
---

# REST APIs

- **Representational State Transfer**  
  → Http method를 이용하여 나타내는,대표하는 상태를 전송하는 것을 말한다.  
  → 서버 소프트웨어 아키텍처를 디자인할 수 있는 스타일을 말한다.
- **RESTful API**  
  → REST성격이 가득한 API 를 만든다
- RESTful API 만들기위한 조건  
  → Client-server architecture
  → Statelessness
  → Cacheability
  → Layered System
  → Code on demand // (option)
  → ✨ Uniform interface  
   ✓ Resource Identification in requests  
   ✓ Resource manipulation through representations  
   ✓ Self-descriptive message  
   ✓ Hypermedia as the engine of application state (HATEOAS)

---

## REST API Design

- url를 통해 어떤 액션을 할것인지는 HTTP method로 나타내고,
- url 무엇을 할것인지, 명사로 나타낸다.

- get /posts/getPost ❌ → get /posts
- post /posts/createPost ❌ → post /posts
- get /posts/1
- delete /posts/1
- get /posts/1/tags ❌ → get /tags/?postId=1
