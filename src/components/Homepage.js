import React from 'react';
import ProposalList from '../containers/ProposalList';
import SignIn from '../containers/SignIn';
import { Link } from 'react-router';

export class Homepage extends React.Component {

  componentWillMount () {
    this.props.getUsersFromDatabase(this.props.currentUser.uid)
  }

  render() {
    return (
      <section className="landing-container">
      { this.props.currentUser.username ?
        <section className="homepage">
          <h1 className="homepage-title"> Hello {this.props.currentUser.username}! </h1>
          <ProposalList />
          <section className="dashboard">
            <Link to="/AddProposal"
                className="dashboard-link">
              <button>
                New proposal
              </button>
            </Link>
            <Link to="/Presentations"
              className="dashboard-link">
              <button>Presentations</button>
            </Link>
          </section>
        </section>

        : <SignIn/> }
        </section>
    )
  }
}

export default Homepage;
