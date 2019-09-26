
import React from 'react';

const userOutput = (props) => {    

    return (
        <div style={props.style}>
            <p>Paragraph for {props.username} </p>
        </div>
    )

}


export default userOutput;