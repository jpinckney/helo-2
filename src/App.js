import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import Nav from './components/nav/Nav'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            { routes }
            <Nav />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App
