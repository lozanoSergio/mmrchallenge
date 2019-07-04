import React from 'react';
import PropTypes from 'prop-types';
import {Table, Pagination} from 'semantic-ui-react'

import {TournamentPageSizeSelect} from './TournamentPageSizeSelect.jsx';
import {TournamentTableRow} from "./TournamentTableRow.jsx";
import {TournamentTableHeader} from "./TournamentTableHeader.jsx";

export const TournamentTable = (props) => {
  if (!props.vehicles) {
    return <React.Fragment/>;
  }
  const vehicleRows = props.vehicles.map(
    (vehicle, index) => <TournamentTableRow key={index} vehicle={vehicle} addFavorite={props.addFavorite} />
  );
  return (
    <React.Fragment>
      <TournamentPageSizeSelect
        limit={props.limit}
        onChangeLimit={props.onChangeLimit}
      />
      Total count: {props.totalCount}.
      <Table celled selectable sortable >
        <TournamentTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />

        <Table.Body>
          {vehicleRows}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='8'>
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentPage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  );
};

TournamentTable.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};