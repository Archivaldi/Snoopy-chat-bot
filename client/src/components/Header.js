import React from "react"
import { Link } from "react-router-dom"

const Header = () =>
    (
        <nav >
            <div className="nav-wrapper" style={{backgroundColor:"bluegreen", marginBottom:"30px"}}>
                <Link to={"/"} className="brand-logo">Snoopy.Clothing</Link>
            </div>
        </nav>
    )


export default Header