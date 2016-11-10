import React from 'react';
import ProposalList from '../containers/ProposalList';
import SignIn from '../containers/SignIn';
import { Link } from 'react-router';

export class Homepage extends React.Component {

  componentDidMount () {
    // this.props.getUsersFromDatabase()
  }

  render() {
    return (
      <section className="landing-container">
      { this.props.currentUser.username ?
        <section className="homepage">
          <ProposalList />
        </section>
        :
        <SignIn/> }
        </section>
    )
  }
}

export default Homepage;
