import React from 'react'
const validationComponent = (props) => {
    const isEnough = props.outputLenght >=5;
   
    if(isEnough){
        return <p>Text long enough</p>
    }

    return <p>Text too short</p>
} 

export default validationComponent;