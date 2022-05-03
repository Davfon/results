import './End.css';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function End() {
  return (
    <div className='end-container'>
      <CheckCircleIcon className='check-circle'/>
      <div className='message'>Thanks! You can continue with the survey now</div>
    </div>
  )
}

export default End