import {Table} from "semantic-ui-react";
import React from "react";

export function TournamentTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1} sorted = {props.column === 'id' ? props.direction : null } onClick={() => props.handleSort('id')}></Table.HeaderCell>
        <Table.HeaderCell width={3} sorted = {props.column === 'make' ? props.direction : null } onClick={() => props.handleSort('make')}>Name</Table.HeaderCell>
        <Table.HeaderCell width={3} sorted = {props.column === 'model' ? props.direction : null } onClick={() => props.handleSort('model')}>Account</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'wr' ? props.direction : null } onClick={() => props.handleSort('wr')}>W/L</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'year' ? props.direction : null } onClick={() => props.handleSort('year')}>Stats</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'package' ? props.direction : null } onClick={() => props.handleSort('favorite')}>Twitch</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'favorite' ? props.direction : null } onClick={() => props.handleSort('favorite')}>Favorite</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}