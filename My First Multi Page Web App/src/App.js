import './App.css';

import stores from './data/stores';
import items from './data/items';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './components/Nav';

import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';




function App() {  

  return (
    <div className="App">
      <Router> 
      <header>
        <Navigation />
      </header>
        <header className="App-header">
          <h1>Kevin's Korner</h1>
          <p>Welcome to Kevin's Korner! This store app will demonstrate my skills with JavaScript, HTML, and CSS.</p>
        </header>
        <main>
            <Route path="/" exact><HomePage /></Route>
            <Route path="/stores"><StoresPage stores={stores} /></Route>
            <Route path="/order"><OrderPage item={items} /></Route>
        </main>
        <footer>
          <p>&copy; 2022 Kevin Riemer</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </Router>
    </div>

  );
}

export default App;
