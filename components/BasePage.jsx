import { Container } from "semantic-ui-react";

const BasePage = props => {
  const { title } = props;
  return (
    <div className="base-page">
      <Container>
        {title && (
          <div className="page-header">
            <h1 className="page-header-title">{title}</h1>
          </div>
        )}
        {props.children}
      </Container>
    </div>
  );
};

BasePage.defaultProps = {
  className: ""
};

export default BasePage;
