import React from "react"

const Item = (props) => {
    return (
        <div className="col s3 item" style={{float: "left", width: "22%", marginRight: "1rem",  marginLeft: "1rem", marginTop: ".5rem"}}>
            <div>
                <div className="card" style={{fontSize: "1.5rem"}}>
                    <div className="card-image">
                        <img src={props.img} style={{height: "20rem"}} />
                    </div>
                    <div style={{padding: ".3rem"}} className="card-content">
                        <p style={{height: "10rem"}}> {props.title}</p>
                    </div>
                    <div className="card-action left-align" style={{padding: ".2rem"}}>
                        <p style={{margin:".1rem"}}>{props.price}</p>
                        <a alt={props.title} href={props.link}>Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Item