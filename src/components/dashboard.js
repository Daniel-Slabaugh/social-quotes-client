import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchSocialQuotes} from '../actions/social-quote';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchSocialQuotes());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-email">
                    email: {this.props.email}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div>
                    <p> quotes will go here </p>
                </div>
            {/* put quotes here */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        email: state.auth.currentUser.email,
        name: `${currentUser.firstName} ${currentUser.lastName}`, 
        quotes: state.socialQuote.quotes
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
