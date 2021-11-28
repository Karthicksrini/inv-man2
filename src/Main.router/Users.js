import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState, useEffect } from "react";
import axios from "axios";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
const token= localStorage.getItem("token");

function Users(){
  const [brand,setbrand]=useState([]);
          
  useEffect(()=>{  
    const fetchdata=async()=>{   
   var response=await axios.get("https://inv-man1.herokuapp.com/user/getuser",{
    headers:{
      token:token
    }
 
   })
   setbrand(response.data);
   console.log(brand);
    }
    fetchdata();

  },[]);
  return(
    <>
      <div  className="brand1">
        <h2>Manange<span className="dash_title">
            Users</span></h2>  
            <table id="profile" className="table table-striped">
                <tbody>
                <tr>

                    <th>Email Address</th>
                </tr>
               {brand.map((user)=>{
                 return(
                 <tr key={user._id}>

                   <td>{user.email}</td>
                   </tr>
                 )
               })


               }
                </tbody>
            </table>
      </div>  
    </>
  )
}
  
export default Users;