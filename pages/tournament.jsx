import React from "react";
import { Grid } from "semantic-ui-react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import TournamentList from "../components/tables/tournament/TournamentList";

class TournamentPage extends React.Component {
  constructor(props) {
    super();

    //this.state = {};
  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="I am Tournament Page">
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column>
              <TournamentList />
            </Grid.Column>
          </Grid>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default TournamentPage;
