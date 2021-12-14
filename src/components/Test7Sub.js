import React, { useEffect, useState } from 'react';

const Test7Sub = () => {

    const [date , setDate] = useState(new Date() )

    useEffect( () => {
        const timer = setInterval( () => {
            setDate(new Date() )
            console.log(date);
        },1000)
        return() => {
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <h1> 날짜 : {date.toLocaleDateString() } </h1>
            <h1> 시간 : {date.toLocaleTimeString() } </h1>
        </div>
    );
};

export default Test7Sub;