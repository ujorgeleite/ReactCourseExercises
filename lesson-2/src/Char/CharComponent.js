import React from 'react';
import { blockParams } from 'handlebars';


const charStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'

}
const charComponent = (props) => {
    return <li style={ charStyle } onClick = { props.click }>{ props.char }</li>
}

export default charComponent;