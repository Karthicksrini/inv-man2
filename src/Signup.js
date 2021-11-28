import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom";
import "./Css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import Lock1 from "@material-ui/icons/LockOpenSharp";
import axios from "axios";

function Signup(){

    const details={
        name:"",
        email:"",
        password:"",
        conpass:""
    }
    
    let [editing, setediting]= useState(details);
    let [error,seterror]=useState("");
    const history = useHistory();

    const handleSubmit=async (e)=>{
      e.preventDefault();
      try{
        if(editing.password!==editing.conpass){
          seterror("Confirm the password again");
         }else{
       await axios.post('https://inv-man1.herokuapp.com/user/signup',{
         name:editing.name,
          email:editing.email,
          password:editing.password,
        })
         history.push("/");
      
      }
    }
    catch(err){
        console.log(err)
  
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
        <div className="signup">
        <h1 className="signuphead">SignUp</h1>
        <form  onSubmit={handleSubmit}>
       <div className="col-auto">
     <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text"><Person/></div>
        </div>
            <input placeholder="Enter your name" className="form-control" 
            onChange={handleChange}type="text" name="name" value={editing.name}>
         </input><br/>
            </div>
            </div>
            <div className="col-auto">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text"><Email/></div>
        </div>
            <input placeholder="Enter your Email Id"  className="form-control"
            onChange={handleChange} type="email" name="email" value={editing.email}></input><br/>
            </div>
            </div>
            <div className="col-auto">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text"><Lock/></div>
        </div>
            <input  placeholder="Create your password" className="form-control" 
            onChange={handleChange} type="text" name="password" value={editing.password} /><br/>
            </div>
            </div>
            <div className="col-auto">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text"><Lock1/></div>
        </div>
            <input placeholder="Confirm your password" className="form-control"
             onChange={handleChange}type="text" name="conpass" value={editing.conpass}></input><br/>
            </div>
            </div>
            <Link  to="/">Already Signed in, Click here</Link>
           
           <div className="errmsg">{error}</div>
            <div className="form-group row">
            <div className="col-sm-10">
            <button id="submitsign" className="btn btn-primary" type="submit">Submit</button>
            </div>
            </div>
        </form>
        </div>
        </>
    )
}
export default Signup;