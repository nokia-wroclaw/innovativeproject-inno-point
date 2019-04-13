import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Container } from "./style";
import { LoginForm } from "../../components/Form";

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Container loading={loading}>
      <LoginForm setLoading={setLoading} loading={loading} />
    </Container>
  );
};

export default withRouter(Welcome);
