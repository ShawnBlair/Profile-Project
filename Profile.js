import React from "react"

export default function Profile(props){
    //const [v, setV] = React.useState()
    return(
        <div className="rect">
        <img src="./images/user.png" className="uimg"/>
        <img src={`./images/${props.isFavorite}`} className="sfimg" onClick={props.handleClick}/>
        <div className="fnl2">
        <h2 className="fnl">Name: {props.firstName}</h2><h2 className="fnl3">{props.lastName}</h2>
        </div><p className="cont">Contact: {props.contact}</p>
        <p className="email">E-mail: {props.email}</p>
        </div>
    )
}