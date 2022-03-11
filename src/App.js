import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Search from './Search';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;