---
title: (팀) PINTALK - Select box와 react-hook-form
category: dev-story
createdAt: 2023/01/12
updatedAt:
---

# Select box 와 react-hook-form을 연결하는 과정에서 문제 직면과 해결과정

## 상황 및 직면한 문제

select box의 option 길이 조절과 스크롤을 적용하기 위해서는 useRef를 선언하고 current에 접근하여 `current.size`를 `onChange, onFocus, onBlur`로 활용해 조절해야 했다.

하지만 react-hook-form과 같이 사용하는 경우 **react-hook-form의 api인 register 함수 내부**에서 **이미 ref를 사용**하고 있기때문에 **useRef와 겹쳐서 동작되지 않는 문제**가 발생하였다.

#

## 해결과정

해결 방법은 간단했다. **react-hook-form의 ref를 공유**하여 사용하는 것이다.  
[react-hook-form 공식문서](https://www.react-hook-form.com/faqs/#Howtosharerefusage)

register 함수는 `{ref, onChange, onBlur, name}`의 속성을 갖고 있다. 즉 register함수의 `ref`을 사용하면 되는 것이다.

#

나의 경우 react hook form의 register를 props로 전달하여 활용하는 중이였다.  
아래 코드에서 onFocus는 register의 속성으로 존재하지 않기때문에  
register에서 제공해주는 `onChange onBlur`따로 리액트 태그의 `onFocus`따로 작성하였다.

#

```javascript
import cls from '../../../../utils/cls';

const BirthSelector = ({
  selectorRef,
  dateRange,
  title,
  yearSize,
  register,
}) => {
  const { ref, ...rest } = { ...register };

  return (
    <select
      defaultValue=''
      ref={(e) => {
        ref(e);
        selectorRef.current = e;
      }}
      {...rest}
      className={cls(
        'py-1 absolute z-10 shadow-sm bg-clip-padding',
        yearSize ? 'w-[24%]' : 'w-[20%]'
      )}
      onFocus={() => {
        selectorRef.current.size = 10;
      }}
    >
      <option disabled value=''>
        {title}
      </option>
      {dateRange.map((item) => (
        <option
          className='hover:bg-gray-50 cursor-pointer'
          value={item}
          key={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
};
export default BirthSelector;
```

#

```javascript
return (
    <div className="mb-6 md:mb-0 relative">
      <label className="text-sm">생년월일</label>
      <div className="relative w-full flex space-x-32 sm:space-x-44 md:space-x-28 lg:space-x-24 2xl:space-x-28">
        <div className="mr-10 sm:mr-4 md:mr-6 lg:mr-4 xl:mr-4 2xl:mr-6">
          <BirthSelector
            register={register('year', {
              onChange: (e) => {
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
            })}
            selectorRef={yearRef}
            dateRange={yearRange}
            title="년도"
            yearSize
          />
        </div>
        <div>
)
// ...
```
