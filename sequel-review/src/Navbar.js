import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
       <div id="navbar">
        <NavLink style={{marginRight: "10px"}} to="/">
        Home
        </NavLink>
        <NavLink style={{marginRight: "10px"}} to="/Reviews">
            Reviews
        </NavLink>
        <NavLink style={{marginRight: "10px"}} to="/newReview">
        New Review
        </NavLink>   

       </div> 
    )
}
export default Navbar