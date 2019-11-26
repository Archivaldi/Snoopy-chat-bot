import React from "react"

const Item = (props) => {
    return (
        <div className="col s3" style={{float: "left", width: 300, marginRight: 20, height: 600, marginTop: 50}}>
            <div>
                <div className="card">
                    <div className="card-image">
                        <img src={props.img} />
                    </div>
                    <div className="card-content">
                        <p>{props.title}</p>
                    </div>
                    <div className="card-action">
                        <p>{props.price}</p>
                        <a alt={props.title} href={props.link}>Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Item