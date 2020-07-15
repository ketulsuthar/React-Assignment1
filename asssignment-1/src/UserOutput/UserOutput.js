import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{props.username}</p>
            <p></p>
        </div>
    );
}

export default useroutput;