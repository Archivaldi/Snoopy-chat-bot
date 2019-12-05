import React from "react"
import { Link } from "react-router-dom"
import './App.css';

const Header = () =>
    (

        <nav class="header">
            <div className="nav-wrapper" id="header" style={{marginBottom:"30px",fontStyle:"Italic",border:"none !important"}}>
                <Link to={"/"} className="brand-logo" style={{fontStyle:"italic"}}>Snoopy Chat </Link>
            </div>
        </nav>
    )


export default Header