import './Search.css';
import React from 'react';
import Logo from './assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import VideoIcon from '@mui/icons-material/VideoLibraryOutlined';
import ShoppingIcon from '@mui/icons-material/LocalOfferOutlined';
import MapsIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import HelpIcon from '@mui/icons-material/Help';
import { Button } from '@mui/material';

function Search() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img className='logo' src={Logo} alt='' />
        <div className='searchbar'>
          <input className='fake-input-field' id='inputField' value={"how old to drive car"} readOnly />
        </div>
        <div className='done-container'>
          <Button>Done</Button>
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
          <div className='grey-link'> https://www.swissinfo.ch › eng › driving </div>
          <div className='blue-link'> Driving - SWI swissinfo.ch </div>
          <div className='footnote'>
            <div className='separation-line'/>
            <div className='help-icon'>
              <HelpIcon className='help-icon-svg'/>
            </div>
            <div className='footnote-text'> About featured snippets </div>
          </div>
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
        <div className='search-result'>
          <div className='grey-link'> https://lenews.ch › News & features › Automotive </div>
          <div className='blue-link'> Swiss driving age to drop to 17 - Le News </div>
          <p className='text'>
            20 Dec 2018 — This licence allows you to <b>drive</b> accompanied by a driver 23 or over who has had a full <b>driving</b> license for at least 3 years. The final step, ...
          </p>
        </div>
      </div>
      <div className='App-footer'>
        <img className='logo-footer' src={Logo} alt='' />
      </div>
    </div>
  )
}

export default Search;