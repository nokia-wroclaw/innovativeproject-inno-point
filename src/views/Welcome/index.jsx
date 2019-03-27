import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Img } from "./style";
import { LoginForm } from "../../components/Form";

const logos = ["samsung", "comarch", "nokia", "dolby", "tieto", "comarch"];

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Container loading={loading}>
      <LoginForm setLoading={setLoading} loading={loading} />
      {!loading &&
        logos.map((element, index) => (
          <Img
            className="Logo"
            src={`photos/${element}.png`}
            key={index}
            index={index}
            amount={logos.length}
          />
        ))}
    </Container>
  );
};

export default withRouter(Welcome);
