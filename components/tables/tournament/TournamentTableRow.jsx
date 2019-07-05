import React from "react";
import {Button, Table} from "semantic-ui-react";
import PropTypes from "prop-types";

export const TournamentTableRow = (props) => (
  <Table.Row>
    <Table.Cell>{props.vehicle.id}</Table.Cell>
    <Table.Cell>{props.vehicle.make}</Table.Cell>
    <Table.Cell>{props.vehicle.model}</Table.Cell>
    <Table.Cell>{props.vehicle.year}</Table.Cell>
    <Table.Cell>W: 290 L: 156</Table.Cell>
    <Table.Cell textAlign='center'><Button color='purple'>Twitch</Button></Table.Cell>
    <Table.Cell textAlign='center'>
      <Button
        onClick={() => props.addFavorite(props.vehicle)}
        color={props.vehicle.favorite? 'google plus' : 'twitter'}
        icon={props.vehicle.favorite ? 'heart' : 'heart outline'} />
    </Table.Cell>
  </Table.Row>
);

TournamentTableRow.propTypes = {
  vehicle: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
};