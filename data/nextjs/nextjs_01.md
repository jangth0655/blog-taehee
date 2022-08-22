---
title: About nextjs
category: nextjs
---

# 라이브러리 vs 프레임워크

- **라이브러리** : 개발자가 **직접 전체적인 흐름에 주도권을 갖고** 라이브러리를 가져다 쓰는 것
- **프레임워크** : **전체적인 흐름은 이미 구조(틀)에 짜여져** 있고, 그 안에서 필요한 작업을 하면된다.  
  ✓ 틀안에 이미 제어 흐름에 대한 주도성이 내제되어있다.

---

## Next JS

- Next.js는 빠른 웹 애플리케이션을 만들기 위한 Building Block을 주는 **React 프레임워크**이다.
- React에서 필요한 툴과 구성, 설정 그리고 전체적인 틀, 기능 및 최적화를 제공한다.

## Static Pre Rendering

- React는 Client Side Rendering
  ✓ 서버사이드에서 모든 파일(app을 위한 소스코드)받은 뒤에 Rendering을한다.
- **Next.js는 Static Generation**  
  ✓ **HTML은 빌드 시 생성**되며, 각 요청에서 재사용된다.  
  ✓ 서버사이드에서 데이터,필요한 소스코드를 받아오는 동안 **HTML을 미리 렌더링**한다.
