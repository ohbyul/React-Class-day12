import React, { useEffect, useState } from 'react';5

const Test5 = () => {

    const [count , setCount] =useState(1)
    const [ step , setStep ]  =useState(1)

    useEffect( () => {
        console.log("useEffect");
       const timer = setInterval( () => {
            console.log("setInterval");
            // setCount(이전값 => 이전값 + 1);
            setCount(count => count + step )
        }, 1000)

        return() => {
            console.log("clearInterval");
            clearInterval ( timer )
        }
    },[ step ])

    const changeInput = (e) => {
        const { value } = e.target
        setStep ( Number(value) )
    }

    return (
        <div>
            <input type='text' value = {step} onChange = {changeInput} />
            <h1>숫자 : {count} </h1>
        </div>
    );
};

export default Test5;