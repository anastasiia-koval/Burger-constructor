import React from 'react'
import './Backdrop.css'

const Backdrop = (props) => {
    console.log("Backdrop is running");
    return(props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null)
    
};

export default Backdrop;