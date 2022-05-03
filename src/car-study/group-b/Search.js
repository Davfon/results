import './Search.css';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import VideoIcon from '@mui/icons-material/VideoLibraryOutlined';
import ShoppingIcon from '@mui/icons-material/LocalOfferOutlined';
import MapsIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import HelpIcon from '@mui/icons-material/Help';
import { saveAs } from 'file-saver';
import { Button } from '@mui/material';
import { useElapsedTime } from 'use-elapsed-time';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

function Search() {
  const navigate = useNavigate();

  const { elapsedTime } = useElapsedTime({ isPlaying: true});
  const featuredLink = 'https://www.swissinfo.ch/eng/driving/29180148';
  const firstLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const secondLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const thirdLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const fourthLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const fifthLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const sixthLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const [clickList, setClickList] = useState([]);
  const [timeRecords, setTimeRecords] = useState([0,0,0,0,0,0,0]);
  let userLeft = false;
  const [userLeftTime, setUserLeftTime] = useState(0);
  const [onOtherTabAmount, setOnOtherTabAmount] = useState(0);

  const firebaseConfig = {
    apiKey: "AIzaSyDJcuwU3zC7RGNoALPWzbfefbdnJhhtCo4",
    authDomain: "results-a9800.firebaseapp.com",
    projectId: "results-a9800",
    storageBucket: "results-a9800.appspot.com",
    messagingSenderId: "704807750931",
    appId: "1:704807750931:web:0e6bd86ad0956b38c45ee6"
  };

  initializeApp(firebaseConfig);

  function getCurrentTime() {
    var now = new Date();
    var date = now.toISOString().split('T')[0];
    var time = ('0' + now.getHours()).slice(-2) + '-' + ('0' + now.getMinutes()).slice(-2) + '-' + ('0' + now.getSeconds()).slice(-2);
    return date + ' ' + time;
  }

  function endSearch() {
    const storage = getStorage();
    const storageRef = ref(storage, 'group-b/' + getCurrentTime() + ' group-b.txt');
    const id = localStorage.getItem('id');
    const data = 
      'ID: ' + id +
      '\nSearch Term: ' + localStorage.getItem('searchTerm') + 
      '\nTotal Search Time in s: ' + elapsedTime + 
      '\nClick List: ' + String(clickList) + 
      '\nTime spent on other pages in s: ' + onOtherTabAmount;
    var blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    saveAs(blob, 'dynamic.txt');
    navigate('/end');
  }

  function handleClick(link, id) {
    userLeft = true;
    // setUserLeftTime(elapsedTime);
    let currentTimeRecords = [ ...timeRecords ];
    if (currentTimeRecords[id] === 0) {
      currentTimeRecords[id] = elapsedTime;
      setTimeRecords(currentTimeRecords);
    }
    setClickList(oldList => [...oldList, String(id) + ': ' + String(elapsedTime)]);
    window.open(link);
  }

  // window.addEventListener('focus', handleFocus());

  function handleFocus() {
    if (userLeft) {
      setOnOtherTabAmount(onOtherTabAmount + (elapsedTime - userLeftTime));
      console.log(onOtherTabAmount);
      userLeft = false;
    }
  }

  useEffect(() => {
    window.focus();
  }, []);

  return (
    <div className='App' id='App' tabIndex='100'>
      <div className='App-header'>
        <img className='logo' src={Logo} alt='' />
        <div className='searchbar'>
          <input className='fake-input-field' id='inputField' value={localStorage.getItem('searchTerm')} readOnly />
        </div>
        <div className='done-container'>
          <Button onClick={() => endSearch()}>Done</Button>
        </div>
        <div className='tabs'>
          <div className='tab first-tab'>
            <div className='tab-icon'>
              <SearchIcon className='tab-icon-svg blue'/>
            </div>
            <div className='tab-text blue'>All</div>
          </div>
          <div className='tab'>
            <div className='tab-icon'>
              <ImageIcon className='tab-icon-svg'/>
            </div>
            <div className='tab-text'>Images</div>
          </div>
          <div className='tab'>
            <div className='tab-icon'>
              <VideoIcon className='tab-icon-svg'/>
            </div>
            <div className='tab-text'>Videos</div>
          </div>
          <div className='tab'>
            <div className='tab-icon'>
              <ShoppingIcon className='tab-icon-svg'/>
            </div>
            <div className='tab-text'>Shopping</div>
          </div>
          <div className='tab'>
            <div className='tab-icon'>
              <MapsIcon className='tab-icon-svg'/>
            </div>
            <div className='tab-text'>Maps</div>
          </div>
          <div className='tab'>
            <div className='tab-icon'>
              <MoreIcon className='tab-icon-svg'/>
            </div>
            <div className='tab-text'>More</div>
          </div>
        </div>
        <div className='header-line' />
      </div>
      <div className='App-body'>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(firstLink, 1)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => handleClick(firstLink, 1)} > Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(secondLink, 2)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => handleClick(secondLink, 2)} > Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(thirdLink, 3)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => handleClick(thirdLink, 3)} > Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(fourthLink, 4)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => handleClick(fourthLink, 4)} > Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(fifthLink, 5)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => handleClick(fifthLink, 5)} > Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(sixthLink, 6)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => handleClick(sixthLink, 6)} > Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
      </div>
      <div className='App-footer'>
        <div className='footer'>
          <img className='logo-footer' src={Logo} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Search;