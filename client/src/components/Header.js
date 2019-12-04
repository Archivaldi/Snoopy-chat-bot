import React from "react"
import { Link } from "react-router-dom"

const Header = () =>
    (
        <nav >
            <div className="nav-wrapper" id="header" style={{marginBottom:"30px",fontStyle:"Italic"}}>
                <Link to={"/"} className="brand-logo">Snoopy.Clothing</Link>
            </div>
        </nav>
    )


export default Header