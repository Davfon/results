import './Search.css';
import React, {useEffect, useState} from 'react';
import Logo from './assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import VideoIcon from '@mui/icons-material/VideoLibraryOutlined';
import ShoppingIcon from '@mui/icons-material/LocalOfferOutlined';
import MapsIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import HelpIcon from '@mui/icons-material/Help';
import { Button } from '@mui/material';
import { saveAs } from 'file-saver';
import StopWatch from 'statman-stopwatch';
import { useElapsedTime } from 'use-elapsed-time';

function Search() {
  const elapsedTime = useElapsedTime({ isPlaying: true});
  const stopwatch1 = new StopWatch(true);
  const featuredLink = 'https://www.swissinfo.ch/eng/driving/29180148';
  const firstLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const [featuredAmount, setFeaturedAmount] = useState(0);
  const [firstAmount, setFirstAmount] = useState(0);

  function endSearch() {
    const data = 'Search Term: ' + localStorage.getItem('searchTerm') + '\nTotal Search Time in s: ' + elapsedTime.elapsedTime + '\nTime passed until clicked featured snippet in s (0, if not clicked): ' + String(featuredAmount) + '\nTime passed until clicked first result in s (0, if not clicked): ' + String(firstAmount) +'\nTime spent on other pages in s: ' + (stopwatch1.read(0));
    var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
  }

  function clickFeatured(featuredLink) {
    setFeaturedAmount(elapsedTime.elapsedTime);
    window.open(featuredLink);
  }

  function clickFirst(firstLink) {
    setFirstAmount(elapsedTime.elapsedTime);
    window.open(firstLink);
  }

  useEffect(() => {
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
  });

  const onFocus = () => {
    stopwatch1.split();
  };

  const onBlur = () => {
    stopwatch1.unsplit();
  };


  return (
    <div className='App'>
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
        <div className='featured-snippet'>
          <p className='featured-text'>
          Drivers must be <b>at least 18 years old</b> in Switzerland to operate motorbikes and cars. A change in the law will allow young people to obtain a ...
          </p>
          <div className='grey-link' onClick={() => clickFeatured(featuredLink)} > https://www.swissinfo.ch › eng › driving </div>
          <div className='blue-link' onClick={() => clickFeatured(featuredLink)} > Driving - SWI swissinfo.ch </div>
          <div className='footnote'>
            <div className='separation-line'/>
            <div className='help-icon'>
              <HelpIcon className='help-icon-svg'/>
            </div>
            <div className='footnote-text'> About featured snippets </div>
          </div>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => clickFirst(firstLink)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => clickFirst(firstLink)} > Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link'> https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link'> Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link'> https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link'> Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link'> https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link'> Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link'> https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link'> Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link'> https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link'> Swiss driving age to drop to 17 - Le News </div>
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