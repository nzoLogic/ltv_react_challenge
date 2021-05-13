import React from 'react';

import Header from './components/Header';
import Categories from './containers/Categories';
import VegetableDataList from './components/VegetableDataList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        {/* 
          Commented out since refactoring Categories and redux is out of scope
          <Categories />
          
          */}
        <VegetableDataList />
      </div>
    </div>
  );
}

export default App;
