---
title: Virtual DOM · Reconciliation
category: react
createdAt: 2022-8-18
updatedAt: 2022/12/20
---

## Virtual DOM

DOM을 조작했을 경우 **렌더트리를 재생성하고 그럼 모든 요소들의 스타일이 다시 계산**된다. 즉 레이아웃을 만들고 페인팅하고 이러한 과정들이 반복된다. SPA에서는 DOM조작이 많이 발생하는데 그럼 브라우저 렌더링 과정이 많아지고 그만큼 연산을 많이 해야한다는 것이다. 따라서 전체적인 프로세스를 비효율적으로 만들어 버린다.
이에따라 등장한 개념이 **가상DOM**이다.

#

### VDOM의 특징

- 노드 트리를 복제한 자바스크립트 객체이다.
- class, style 등 속성은 갖고 있지만, DOM API 매서드 갖고 있지 않기 때문에 가볍다.
- DOM 노드에 변화가 생기면 새로운 가상의 DOM 트리를 만들게된다.
- 버퍼링, 캐싱의 역할을 한다고 볼 수 있다.

### VDOM은변화가 생길때마다 새로운 VDOM트리를 생성하는 것은 비효율적일까?

DOM 노드를 조작하는 **비효율성은** DOM트리를 업데이트하는 과정에서 발생하는 것이 아니라 **랜더링 하는 과정에서 발생**하는 것이다. 하지만 VDOM은 **렌더링하지 않고 메모리상에서 트리를 변경**하는 일이기 때문에 빠르게 작업 진행할 수 있다.

#

### VDOM의 동작

DOM 노드에 변화가 생기면 새로우 가상의 DOM을 생성한다고 했는데 가상 DOM의 내부 구현체를 살펴보면,

```javascript
diff(previous:VTree, current:VTree) → PatchObject
```

diff함수에서 인자로 이전 상태의 DOM트리와 현재 상태의 DOM트리를 각각 받아온다.  
이 함수를 통해 **변경 전의 DOM트리**와 **변경 후의 DOM트리**의 변화된 부분을 확인하게 된다. 이렇게 변경된 부분을 **확인한 이후에는 실제 DOM에 적용**하게된다.

#

```javascript
patch(rootNode:DOMNode, patches:PatchObject) → DOMNode newRootNode
```

VDOM의 구현체에서 patch함수를 보면 rootNode와 diff함수를 통해 변경된 부분만 담겨있는 patches를 인자로 받는다. 이 **patch함수는 변경된 실제 DOM노드에 적용**하여 렌더링 과정을 수행하도록 한다.

이러한 일련의 과정들을 볼 때 **브라우저 렌더링 과정을 계속해서 반복하는 것이 아니라** 변화들을 모두 VDOM에 반영한 후에 **변경된 부분만 실제 DOM에 적용**하여 한번만 렌더링해 성능을 최적화 할 수 있다.

---

## Reconciliation (재조정)

**공식문서**에서 **Virtual DOM**은 UI의 이상적인 또는 **가상적인 표현을 메모리에 저장**하고 **ReactDOM**과 같은 라이브러리에 의해 **실제 DOM과 동기화**하는 프로그래밍 개념이다. 즉 **Virtual DOM과 실제 DOM을 비교하고 일치시키는 과정을 Reconciliation이라고 한다.**

메모리상에 보관되어 있는 실제 DOM의 복사본 객체(VDOM) 2개의 가상돔을 가지고 있다.

- 변경 이전 화면 구조를 나타내는 가상돔
- 변경 이후에 보이게 될 화면 구조를 나타내는 가상돔

리액트는 State가 변경될 때마다 리렌더링이 발생하는데 이 시점에 이전 가상돔과 이후 가상돔을 **비교**하여 최종적인 변화가 있을 때 **모든 변화를 묶어서 딱 한번** 실제 DOM을 업데이트한다. (Diffing 알고리즘)  
이러한 과정을 **Reconciliation**이라고 한다.

https://miro.medium.com/max/1400/1*JCrDk-N-wpPnE9j0GObItg.webp

#

### Diffing 알고리즘

변경전 리액트 엘리멘트 타입과 변경후 리액트 엘리멘트 타입 비교하는데 두가지 다른 행동을한다.

- **엘리멘트 type이 같은 경우**  
  에는 변경전 엘리멘트 속성과 변경후 엘리멘트 속성을 비교하여 동일한 내역은 유지하고 변경된 속성들만 갱신한다.
- **엘리멘트 type이 다른 경우 (a태그에서 h1태그로 변경)**  
  리액트는 이전의 트리를 완전히 삭제하고 새로운 트리를 생성한다.

```javascript
const element = {
  type: 'h1',
  props: {
    title: 'foo',
    children: 'Hello',
  },
};
```

#

### Key prop을 사용하는 이유

```javascript
// before
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// after
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

위 예시에서 third li 태그가 마지막에 하나만 추가되었기 때문에 문제없이 새로 node를 그리게된다.

#

하지만 아래의 예시를 보면 새로운 li태그가 첫번째 위치에 추가가되었다.  
리액트는 해당 상태를 보고 모든 요소가 제자리에 위치하지 않다고 생각하고 자식노드를 전부 새로 그리게된다.

```javascript
//before
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

// after
<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

이러한 이슈를 해결하기 위해 식별자 `key prop`을 제공한다. 자식노드들이 `key prop`을 갖고 있으면 키 값으로 이전 트리와 변경 이후 트리를 비교하게된다. 그러면 첫번째에 새로운 노드가 추가되어도 문제없이 추가된 노드만 그릴 수 있게된다.

```javascript
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

#

### 만약에 배열의 Index를 사용한다면??

배열의 인덱스는 배열이 바뀔때마다 0~N까지 새롭게 할당된다. 즉 변하는 값이다.  
리액트는 **키값으로 아이템의 변경여부를 검토**한다. 하지만 변경전 인덱스와 변경 이후 인덱스 값이 동일하게 된다면, 변경전 키값을 추가된 트리에 키값을 그대로 유지하기 때문에 잘못된 값, 예상치 못한 에러가 나타날 수 있다. 따라서 **고유한 키값을 전달**해야한다.

### ✔ 또 다른 포인트

사실 가상DOM 없이 DOM의 변화가 있을 경우 수동적으로 한번에 DOM을 업데이트 할 수 있다. 하지만 **가상DOM은 이러한 과정을 자동화하고 추상화한다는 점이 포인트**이다. 즉 여러 번잡한 작업, 앞서 말한바와 같이 수동적으로 각 컴포넌트가 어떻게 조작되고 조작된 정보를 공유하여 업데이트 하는 등 이러한 각 변화들의 동기화 작업을 거치지 않으면서 모든 작업을 하나로 묶어 업데이트 시켜준다.

```

```
