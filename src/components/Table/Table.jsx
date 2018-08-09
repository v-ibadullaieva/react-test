import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'reactstrap';
import { connect } from "react-redux";

import { fetchUsers, deleteUser } from '../../features/users/actions';

const User = ({ id, first_name, last_name, dob, location, onClick }) => {
  return (
    <tr>
      <td>
        {first_name}
      </td>
      <td>
        {last_name}
      </td>
      <td>
        {dob}
      </td>
      <td>
        {location}
      </td>
      <td>
        <Button color="danger" onClick={() => onClick(id)}>Delete</Button>
      </td>
    </tr>
  )
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export class TableComponent extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => <User key={user.id} {...user} onClick={(id) => this.props.deleteUser(id)} />)}
        </tbody>
      </Table>
    )
  }
}

TableComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default connect(
  state => ({
    users: state.app.users
  }),
  { fetchUsers, deleteUser }
)(TableComponent);
