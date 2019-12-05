import React from "react"
import { Link } from "react-router-dom"
import './App.css';

const Header = () =>
    (

        <nav class="header">
            <div className="nav-wrapper" id="header" style={{marginBottom:"30px",border:"none !important",marginLeft:"20px"}}>
                <Link to={"/"} className="brand-logo" style={{ color:"orange"}}>Snoopy Shopper </Link>
            </div>
        </nav>
    )


export default Header