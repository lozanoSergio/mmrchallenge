import React from "react";
import Link from "next/link";
import { Grid, Button, Icon } from "semantic-ui-react";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import CreateTournamentForm from "../components/forms/CreateTournamentForm";

//library.add(faUser);

class NewTournamentPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="I am Tournament Page">
          <Grid>
            <Grid.Column>
              <CreateTournamentForm />
            </Grid.Column>
          </Grid>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default NewTournamentPage;