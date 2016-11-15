import React from 'react';
import { Link } from 'react-router';
import Navigation from '../containers/Navigation';
import { map } from 'lodash';

const UserList = ({ users, makeUserAdmin }) => {
  const displayUsersInfo = map(users, (user) =>
  {return <li className="user-info-item" key={user.uid}>
      <h2 className="user-list-name">{user.username}</h2>
      <h2 className="user-email">{user.email}</h2>
      <button className="make-admin-button"
      onClick={e => makeUserAdmin(user.key)}>Make Admin</button>
    </li>})
  return (
    <section className="user-list-container">
      <ul className="user-list">
        {displayUsersInfo}
      </ul>
      <Navigation />
    </section>
  )
}

export default UserList;
