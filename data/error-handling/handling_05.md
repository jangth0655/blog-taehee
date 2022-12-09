---
title: Prettier & EsLint
category: error-handling
createdAt: 2022/10/28
updatedAt:
---

# Prettier & EsLint

## ❌ Error

- Error:

  - 팀원들과 코드 규칙 및 스타일을 정하는 과정에서 prettier, eslint 에러 발생
  - husky로 자동화 할 경우 에러 발생

  ```text
  hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
  hint: You can disable this warning with git config advice.ignoredHook false.
  ```

---

## ✅ 원인

- husky : window 환경에서 init을 할 경우 리눅스 환경에서 파일권한에 대한 에러 발생
- eslint : Air-bnb Eslint의 엄격한 규칙 때문에 발생

---

## 🚀 해결책

- **husky** : `chmod ug+x .husky/*` 설정  
  → 출처 : https://github.com/typicode/husky/issues/1177
- **Air-bnb Eslint에서 어느정도 규칙을 풀어준다.**  
  ✓ 화살표 함수를 함수 선언 문에서 바꾸는 설정 off  
  → `'react/function-component-definition' : 0`  
  ✓ 함수 내에서 return을 생략하는 설정 off  
  → `'Consistent-return' : 0`  
  ✓ 사용하지 않는 변수 에러로 인식할 경우 설정 off  
  → `'no-unused-vars' : 0`  
  ✓ object 안에서 comma를 무조건 써줘야하는 설정 off  
  → `'comma-dangle' : 0`
