import React, { useEffect, useState } from 'react';

const Test3Sub = () => {
    const [x , setX] = useState(0);
    const [y , setY] = useState(0);
    
    const move = (e) => {
        setX(e.clientX)
        setY(e.clientY)
        
    }

    useEffect( () => {
        console.log("mount");
        window.addEventListener('mousemove',move)

        // 뒷정리
        return() => {
            console.log('뒷정리 clean - up');
            window.removeEventListener('mousemove',move)
        }
    },[])

    return (
        <div>
            <h1>마우스 좌표</h1>
            <div style={{border: '1px solid black' , width : 300 , padding : 25 , margin : 10}}>
                <h1> x : {x} , y : {y}</h1>
            </div>
        </div>
    );
};

export default Test3Sub;