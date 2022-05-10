import './Start.css';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const inputField = document.getElementById('inputField');
    inputField.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        localStorage.setItem('id', id);
        if (document.getElementById('nextButton') != null) {
          document.getElementById('nextButton').click();
        }
      }
    });
  });

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('id', id);
    navigate('/car-study/group-c/home');
  }

  return (
    <div className='start'>
      <div className='start_body'>
        <div className='start_question-container'>
            <div className='start_question'>
                Please enter your Prolific ID:
            </div>
        </div>
        <div className='start_searchbar'>
          <input className='start_input-field' id='inputField' autoFocus value={id} onChange={(e) => setId(e.target.value)} />
          <div className='start_search-button'>
            <Button id='nextButton' type='submit' variant='outlined' onClick={handleClick}>
                Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
