import React, { Component } from "react";
import './style.js';
import Message from "./Message";
import Input from "./Input";

function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}


class Chat extends Component {
    state = {
        mesages: [],
        member: {
            username: "Gall Anonim",
            color:  randomColor(),
        }
    }

    constructor () {
        super();
        this.drone = new window.Scaledrone("YOUR-CHANNEL-ID", {
            data: this.state.member
        });
        this.drone.on('open', error => {
            if (error) {
                return console.error(error);
            }
            const member = {...this.state.member};
            member.id = this.drone.clientId;
            this.setState({member});
        });
        const room = this.drone.subscribe("observable-room");
        room.on('data', (data, member) => {
            const messages = this.state.mesages;
            messages.push({member, text: data});
            this.setState({messages});
        });
    }

    render() {
        return (
            <div className="Chat">
                <div className="ChatHeader">
                    <h1>Chat for group</h1>
                </div>
                <Message
                    message={this.state.mesages}
                    currentMember = {this.state.member}
                />
                <Input
                    onSendMessage={this.onSendMessage}
                />
            </div>
        );
    }

    onSendMessage = (message) => {
        this.drone.publish({
            room: "observable-room",
            message
        });
    }
}

export default Chat;