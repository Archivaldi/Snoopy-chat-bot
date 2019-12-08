import React from "react"

const Item = (props) => {
    return (
        <div className="col s3 item" style={{float: "left", width: "22%", marginRight: 10,  marginLeft: 10, marginTop: 5}}>
            <div>
                <div className="card">
                    <div className="card-image">
                        <img src={props.img} style={{height: 200}} />
                    </div>
                    <div style={{padding: 3}} className="card-content">
                        <p style={{height: 100}}> {props.title}</p>
                    </div>
                    <div className="card-action left-align" style={{padding: 2}}>
                        <p style={{margin:1}}>{props.price}</p>
                        <a alt={props.title} href={props.link}>Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Item