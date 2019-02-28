import React from "react";
import { createGlobalStyle } from "styled-components";

import { Form, Container } from "./style";

import Input from "../../Input";
import Button from "../../Button";

const GlobalStyle = createGlobalStyle`
   body{
    height: 100%;
    overflow: hidden;
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
  }
`;

const LoginForm = props => (
  <Container>
    <GlobalStyle />
    <Form onSubmit={props.onSubmit} gridArea={props.gridArea}>
      <Input placeholder="e-mail" size="large" gridArea="email" />
      <Input
        placeholder="password"
        size="large"
        type="password"
        gridArea="pass"
      />
      <Button size="large" label="Log In" alignSelf="end" gridArea="button" />
      <a className="SingIn">Sing In</a>
    </Form>
    <div className="Panel">
      <div className="Title">InnoPoint</div>
      <div className="Info">
        Welcom back! Log in to your account to view today's projects
      </div>
      <div className="Icons">
        <a>
          <img src="icons/facebook.svg" />
        </a>
        <a>
          <img src="icons/github.svg" />
        </a>
        <a>
          <img src="icons/university.svg" />
        </a>
      </div>
    </div>
  </Container>
);

export default LoginForm;
