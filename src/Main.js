import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import GroupsIcon from '@material-ui/icons/Group';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import CategoryIcon from '@material-ui/icons/Category';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShopIcon from '@material-ui/icons/Storefront';
import "./Css/main.css";
import {useHistory} from "react-router-dom";


function Main(){

    const inventary=[{
        "icon":<DashboardIcon/>,
        "iconName":"Dashboard",
    },
    {
        
        "icon":<GroupIcon/>,
        "iconName":"Users",
    },{
        "icon":<GroupsIcon/>,
        "iconName":"Group",
    },{
        "icon":<BrandingWatermarkIcon/>,
        "iconName":"Brands",
    },{
        "icon":<CategoryIcon/>,
        "iconName":"Category",
    },{
        "icon":<ShopIcon/>,
        "iconName":"Stores",
    },{
        "icon":<ShoppingCartIcon/>,
        "iconName":"Products",
    },
    {
        "icon":<EditAttributesIcon/>,
        "iconName":"Attribute"
    }
    ,{
        "icon":<AccountCircleSharpIcon/>,
        "iconName":"Profile",
    },
    {
      "icon":<ExitToAppIcon/>,
       "iconName":"Logout",
         },
        
    ];
    const history=useHistory();

    const mainroute=(name)=>{
        console.log(name);
        if(name==="Dashboard")
         return history.push("/main")
        else return history.push(`/${name}`); 
     
    }
    
    return(
        <>
        <div className="container">
        <div className="menu">
        <div className="sideheader">Admin</div>
         <ul >
        
    {inventary.map((inv)=>{
        return <li key={inv.iconName} onClick={()=>mainroute(inv.iconName)} >{inv.icon}<span className="iconName">{inv.iconName}</span></li>
    })}
         </ul>
         </div>  
         <div className="header"></div>
        </div>

        </>
    )

}

export default Main;