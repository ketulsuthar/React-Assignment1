import React from 'react';

const userinput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };
    return(
        <div>
            <input 
            style={inputStyle}
            onChange={props.change} 
            type="text" 
            value={props.currname}/>
        </div>
    );
}

export default userinput;