import React, { Component } from 'react'
import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends Component {
    render () {
        return (
        <div className="wrapper">
          <Sidebar/>
          <Main/>
        </div>
        )
    }
}

export default App