import React, { Component } from "React";
import { Container, Header, Members } from "./style";
import Chat from "./Chat/index.js";
import Button from "../../Button";

class Groups extends Component {
    render(){
        return (
            <Container>
                <Header>
                    <Button
                        size="small"
                        lable="Add member"
                        gridArea="button"
                        style={{ justifySelf: "end", alignSelf: "end" }}
                    />
                    <Button
                        size="small"
                        lable="Choose project"
                        gridArea="button"
                        style={{ justifySelf: "end", alignSelf: "end" }}
                    />
                </Header>
                <Members/>
                <Chat/>
            </Container>
        );
    }
}

export default Groups;