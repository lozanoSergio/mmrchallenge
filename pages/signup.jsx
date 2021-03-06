import React from "react";
import { Grid } from "semantic-ui-react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import SignUpForm from "../components/forms/SignUpForm";
import moment from "moment";

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: ""
};

class SignUpPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      error: undefined
    };
  }
  render() {
    const { error } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="I am About Page">
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column>
              <SignUpForm initialValues={INITIAL_VALUES} error={error} />
            </Grid.Column>
          </Grid>
        </BasePage>
      </BaseLayout>
    );
  }
}
export default SignUpPage;
