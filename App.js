import React from "react"
import Data from "./Data"
import Profile from "./Profile"

export default function App(){
    
    const [v,setV] = React.useState(Data)
    function toggle(){
        
            (setV(v=>({
                ...v,isFavorite: !v.isFavorite
            })))
        
    }
    //for .map() the formula is commented below
    //const r = Data.map(data => {   
    return(
        <Profile 
        key= {v.contact}
            firstName= {v.firstName}
            lastName= {v.lastName}
        contact= {v.contact}
        email= {v.email}
        isFavorite= {v.isFavorite?"star-filled.png":"star-empty.png"} 
        handleClick={toggle}/>
    )//use return (
    //     <Profile 
    //     key= {data.contact}
    //         firstName= {data.firstName}
    //         lastName= {data.lastName}
    //     contact= {data.contact}
    //     email= {data.email}
    //     isFavorite= {data.isFavorite?"star-filled.png":"star-empty.png"} 
    //     handleClick={toggle}/>
    // )})
    // return(
    //     <div>{r}</div>
    // )
    
}
