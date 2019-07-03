import React from "react";
import { Grid, Segment } from "semantic-ui-react";
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

class SignUp extends React.Component {
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
        <BasePage className="about-page" title="I am About Page">
          <Grid columns="equal">
            <Grid.Column>
              <Segment>1</Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <SignUpForm initialValues={INITIAL_VALUES} error={error} />
            </Grid.Column>
            <Grid.Column>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid>
        </BasePage>
      </BaseLayout>
    );
  }
}
export default SignUp;
