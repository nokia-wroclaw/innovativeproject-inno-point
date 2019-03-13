import React, { Component } from "react";
import "./style";

class Member extends Component {
    state = {
        id: 0,
        name: "",
        surname: "",
        role: ""
    }
 
    render () {
        const className = (this.props.className) ? 
        `member ${this.props.className}` :
        'member';
        
        return ( 
            <section className={className}>
                <header>
                    <h3 className="memberFullName">{this.state.name + " " + this.state.surname }</h3>
                    <p className="memberRole">{this.state.role}</p>
                </header>
            </section>
        );
    }
}

export default Member;