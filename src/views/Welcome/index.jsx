import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Container } from "./style";
import { LoginForm } from "../../components/Form";

const Welcome = withRouter(props => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      props.history.push("/dashboard/projects");
    }
  });

  return (
    <Container loading={loading}>
      <LoginForm setLoading={setLoading} loading={loading} />
    </Container>
  );
});

export default Welcome;
