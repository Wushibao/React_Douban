import React, { Component } from 'react';
import FooterBar from './components/FooterBar'
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <FooterBar/>
      </div>
    );
  }
}

export default App;
