---
title: Node Module - Path
category: nodejs
name: ""
---

# path

- 폴더와 파일의 경로를 지정해주는 모듈
- 파일 경로에 접근, 경로에 대하여 무언가를 처리할 때
- 경로의 표현 방법은 운영체제 마다 달라질 수 있다.

```javascript
const path = required("path");

// resolve,join 모두 인자로 받은 경로들을 문자열 형태로 리턴 한다.
// 차이점 resolve는 '/'를 절대경로로 처리, join은 상대경로로 처리
path.join("path"); // 여러 인자를 넣어주면 하나의 경로로 합쳐준다.
path.resolve("path"); // 여러 인자를 넣어주면 하나의 경로로 합쳐준다.

// '/tmp/file' 맨 앞이 '/'로 시작되므로 합쳐지지 않고, '/tmp/file/'만 반환된다.
path.resolve("/foo/bar", "/tmp/file/");

console.log(__dirname); // 현재 수행되고 있는 디렉토리 이름
console.log(__filename); // 현재 수행되고 있는 파일 이름

path.sep; // 경로 구분자
path.delimiter; // 환경변수 구분자

// basename
path.basename(__filename); // 파일 정보만
path.basename(__filename, ".js"); // 파일 이름만

// dirname
path.dirname(__filename); // 디렉토리 이름만

// extension
path.extname(__filename); // 확장자만

// parse, 전체경로를 하나하나 분리할 수 있다. 오브젝트 형태로 정보를 준다.
const parsed = path.parse(__filename);
parsed.root;
parsed.name;

// 기존 경로 문자열 형태로 변환.
const str = path.format(parsed);

// 절대경로인지
path.isAbsolute(__dirname); // /User, true
path.isAbsolute("../"); // false

//normalize, 잘못된 경로에 알아서 수정해준다.
path.normalize("./folder//////sub"); // folder/sub

// join, 경로를 만들어준다
__dirname + path.sep + "image";
path.join(__dirname, "image");
```
