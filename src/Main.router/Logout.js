import React,{useEffect} from "react";
import {useHistory} from "react-router-dom";

function Logout(){
    const history = useHistory();
    useEffect(()=>{
       history.push("/");
    },[]);
    return(
        <>
        </>
    )
}

export default Logout;