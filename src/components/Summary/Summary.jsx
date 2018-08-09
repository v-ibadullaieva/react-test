import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Summary extends Component {
  usersFromKiev() {
    return this.props.users.filter(user => (
      user.location.toLowerCase() === 'kiev'
    ));
  }

  longestName() {
    if (this.props.users.length > 0) {
      const names = this.props.users.map(user => 
        `${user.first_name.trim()} ${user.last_name.trim()}`
      )
      const name = names.reduce((acc, curr, index, array) => 
        acc.length < curr.length ? curr : acc
      , '');
      return name;
    } else {
      return null;
    }
  }

  sumOldestUsers() {
    if (this.props.users.length > 0) {
      const ages = this.props.users.map(user => {
        const dob = new Date(user.dob);
        var diffMs = Date.now() - dob.getTime();
        var ageDt = new Date(diffMs); 
        return Math.abs(ageDt.getUTCFullYear() - 1970);
      });
  
      const sorted = ages.sort((a, b) => a - b);
      return sorted.slice(-3).reduce((acc, curr) => acc + curr, 0);
    } else {
      return null;
    }
  }

  render() {
    return (
      <dl>
        <dt>Count of users from Kiev or kiev</dt>
        <dd>{this.usersFromKiev().length}</dd>
        <dt>Sum of ages of three oldest users from table</dt>
        <dd>{this.sumOldestUsers()}</dd>
        <dt>Longest string of first name + last name pair</dt>
        <dd>{this.longestName()}</dd>
      </dl>
    )
  }
}

Summary.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default connect(
  state => ({
    users: state.app.users
  })
)(Summary);