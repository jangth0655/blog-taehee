---
title: 팀프로젝트 Pintalk - gradle 빌드 에러 해결
category: error-handling
createdAt: 2023-01/06
updatedAt:
---

## ❌ Error

팀프로젝트 진행 중 리엑트에서 오라클 데이터베이스로 부터 데이터를 받아오지 못하는 에러를 만나게 되었다.

- Error: please check that /library/internet plug-ins/javaappletplugin.plugin/contents/home contains a valid jdk installation.

---

## ✅ 원인

[✔️ 참고 스택오버플로우](https://stackoverflow.com/questions/64968851/could-not-find-tools-jar-please-check-that-library-internet-plug-ins-javaapple)

구글링 하여 에러 메시지를 확인해본 결과 m1칩은 oracle의 jdk랑 호환이 잘 안되는 경우가 많다고 한다.  
이를 해결하기 위해 m1칩도 사용할 수 있는 [openjdki](https://www.azul.com/downloads/?version=java-8-lts&os=macos&architecture=arm-64-bit&package=jdk)로부터 jdk을 설치였다.

이후 gradle 빌드를 다시 시도하였는데, 아직 에러가 해결되지 않았다. 터미널에서 에러 메시지를 확인해본 결과 `tools.jar을 찾을 수없다`와 `eslint 에러` 때문이였다.

---

## 🚀 해결책

이를 해결하기 위해 우선 jdk가 설치된 경로에서 `tools.jar`을 /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/lib로 옮기고, `eslint`로 발생하는 에러를 `"off"`하였다.

이후 다시 gradle 빌드 한 결과 빌드가 성공적으로 완료되었다.
