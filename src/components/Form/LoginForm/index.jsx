import React, { Fragment, useState } from "react";
import { createGlobalStyle } from "styled-components";
import config from "../../../config";

import { Form, Container } from "./style";
import Input from "../../Input";
import Button from "../../Button";
import Spinner from "../../Spinner";

const GlobalStyle = createGlobalStyle`
   body{
    height: 100%;
    overflow: hidden;
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
  }
`;

const LoginForm = props => {
  const onLogin = event => {
    event.preventDefault();
    props.setLoading(true);
  };

  const onLoginWithGitHub = event => {
    event.preventDefault();
    window.location.assign(`${config.api}/auth`);
    props.setLoading(true);
  };

  return (
    <Container>
      <GlobalStyle />
      <Form gridArea={props.gridArea}>
        <Input placeholder="e-mail" size="large" gridArea="email" />
        <Input
          placeholder="password"
          size="large"
          type="password"
          gridArea="pass"
        />
        {props.loading ? (
          <Spinner gridArea="github" alignSelf="end" />
        ) : (
          <Fragment>
            <Button
              color={true}
              size="large"
              label="Log In"
              alignSelf="end"
              gridArea="button"
              onClick={onLogin}
            />
            <Button
              size="large"
              bcg="hsl(0, 0%, 15%)"
              component={() => (
                <div
                  style={{
                    display: "grid",
                    gridTemplate: '"icon text space"/2fr 5fr 1fr',
                    alignItems: "center"
                  }}
                >
                  <img
                    src="icons/github.svg"
                    style={{ width: "20px", justifySelf: "end" }}
                  />
                  <span>Login with GitHub</span>
                </div>
              )}
              alignSelf="end"
              gridArea="github"
              onClick={onLoginWithGitHub}
            />
          </Fragment>
        )}
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
};

export { LoginForm };
