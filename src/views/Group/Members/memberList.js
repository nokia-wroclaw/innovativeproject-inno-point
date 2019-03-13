import React, { Component } from "react";
import Member from "./member";
import "./style";

class MemberList extends Component {
    render(){
        return(
            <ul className="MemberList">
                {
                    this.props.member.map((member) => {
                        return (
                            <li
                                className="MemberListItem" 
                                key={member.state.id}>
                                    <Member member={member} className="MemberListInfo" />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default MemberList;