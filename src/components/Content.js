import React, { Component } from 'react'
import Dashboard from './Dashboard'
import { Switch, Route } from 'react-router-dom';
import UserProfile from './UserProfile';

class Content extends Component {
    render () {
        return (
            <div class="content">
                <Switch>
                    <Route to='/dashboard' component={Dashboard} />
                    <Route to='/profile' component={UserProfile} />
                </Switch>
            </div>
        )
    }
}

export default Content