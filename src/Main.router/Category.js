import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState, useEffect } from "react";
import axios from "axios";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
const token= localStorage.getItem("token");

function Category(){
  const details={
    name:"",
    status:"",
    id:""
   }

let [editing, setediting]= useState(details);

    const [brand,setbrand]=useState([]);
    const [show,setshow]=useState(false);
            
    useEffect(()=>{  
      async function fetchdata(){   
     var response=await axios.get("https://inv-man1.herokuapp.com/category/getcategory",{
      headers:{
        token:token
      }
      })
     setbrand(response.data);
     console.log(brand);
      }
      fetchdata();
    },[]);

    const showpostdiv=(name,value,id)=>{
    
      setshow("true");
      editing.name=name;
      editing.status=value;
      editing.id=id;
    }

    const editbrand=(async(event,id)=>{
      event.preventDefault();
       await axios.patch(`https://inv-man1.herokuapp.com/category/updatecategory/${id}`,
        {
        name:editing.name,
        status:editing.status,
        },{
          headers:{
            token:token
          }
        })
        var response=await axios.get("https://inv-man1.herokuapp.com/category/getcategory",{
          headers:{
            token:token
          }
        })
        setbrand(response.data);
        window.location.reload();
      });
     const showdiv=()=>{
        setshow("true");
      }
    const deletebrand=async(id)=>{
      await axios.delete(`https://inv-man1.herokuapp.com/category/deletecategory/${id}`,{
        headers:{
          token:token
        }
      })
      var response=await axios.get("https://inv-man1.herokuapp.com/category/getcategory",{
        headers:{
          token:token
        }
      })
      setbrand(response.data);
    }

    // style={{display:show?"grid":"none"}}> 

    const handleChange=(e)=>{
      let newedit={...editing}
      newedit[e.target.name]=e.target.value;
      setediting(newedit);
  
     }
   const Addbrand=async(e)=>{
     e.preventDefault();
    await axios.post(`https://inv-man1.herokuapp.com/category/postcategory`,
    {
    name:editing.name,
    status:editing.status,
    },{
      headers:{
        token:token
      }
    })
    var response=await axios.get("https://inv-man1.herokuapp.com/category/getcategory",{
      headers:{
        token:token
      }
    })
    setbrand(response.data);
    window.location.reload()
 }

   const handleSubmit=(event)=>{
     if(editing.id){
       editbrand(event,editing.id)
     }else{
       Addbrand(event)
     }

   }

    return(
        <>
        <div  className="brand1">
        <h2>Manange<span className="dash_title">
            Category</span></h2>  
            <button onClick={()=>showdiv()} className="addbrand">Add Category</button>
        {console.log(show)}
         <div className={show?"showdiv":"hidediv"}> <br/>
         <form >
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Category</label>
    <input type="text" name="name" className="form-control" 
    id="brandname" placeholder="Example input"
    value={editing.name} 
            onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Status</label>
    <input type="text" className="form-control"
     id="brandstaus" name="status" placeholder="Another input"
     value={editing.status} onChange={handleChange}/>
  </div>
  <button onClick={handleSubmit} className="btn btn-primary">Confirm</button>
  <button className="btn btn-danger">Close</button>
</form>
         </div>
    
        <table id="brand" className="table  table-hover table-dark">
           <thead>
            <tr>
                <th scope="col">Category Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
      <tbody>
    
        {brand.map(({name,status,_id})=>{
            return(
                 <tr key={_id}>
                <td>{name}</td>
                <td>{status}</td>
                <td>
                   {<Edit onClick={()=>showpostdiv(name,status,_id)}/> }
                   <Delete onClick={()=>deletebrand(_id)}/>
                </td>
                </tr>
            )
        })}
        </tbody>
          </table>
        </div>
        </>
    )
}


export default Category;