import React, { useEffect, useState } from 'react';

const Test4 = () => {

    const [count , setCount] =useState(0)

    useEffect( () => {
        console.log("useEffect");
       const timer = setInterval( () => {
            console.log("setInterval");
            // setCount(이전값 => 이전값 + 1);
            setCount(state => state +1 )
        }, 1000)

        return() => {
            clearInterval ( timer )
        }
    },[])

    return (
        <div>
            <h1>숫자 : {count} </h1>
        </div>
    );
};

export default Test4;