import React from "react"
import { Link } from "react-router-dom"

const Header = () =>
    (
        <nav style={{backgroundColor: "transparent"}}>
            <div className="nav-wrapper" id="header" style={{marginBottom:"30px",fontStyle:"Italic",border:"none !important"}}>
                <Link to={"/"} className="brand-logo" style={{fontStyle:"italic"}}>Snoopy.Clothing 👕</Link>
            </div>
        </nav>
    )


export default Header