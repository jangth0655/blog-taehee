# TaeHee's Blog

- 학습한 내용을 나만의 블로그에 기록해두고자 구현하였습니다.
  현재도 지속적으로 업데이트하며 성장해가고 있습니다.

<br />

- [블로그 링크](https://taehee-homepage.vercel.app/)

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```zsh
$ npm install
```

2. 프로젝트를 실행합니다.

```zsh
$ npm start
```

---

<br />

## Navigation

- 🛠 [Built with](#built-with)
- 📖 [Page](#page)
- 🔥 [Feature](#feature)

<br />

---

## 🛠 Built with

- `NextJS`
- `Typescript`
- `TailwindCSS`
- `Framer-motion`
- `vercel`

---

<br />

## 📖 Page

- Home

  - 개발 블로그 소개와 현재 등록된 post의 정보(제목, 등록된 post 개수, 설명)를 확인할 수 있습니다.
    <br />

- javascript

  - 기본적인 자바스크립트에 대하여 동작원리와 문법, 심화 내용을 정리하고 있는 페이지 입니다.
    <br />

- typescript

  - 기본적인 타입스크립트 대하여 학습한 내용을 정리하고 있는 페이지 입니다.
  - 원시타입, 제네렉타입, 타입추론, 클래스, 인터페이스 등등
    <br />

- react

  - 기본적인 리엑트에 대하여 학습한 내용을 정리하고 있는 페이지 입니다.
    <br />

- error handling
  - 기술에 상관없이 개발 도중 발생환 에러와 해결에 대한 내용을 정리하고 있는 페이지 입니다.
    <br />

<img height="400" src="./public/assets/preview/blog.gif" />
<br /><br />

---

## 🔥 Feature

- 이미 생성이 완료된 페이지를 반환해주고, HTML 문서를 재활용하기 위해 getStaticProps와 getStaticPaths를 활용하였습니다.

- Markdown 파일에서 Front-matter를 파싱하기 위해 gray-matter 라이브러리를 사용하였습니다.

- matter.read API로 파일 시스템을 동기적으로 읽고, 반환된 Markdown의 content를 HTML태그로 변환하기 위해 remark-html, parser 등 remark 관련 라이브러리를 사용하였습니다.
