import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Person from "@material-ui/icons/Person";
import Lock from "@material-ui/icons/Lock";
import {Link }from "react-router-dom";
import {useHistory} from "react-router-dom";
import axios from "axios";
function Login(){

    const details={
        email:"",
        password:"",
    }
    
    let [editing, setediting]= useState(details);
    let[error,seterror]=useState("");
    const history = useHistory();
   
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
          var response=  await axios.post('https://inv-man1.herokuapp.com/user/login',{
            email:editing.email,
            password:editing.password,
            })
          console.log(response.data);
          if(response.data){
            localStorage.setItem("token",response.data);
            history.push("/main");
          }
        }catch(err){
          if(err.response){
          console.log(err.response.data.msg);
            seterror(err.response.data.msg);
          }
        }
    }

    const handleChange=(e)=>{

        let newedit={...editing}
        newedit[e.target.name]=e.target.value;
        setediting(newedit);
    
    }

    
  return(

        <>
         <div className="login">
        <h1 className="loginhead">Login</h1>
    
       <form onSubmit={handleSubmit}>
       <div className="col-auto">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text"><Person/></div>
        </div>
           <input name="email" type="text" className="form-control" 
           placeholder="Enter your Email Id"
            value={editing.email} 
            onChange={handleChange}/>
            </div>
            </div>
            <div className="col-auto">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text"><Lock/></div>
        </div>
        <input id="inlineFormInputGroup" name="password" type="password"
    placeholder={`Enter your Password`} className="form-control" 
    value={editing.password} onChange={handleChange}
    /> </div>
    </div>
      <Link  to="/signup">New User? Click here</Link>

    <div className="form-group row">
    <div className="errmsg"> {error}   </div>
     <div className="col-sm-10">
    <button id="loginsign"className="btn btn-primary" type="submit">Login</button>
    </div>
    </div> 
          
       </form>

       </div>
        </>
    )
}

export default Login;