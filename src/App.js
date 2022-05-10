import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import CarStudyGroupAStart from './car-study/group-a/Start';
import CarStudyGroupAHome from './car-study/group-a/Home';
import CarStudyGroupASearch from './car-study/group-a/Search';

import CarStudyGroupBStart from './car-study/group-b/Start';
import CarStudyGroupBHome from './car-study/group-b/Home';
import CarStudyGroupBSearch from './car-study/group-b/Search';

import CarStudyGroupCStart from './car-study/group-c/Start';
import CarStudyGroupCHome from './car-study/group-c/Home';
import CarStudyGroupCSearch from './car-study/group-c/Search';

import End from './End';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/car-study/group-a"/>}/>
          <Route path='/car-study/group-a' element={<CarStudyGroupAStart />} />
          <Route path='/car-study/group-a/home' element={<CarStudyGroupAHome />} />
          <Route path='/car-study/group-a/search' element={<CarStudyGroupASearch />} />
          <Route path='/car-study/group-b' element={<CarStudyGroupBStart />} />
          <Route path='/car-study/group-b/home' element={<CarStudyGroupBHome />} />
          <Route path='/car-study/group-b/search' element={<CarStudyGroupBSearch />} />
          <Route path='/car-study/group-c' element={<CarStudyGroupCStart />} />
          <Route path='/car-study/group-c/home' element={<CarStudyGroupCHome />} />
          <Route path='/car-study/group-c/search' element={<CarStudyGroupCSearch />} />
          <Route path='/end' element={<End />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;