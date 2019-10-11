import React, { Component } from 'react'
import sidebarImg from "../assets/img/sidebar-5.jpg"
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
    render () {
        return (
            <div className="sidebar" data-image={sidebarImg}>
            <div className="sidebar-wrapper">
                <div className="logo">
                    <Link to='/' className="simple-text">
                        Joy
                    </Link>
                </div>
                <ul className="nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/dashboard'>
                            <i className="nc-icon nc-chart-pie-35"></i>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/profile'>
                            <i className="nc-icon nc-circle-09"></i>
                            <p>User Profile</p>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
        )
    }
}

export default Sidebar