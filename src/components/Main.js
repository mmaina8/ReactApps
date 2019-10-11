import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';

class Main extends Component {
    render () {
        return (
        <div className="main-panel">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
        )
    }
}

export default Main