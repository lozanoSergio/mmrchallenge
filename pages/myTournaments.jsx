import React from "react";
import Link from "next/link";
import { Grid, Button, Icon } from "semantic-ui-react";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

//library.add(faUser);

class MyTournamentsPage extends React.Component {
  constructor(props) {
    super();

    //this.state = {};
  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="I am Tournament Page">
          <Grid>
            <Grid.Column>
              <Link href="/newTournament" as="new-tournament">
                <Button
                  className="btn-sq-lg"
                  animated="fade"
                >
                  <Button.Content hidden>New Tournament</Button.Content>
                  <Button.Content visible>
                    <Icon name="add" />
                  </Button.Content>
                </Button>
              </Link>
            </Grid.Column>
          </Grid>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default MyTournamentsPage;
