import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test2 = () => {
    const ref1 = useRef();

    //화면에 그려진후
    useEffect( () => {
        console.log("실행 useEffect");
        ref1.current.focus()
    },[])   //뒤에 배열 처리가 들어가면 페이지 화면에 그려지고 난 후 한번만 실행된다.

    //화면에 그려지기 전에 실행
    useLayoutEffect( () => {
        console.log("useLayoutEffect");
        ref1.current.focus()
    },[])


    return (
        <div>
            <input type = "text" ref = {ref1}/>
        </div>
    );
};

export default Test2;