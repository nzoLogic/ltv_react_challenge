import React from 'react';

import Header from './components/Header';
import Categories from './containers/Categories';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Categories />
      </div>
    </div>
  );
}

export default App;
