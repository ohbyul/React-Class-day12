# day 12
## # Hooks - useEffect
- 참고 사이트 https://ko.reactjs.org/docs/hooks-effect.html
- 설명 잘되있는 참고 블로그 https://jungpaeng.tistory.com/92
### useEffect :  
```
Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.
함수 컨포넌트에서 발생 가능한 부수효과(side effect) 는 useEffect 훅으로 관리
부수효과 : 함수의 결과값을 변환하는 것 외에 다른일을 할때 그 함수는 부수효과를 가진다.
사이드 이펙트 : 비동기 통신요청/응답 , DOM 조작 , 구독 / 취소등..
```
### useEffect : 
```
-React 요소가 실제 DOM 에 렌더링 된 이후 실행 (화면에 그려지고 나서 실행)
  > useDffect는 화면에 렌더링이 완료된 후 수행
  > 컴포넌트가 렌더링 될때마다 작업을 수행
  > 클래스에 componentDidMount와 componentDidUpdate, componentWillUnmount 기능을 수행 (라이프 사이트)
```

### 마운트란? 리액트에세 컴포넌트를 특정 영역에 끼워넣는 행위를 가르킨다.
```
예) ReactDOM.render 함수를 통해서 DOM 의 특정 영역에 리액트 컴포넌트를 끼워 넣을 수 있는 행동 과정을 마운트라고 한다.
1. 마운트 되었을때 (처음 나타났을때) - componentDidMount
2. 언마은트 되었을때 (사라질때) - componentWillUnmount
3. 업데이트 되었을떄 (특정 props, 특정 state가 변경 될때) - componentDidUpdate
```

### 형식
```
useEffect( 콜백 함수 )
useEffect( 콜백 함수 , [의존성] )
```

- 형식 1  : mount / update (거의 사용하지 않는다. )
```
useEffect( () => {
    실행문
} )
```

- 형식 2 : mount 할때만 (많이사용)
```
useEffect ( () => {
    실행문
}, [])
```
- 형식 3 : mount , update (많이 사용)
```
useEffect ( () => {
    실행문
}, [의존변수])
-> 특정 state , 특정 props(**) 변경될때 업데이트
```
- 형식 4 : mount , update
```
useEffect ( () => {
    실행문
    //정리 (Clean-up) - 뒷정리
    return() => {
        실행문
    }
}, [의존변수])
-> 특정 state , 특정 props(**) 변경될때 업데이트
```

### 정리 (Clean-up) 
```
React가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우가 있습니다. 
메모리 누수를 방지하기 위해서 UI 컴포넌트를 제거 하기 전에 수행
컴포넌트가 여러번 렌더링 된다면 다음 effect 가 수행되기 전에 이전 effect 를 정리됨
이펙트 함수를 통해 설정된 사이드 이펙트(예 : 구독 등) 는 컴포넌트가 UI 에서 제거 될때 정리되어야함
이를 수행하려면 이펙트 함수에서 클린업 함수를 반환하고 그 함수 내부에서 정리하는 명령어를 수행
사용범위
1. props로 받은 값을 처리할떄
2. 외부 API (axios , fetch)
3. setInterval , setTimeout
4. 외부 라이브러리
```



### useEffect 로 데이터 가져오기
https://dog.ceo/dog-api/
- dog API 
```
import React from "react";

export default function App() {
  const [image, setImage] = React.useState({});
  
  React.useEffect(() => {
    async function fetchImage() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      
      setImage(json);
    }
    fetchImage();
  });
  
  console.log("image", image);
  
  return (
    <div className="App">
      <img src={(image || {}).message} />
    </div>
  );
}
```
출처: https://jungpaeng.tistory.com/92 [개발자스러운 블로그]
