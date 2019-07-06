import React from "react";
import { Grid } from "semantic-ui-react";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import CreateTournamentForm from "../components/forms/CreateTournamentForm";
import NewTournamentStep from "../components/steppers/NewTournamentStep";

//library.add(faUser);

class NewTournamentPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <Grid>
          <Grid.Column width={3}>
              <NewTournamentStep/>
            </Grid.Column>
            <Grid.Column width={13}>
              <CreateTournamentForm
                handleChange={this.handleChange}
                value={value}
              />
            </Grid.Column>
          </Grid>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default NewTournamentPage;
