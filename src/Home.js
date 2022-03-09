import './Home.css';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.png';
import {useNavigate} from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const inputField = document.getElementById('inputField');
    inputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('searchButton').click();
      }
    });
  });

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/search');
  }

  return (
    <div className='App'>
      <div className='App-body'>
        <img className='logo' src={Logo} alt=''/>
        <div className='searchbar'>
          <SearchIcon className='search-icon'/>
          <input className='input-field' id='inputField' autoFocus value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
        <div className='search-button'>
          <Button id='searchButton' type='submit' variant='outlined' onClick={handleClick}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
