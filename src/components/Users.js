import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import setUsers from '../store/usersReducer';

class Users extends Component {
    componentDidMount() {
        this.props.setUsers();
    }
    handleUserClick = id => {
        const { history } = this.props;
        const selectedUser = this.props.users.find(user => user.id === id);
        history.push(`/users/${id}`, { selectedUser });
    };

    render() {
        const { isAuthenticated, users, location } = this.props;

        if (!isAuthenticated) return <Redirect to={location.state.prevRoute} />;

        return (
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id} onClick={() => this.handleUserClick(user.id)}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.userReducer.isAuthenticated,
    users: state.userReducer.users,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setUsers,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);