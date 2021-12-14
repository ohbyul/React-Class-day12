import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
    const [isShow , setIsShow] = useState (false)
    return (
        <div>
            <button onClick = { () => setIsShow(!isShow)} >
                {isShow ? '숨기기' : '보이기'}
            </button>
            {
                isShow && <Test7Sub />
            }
            
        </div>
    );
};

export default Test7;