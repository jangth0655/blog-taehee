---
title: (팀) PINTALK - React-datepicker 활용
category: dev-story
createdAt: 2023/01/12
updatedAt:
---

## ✔️ Date Picker 라이브러리 적용 이유

input type의 date를 활용하여 두 개의 캘린더를 커스텀하여 구현하는 것은 **많은 시간이 소요**될 것 같아 관련된 라이브러리를 찾아보는 중 **Date Picker 라이브러리를 선택**하게 되었다.

처음 사용하는 라이브러리지만 여러 레퍼런스가 있어 쉽게 적용할 수 있었고, 날짜 입력을 할 수 있는 input과 캘린더를 함께 활용할 수 있다는 점이 특히 좋았다.

#

### 장점

- 가장 범용적으로 사용돼서 래퍼런스가 많다.
- 다양한 option(props)을 제공하고 공식 문서가 잘되어 있어 custom할 수 있다.
- 스타일 커스텀이 가능하다.
- 컴포넌트 방식으로 재사용을 할 수 있다.

### 단점

- 패키지 사이즈가 다른 라이브러리보다 상대적으로 크다.

#

## 적용 코드

datepicker 캘린더의 해더를 커스텀하고 react-hook-form을 함께 적용하였다.

react-hook-form에서는 **외부라이브러리와 호환을 위해 Controller 래퍼를 제공**해준다.

```javascript
<Controller
	<ReactDatePicker
	  locale={ko}
	  dateFormat="yyyy년 MM월 dd일"
	  onChange={(date) => setStartDate(date)}
	  selected={startDate}
	  startDate={startDate}
	  placeholderText={label}
		//custom header
	  renderCustomHeader={({
	    date,
	    changeYear,
	    changeMonth,
	    decreaseMonth,
	    increaseMonth,
	    prevMonthButtonDisabled,
	    nextMonthButtonDisabled,
	  }) => (
	   <div className="custom-react-datepicker__select-wrapper flex items-center justify-center space-x-2">
	     <button
	       onClick={(e) => handleClick(e, decreaseMonth)}
	       disabled={prevMonthButtonDisabled}
	      >
	        {'<'}
	     </button>
	     <div className="custom-react-datepicker__select-item relative space-x-16 ">
	       <select
	         className="w-14 mr-2 absolute"
	         ref={selectRef}
	         value={getYear(date)}
	         onFocus={() => {
	           selectRef.current.size = 10;
	         }}
	         onBlur={() => {
	          selectRef.current.size = 1;
	         }}
	         onChange={({ target: { value } }) => {
	          selectRef.current.blur();
	          changeYear(Number(value));
	         }}
	         >
						{/* year의 계산은 따로 진행하여 값을 가져온다. */}
	          {years.map((option) => (
	            <option key={option} value={option}>
	              {option}
	            </option>
	           ))}
	         </select>
				/>
			/>
```
