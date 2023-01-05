---
title: (팀) PINTALK - 등록(신청)페이지의 여러개의 input 기능 개발
category: dev-story
createdAt: 2023/01/06
updatedAt:
---

# React-hook-form 라이브러리 도입

## React-hook-form 도입 이유

여러 input의 onChange를 통해서 input의 값을 도출하고 유효성검사를 하는 것은 쉽지 않은 일이였다.

#

### ✔️ 사용 전

입력되는 값을 다루기 위해서는 여러 state가 필요하고 입력되는 값을 input 태그에 연결해 입력받고 변하는 값을 추적할 이벤트함수 onChange를 선언해야한다.

그리고 각 input에 대하여 유효성 검사를 진행해야한다. 뿐만 아니라 유효성 검사에 통과되지 못한 메시지를 다시 useState에 담아 통과되지 못한 메시지를 사용자에게 알려줘야 한다.

이는 코드의 길이가 많이 길어져 **가독성, 유지보수에 좋지 않고** 더 중요한 문제는 **모든 값이 state로 연결**되어 있어 **수많은 리렌더링이 발생**하게 된다. 이러한 문제점을 해결하고자 react-hook-form 라이브러리를 사용하게 되었다.

#

### 👍 사용 후

**react-hook-form은 useForm 훅스를 제공**해준다. 그리고 useForm 훅을 선언하여 변환된 여러 함수(객체) 및 값을 사용할 수 있다.

또한 여러가지 configuration 옵션을 설정할 수 있는데, 이중 현재 나의 구현 상황에서는 mode 옵션만 활용하였다.  
· **mode는 validation 전략을 설정하는데 활용**되며 onSubmit, onChange, onBlur, all 옵션이 있다.

옵션 mode를 onChange로 설정하였고 onChange는 input의 값이 업데이트 할 때 마다 실시간으로 반영하여 유효성 검사를 해준다.

하지만 **onChange mode 설정을 했을 경우 다수의 리렌더링이 발생할 수 있어 성능에 영향**을 끼칠 수 있다는 점을 조심해야한다.

**현재 onChange mode를 사용해야 하는 상황**인데 문제는 여러 input이 있기 때문에 onChange를 할 경우 불필요한 리렌더링이 발생하여 성능이 나빠질 우려가 있었다.

#

이를 **해결하기 위해** 사용자가 input에 입력하기 전 **정규식을 활용하여 사전에 특정 문자 및 숫자를 제한** 하였고, 예외적인 핸드폰 번호, 이메일, 비밀번호 같은 경우 onChange를 통해 실시간으로 유효성 검사를 진행하여 사용자에게 즉각적으로 메시지를 전달하는 방식으로 하였다.

#

아래 코드는 input 유효성 검사 진행을 위한 코드와 이를 재사용할 수 있도록 모듈화 하였다.

```javascript
export const NUMBER = 'number';
export const NUMBER_ENGLISH = 'numberWithEnglish';
export const NOT_NUMBER = 'not_number';
export default class ValidateForm {
  notNumberValid = (e) => {
    return (e.target.value = e.target.value.replace(
      /[^a-z|A-Z|ㄱ-ㅎ|가-힣]/g,
      ''
    ));
  };

  numberValid = (e) => {
    if (e.target.value.toString().length > 6) return;
    return (e.target.value = e.target.value.replace(/\D/g, ''));
  };

  koreanValid = (e, name) => {
    this.notBlank(e, name);
    const checkKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    return (e.target.value = e.target.value.replace(checkKorean, ''));
  };

  notBlank = (e) => {
    const checkBlank = /\s/g;
    return (e.target.value = e.target.value.replace(checkBlank, ''));
  };

  notSpecialString = (e) => {
    const regex = /[`~!@#$%^&*|\\\'\";:\?]/g;
    return (e.target.value = e.target.value.replace(regex, ''));
  };

  inputValid = (event, name, type) => {
    if (type === NOT_NUMBER) {
      this.notNumberValid(event);
    }
    if (type === NUMBER) {
      this.numberValid(event, name);
    }
    if (type === NUMBER_ENGLISH) {
      this.koreanValid(event, name);
    }
  };
}
```
