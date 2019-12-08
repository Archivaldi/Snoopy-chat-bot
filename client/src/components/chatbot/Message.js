import React from "react";

const Message = (props) => {

    if (props.speaks === "bot") {
        return (
            <div className="col s12 m8 offset-m2 offset-l3" style={{ width: "90%", marginLeft: "1rem", borderRadius: "25px 25px 0px 25px"}}>
                <div className="card-panel grey lighten-5 z-depth-1" style={{ borderRadius: "25px 25px 0px 25px", padding: 1}}>
                    <div className="row valign-wrapper" style={{ borderRadius: "25px 25px 0px 25px", margin: 0 }}>
                        <div className="col s10 right-align" style={{ width: "85%", marginRight: "1rem" }}>
                            <span className="black-text" style={{fontSize: "1.5rem"}} >{props.text}</span>
                        </div>
                        <div>
                            <span>
                                <img style={{ borderRadius: 25, width: "6.5rem", marginRight: "1.5rem" }} alt="bot" src="https://camo.githubusercontent.com/0bf2120b0d515e0ec9799793c90cdf7fb14d80c8/687474703a2f2f7777772e636c6f7564706173736167652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f31322f646f6e2d6f70657261746f722e706e67" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col s12 m8 offset-m2 offset-l3" style={{ width: "75%", marginTop: "5rem", marginLeft: "6rem", borderRadius: "25px 25px 25px 25px", padding: 0 }}>
                <div className="card-panel grey lighten-5 z-depth-1" style={{ borderRadius: "25px 25px 25px 25px", padding: 0, margin: 0 }}>
                    <div className="row valign-wrapper" style={{ borderRadius: "25px 25px 25px 25px", padding: 0 }}>

                        <img style={{ borderRadius: 45, width: "5rem", marginLeft: "-4rem" }} alt="bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcm6fbI92YvC3FyWIlTyUIv_bkoxJxZ_y4-xgl1rSuYlYQpe3v&s" />

                        <div className="col s10" style={{ width: "85%", marginLeft: "2rem", height: "auto" }}>
                            <span className="black-text" style={{fontSize: "1.5rem"}}>{props.text}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;

