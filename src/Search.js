import './Search.css';
import React, {useState} from 'react';
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

function Search() {
  const start = new Date();
  const featuredLink = 'https://www.swissinfo.ch/eng/driving/29180148';
  const firstLink = 'https://lenews.ch/2018/12/20/swiss-driving-age-to-drop-to-17';
  const [featuredAmount, setFeaturedAmount] = useState(0);
  const [firstAmount, setFirstAmount] = useState(0);

  function endSearch(start) {
    const end = new Date();
    const data = 'Search Term: ' + localStorage.getItem('searchTerm') + '\nTotal Search Time in ms: ' + String(end.getTime() - start.getTime()) + '\nTime passed until clicked featured snippet in ms (0, if not clicked): ' + String(featuredAmount) + '\nTime passed until clicked first result in ms (0, if not clicked): ' + String(firstAmount);
    var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
  }

  function clickFeatured(start, featuredLink) {
    const end = new Date();
    setFeaturedAmount(end.getTime() - start.getTime());
    window.open(featuredLink);
  }

  function clickFirst(start, firstLink) {
    const end = new Date();
    setFirstAmount(end.getTime() - start.getTime());
    window.open(firstLink);
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <img className='logo' src={Logo} alt='' />
        <div className='searchbar'>
          <input className='fake-input-field' id='inputField' value={localStorage.getItem('searchTerm')} readOnly />
        </div>
        <div className='done-container'>
          <Button onClick={() => endSearch(start)}>Done</Button>
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
          <div className='grey-link' onClick={() => clickFeatured(start, featuredLink)} > https://www.swissinfo.ch › eng › driving </div>
          <div className='blue-link' onClick={() => clickFeatured(start, featuredLink)} > Driving - SWI swissinfo.ch </div>
          <div className='footnote'>
            <div className='separation-line'/>
            <div className='help-icon'>
              <HelpIcon className='help-icon-svg'/>
            </div>
            <div className='footnote-text'> About featured snippets </div>
          </div>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => clickFirst(start, firstLink)} > https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link' onClick={() => clickFirst(start, firstLink)} > Swiss driving age to drop to 17 - Le News </div>
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