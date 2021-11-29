import React,{useEffect} from "react";
import {useHistory} from "react-router-dom";

function Logout(){
    const history = useHistory();
    useEffect(()=>{
       localStorage.removeItem("token");
       history.push("/");
    },[]);
    return(
        <>
        </>
    )
}

export default Logout;
