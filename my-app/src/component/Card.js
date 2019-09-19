import React from "react";
import "./Card.css";
const Card = props=>(

    <div className="card col-sm-3"> 

    <div className="image-block">

     <img className="image" src={props.image} onClick={()=>props.handleClick(props.id)} />               
    </div>



    </div>
)  

export default Card;