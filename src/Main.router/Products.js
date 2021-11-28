import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState, useEffect } from "react";
import axios from "axios";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
const token= localStorage.getItem("token");

function Brands(){
  const details={
    name:"",
    price:"",
    quantity:"",
    description:"",
    status:"",
    brands:"",
    size:"",
    colors:"",
    category:"",
    store:"",
    id:"",
   }
   const array= ["brand","size","colors","category","store"];  

   
    let [editing,setediting]= useState(details);

    const [brand,setbrand]=useState([]);
    const [show,setshow]=useState(false);
    const [brand1,setbrand1]=useState([]);
    const [size1,setsize1]=useState([]);
    const [colors1,setcolors1]=useState([]);
    const [category1,setcategory1]=useState([]);
    const [store1,setstore1]=useState([]);

            
    useEffect(async()=>{
      const fetchdata=async()=>{
        var response=await axios.get("https://inv-man1.herokuapp.com/product/getproduct",{
      headers:{

        token:token
      }
   

     })
     setbrand(response.data);
     console.log(brand);
     

      array.map(async(arr)=>{
        var response= await axios.get(`https://inv-man1.herokuapp.com/${arr}/get${arr}`,{
          headers:{
            token:token
          }
        });
        const name=response.data.map((data)=>{
          return data.name
        })
        

        if(arr==="brand")setbrand1(name);
        if(arr==="size")setsize1(name);
        if(arr==="category")setcategory1(name);
        if(arr==="colors")setcolors1(name);
        if(arr==="store")setstore1(name);

      })
      }
      fetchdata();
    },[]);
  

    const showpostdiv=(name,status,_id,price,quantity,description,brands,size,colors,category,store)=>{
    
      setshow("true");
      editing.name=name;
      editing.status=status;
      editing.id=_id;
      editing.price=price;
      editing.quantity=quantity;
      editing.description=description;
      editing.brands=brands;
      editing.size=size;
      editing.colors=colors;
      editing.category=category;
      editing.store=store;
    }

    const editbrand=(async(event,id)=>{
      event.preventDefault();
       await axios.patch(`https://inv-man1.herokuapp.com/product/updateproduct/${id}`,
        {
          name:editing.name,
          price:editing.price,
          quantity:editing.quantity,
          description:editing.description,
          brands:editing.brands,
          colors:editing.colors,
          size:editing.size,
          category:editing.category,
          store:editing.store,
          status:editing.status,
        },{
          headers:{
            token:token
          }
    
         })
        var response=await axios.get("https://inv-man1.herokuapp.com/product/getproduct",{
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
      await axios.delete(`https://inv-man1.herokuapp.com/product/deleteproduct/${id}`,{
        headers:{
          token:token
        }
  
       })
      var response=await axios.get("https://inv-man1.herokuapp.com/product/getproduct",{
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
    await axios.post(`https://inv-man1.herokuapp.com/product/postproduct`,
    {
      name:editing.name,
      price:editing.price,
      quantity:editing.quantity,
      description:editing.description,
      brands:editing.brands,
      colors:editing.colors,
      size:editing.size,
      category:editing.category,
      store:editing.store,
      status:editing.status,
    },{
  headers: {
        token:token
      }
    });
    var response=await axios.get("https://inv-man1.herokuapp.com/product/getproduct",{
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
            Products</span></h2>  
            <button onClick={()=>showdiv()} className="addbrand">Add Product</button>
      
         <div className={show?"showdiv":"hidediv"}> <br/>
         <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Product Name</label>
      <input name="name" value={editing.name} onChange={handleChange} type="text" className="form-control" id="inputEmail4" placeholder="Name"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Price</label>
      <input name="price" value={editing.price} onChange={handleChange} type="number" className="form-control" id="inputPassword4" placeholder="price"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Quantity</label>
    <input name="quantity" value={editing.quantity} onChange={handleChange} type="number" className="form-control" id="inputAddress" placeholder="quantity"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Description</label>
    <input name="description" value={editing.description} onChange={handleChange} type="text" className="form-control" id="inputAddress2" placeholder="About product"/>
  </div>

   
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Brand</label>
      <select name="brands" value={editing.brands} onChange={handleChange} id="inputState" className="form-control">
       <option>choose..</option>
      {brand1.map((x)=>{
       return <option key={x}>{x}</option>
      })}
       

      </select>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Size</label>
      <select name="size" value={editing.size} onChange={handleChange} id="inputState" className="form-control">
        <option>Choose...</option>
        {size1.map((x)=>{

return <option key={x}>{x}</option>
      })}      </select>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Color</label>
      <select name="colors" value={editing.colors} onChange={handleChange} id="inputState" className="form-control">
        <option>Choose...</option>
        {colors1.map((x)=>{
return <option key={x}>{x}</option>
      })}      </select>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Category</label>
      <select name="category" value={editing.category} onChange={handleChange} id="inputState" className="form-control">
        <option>Choose...</option>
        {category1.map((x)=>{

return <option key={x}>{x}</option>
      })}      </select>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Store</label>
      <select name="store" value={editing.store} onChange={handleChange} id="inputState" className="form-control">
        <option>Choose...</option>
        {store1.map((x)=>{
return <option key={x}>{x}</option>
      })}      </select>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Status</label>
      <select name="status" value={editing.status} onChange={handleChange} id="inputState" className="form-control">
        <option>Choose...</option>
        <option>Active</option>
        <option>Inactive</option>
          </select>
    </div>
    <div className="col-auto my-1">
    <button onClick={handleSubmit} className="btn btn-primary">Confirm</button>
  <button className="btn btn-danger">Close</button>    </div>

</form>
      
   
         </div>
    
        <table id="brand" className="table  table-hover table-dark">
           <thead>
            <tr >
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Description</th>
                <th scope="col">Brand</th>
                <th scope="col">Size</th>
                <th scope="col">Color</th> 
                <th scope="col">Category</th>
                <th scope="col">Store</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
      <tbody>
    
        {brand.map(({name,status,_id,price,quantity,description,brands,size,colors,category,store})=>{
            return(
                 <tr key={_id}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>{brands}</td>
                <td>{size}</td>
                <td>{colors}</td>
                <td>{category}</td>
                <td>{store}</td>
                <td>{status}</td>
                <td>
                   {<Edit onClick={()=>showpostdiv(name,status,_id,price,quantity,description,brands,size,colors,category,store)}/> }
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


export default Brands;