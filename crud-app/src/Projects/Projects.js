import React from 'react';

const Project = (props) => {

    return (
        <div>
          <h1 onClick={props.click}>I am a person an i am {Math.floor(Math.random() * 30)} years old {props.name} , and {props.age}</h1>          
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Project;