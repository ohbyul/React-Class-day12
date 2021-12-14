import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [ isShow , setIsShow ] = useState(false)
    
    const onToggle = () => {
        setIsShow(!isShow)
    }
    return (
        <div>
            <button onClick = { onToggle}> 
                {isShow ? '숨기기' : '보이기'}
            </button>
            {
                isShow && <Test3Sub/>   
            }
            
        </div>
    );
};

export default Test3;