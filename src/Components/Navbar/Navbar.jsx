import "./Navbar.css"
import {memo} from "react";


function Navbar(props){
console.log("Navbar Redring......?");


return(
<div className="navbar">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
              <a href="">{props.name.name}</a>


</div>
)
}

export default memo(Navbar);