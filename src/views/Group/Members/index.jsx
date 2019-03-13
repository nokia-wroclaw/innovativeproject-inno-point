import React, { Component } from "react";
import MemberList from "./members";
import "./style";

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            members: []
        };
    } 

    componentWillMount() {
        this.fetchMembers();
    }

    fetchMembers() {
        this.setState({
            loading: true
        })
        fetch()
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    loading: false,
                    members: responseData
                });
            });
    }

    render() {
        return(
            <section className="mainMembersList">
                <h2 className="mainMembersListTitle">Group Members</h2>
                {
                    (this.state.loading)
                    ? <p>Loading members... </p>
                    : <MemberList members={this.state.members} />
                }
            </section>
        );
    }
}

export default Members;