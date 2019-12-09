import React, { Component } from "react";
import axios from "axios/index";
import Cookies from "universal-cookie";
import { v4 as uuid } from "uuid";

import Message from "./Message";
import Card from "./Card";
import Item from "./Item";
import "../pages/landing.css"

const cookies = new Cookies();


class Chatbot extends Component {
    messagesEnd;
    talkInput;
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            items: [],
            snoopy: "https://thumbs.gfycat.com/FineScratchyHochstettersfrog-max-1mb.gif"
        }

        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this._handleQiuckReplyPayload = this._handleQiuckReplyPayload.bind(this);

        if (cookies.get("userID") === undefined) {
            cookies.set("userID", uuid(), { path: "/" })
        }
    };

    async df_text_query(text) {
        let says = {
            speaks: "me",
            msg: {
                text: {
                    text: text
                }
            }
        };

        this.setState({ messages: [...this.state.messages, says] });
        const res = await axios.post("/api/df_text_query", { text, userID: cookies.get("userID") });

        if (res.data.intent.displayName === "Default Fallback Intent") {

            for (let msg of res.data.fulfillmentMessages) {
                says = {
                    speaks: "bot",
                    msg: msg
                }
                this.setState({
                    messages: [...this.state.messages, says],
                    snoopy: "https://media1.giphy.com/media/63HbuBI9AibXDX5UO2/source.gif"
                });

            }

        } else if (res.data.intent.displayName) {
            let item = res.data.intent.displayName
            let ob = { item }
            says = {
                speaks: "bot",
                waitMesssage: "One moment please..."
            }
            this.setState({
                items: [],
                messages: [...this.state.messages, says],
                snoopy: "https://media0.giphy.com/media/xFoV7P0JsHwoZvHXP6/source.gif"
            });
            fetch("/getItemData", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ob)
            }).then(res => res.json())
                .then(items => {
                    this.setState({ items })
                })
                .then(() => {
                    for (let msg of res.data.fulfillmentMessages) {
                        says = {
                            speaks: "bot",
                            msg: msg
                        }
                        this.setState({
                            messages: [...this.state.messages, says],
                            snoopy: "https://i.pinimg.com/originals/44/dc/9c/44dc9c3abf24f851d23e40e7774ebeec.gif"
                        });
                    }

                })
        } else {
            for (let msg of res.data.fulfillmentMessages) {
                says = {
                    speaks: "bot",
                    msg: msg
                }
                this.setState({
                    messages: [...this.state.messages, says],
                    snoopy: "https://thumbs.gfycat.com/HarmfulApprehensiveCrocodile-size_restricted.gif"
                });
            }
        }
    }

    async df_event_query(event) {
        const res = await axios.post("/api/df_event_query", { event, userID: cookies.get("userID") });

        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: "bot",
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says] });
        }
    }

    renderCards(cards) {
        return cards.map((card, i) => <Card key={i} payload={card.structValue} />)
    }

    renderOneMessage(message, i) {
        if (message.msg && message.msg.text && message.msg.text.text) {
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
        } else if (message.waitMesssage) {
            return <Message key={i} speaks={message.speaks} text={message.waitMesssage} />
        }
    }

    renderMessages(stateMessages) {
        if (stateMessages) {
            return stateMessages.map((message, i) => {
                return this.renderOneMessage(message, i)
            })
        } else {
            return null;
        }
    }

    componentDidMount() {
        this.df_event_query("Welcome");
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behaviour: "smoth" });
        this.talkInput.focus();
    }

    _handleInputKeyPress(e) {
        if (e.key === "Enter") {
            this.df_text_query(e.target.value);
            e.target.value = "";
        }
    }

    _handleQiuckReplyPayload(event, payload, text) {
        event.preventDefault();
        event.stopPropagation();

        this.df_text_query(text);
    }

    render() {
        if (this.state.items.length === 0) {
            return (

                <div style={{position: "relative"}}>
                        <div style={{ width: "32.4rem", height: "58rem", border: "1px solid rgb(133 203 2018)", top: "28rem", position: "fixed", right: "13%", borderRadius: "25px" }}>
                            <div id="chatbot" style={{ height: "85%", width: "100%", overflow: "auto", backgroundColor: "#FFFFFF", borderRadius: "25px" }}>

                                {this.renderMessages(this.state.messages)}
                                <div ref={(el) => { this.messagesEnd = el }}
                                    style={{ float: "left", clear: "both" }}>

                                </div>
                            </div>
                            <div className="col s12" style={{ backgroundColor: "#FFFFFF" }}>
                                <input style={{ margin: "2rem", paddingLeft: "1%", paddingRight: "1%", width: "88%" }} placeholder="Type a message   " ref={(input) => { this.talkInput = input }} type="text" onKeyPress={this._handleInputKeyPress} />
                            </div>
                        </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="container center-align" id="cards-div" style={{ width: "50%", marginLeft: "10%", overflow: "scroll", height: "60rem", marginTop: "10%", border: "1px solid white" }}>
                        <div>
                            {this.state.items.map((prod, i) => {
                                if (prod.img && prod.title && prod.a && prod.price) {
                                    if (i % 3 === 0) {
                                        return (
                                            <Item
                                                key={i}
                                                img={prod.img}
                                                title={prod.title}
                                                link={prod.a}
                                                price={prod.price}
                                            />
                                        )
                                    }

                                }
                            })
                            }
                        </div>
                    </div>
                    <div style={{position: "relative"}}>
                        <div style={{ width: "32.4rem", height: "58rem", border: "1px solid rgb(133 203 2018)", top: "28rem", position: "fixed", right: "13%", borderRadius: "25px" }}>
                            <div id="chatbot" style={{ height: "85%", width: "100%", overflow: "auto", backgroundColor: "#FFFFFF", borderRadius: "25px" }}>

                                {this.renderMessages(this.state.messages)}
                                <div ref={(el) => { this.messagesEnd = el }}
                                    style={{ float: "left", clear: "both" }}>

                                </div>
                            </div>
                            <div className="col s12" style={{ backgroundColor: "#FFFFFF" }}>
                                <input style={{ margin: "2rem", paddingLeft: "1%", paddingRight: "1%", width: "88%" }} placeholder="Type a message   " ref={(input) => { this.talkInput = input }} type="text" onKeyPress={this._handleInputKeyPress} />
                            </div>
                        </div>
                </div>
                </div>
            )
        }
    }
}

export default Chatbot;