import { Container } from "semantic-ui-react";

const BasePage = props => {
  return (
    <div className="base-page">
      <Container>
        {props.children}
      </Container>
    </div>
  );
};

export default BasePage;
