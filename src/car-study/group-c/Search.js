import './Search.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import VideoIcon from '@mui/icons-material/VideoLibraryOutlined';
import ShoppingIcon from '@mui/icons-material/LocalOfferOutlined';
import MapsIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import HelpIcon from '@mui/icons-material/Help';
// import { saveAs } from 'file-saver';
import { Button } from '@mui/material';
import { useElapsedTime } from 'use-elapsed-time';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

function Search() {
  const navigate = useNavigate();

  const { elapsedTime } = useElapsedTime({ isPlaying: true});
  const featuredLink = "https://www.expatica.com/ch/living/transportation/driving-and-parking-in-switzerland-100029/#:~:text=You%20can%20drive%20in%20Switzerland,translation%20of%20your%20foreign%20one.";
  const firstLink = 'https://www.eda.admin.ch/countries/usa/en/home/services/driving-and-vehicles/driving-ch-foreign-licence.html';
  const secondLink = 'https://www.ch.ch/en/vehicles-and-traffic/driving-licence/international-driving-licence/';
  const thirdLink = 'https://www.autoeurope.com/international-driving-permits-in-switzerland/';
  const fourthLink = 'https://www.iamexpat.ch/expat-info/driving-switzerland/driving-licence';
  const fifthLink = 'https://www.englishforum.ch/transportation-driving/209962-us-driver-s-license-conversion-swiss.html';
  const sixthLink = 'https://www.frommers.com/destinations/switzerland/planning-a-trip/getting-around';
  const [actions, setActions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // insert firebaseConfig here
  
  //initializeApp(firebaseConfig);

  const exitPageNotification = function(e) {
    const doneHighlighter = document.getElementById('done-highlighter');
    doneHighlighter.classList.remove('done-highlighter-animation');
    void doneHighlighter.offsetWidth;
    doneHighlighter.classList.add('done-highlighter-animation');

    const str = window.location.href.split("").reverse().join("");
    const subpage = str.substring(0, str.indexOf('/')).split("").reverse().join("");
    if (formSubmitting || subpage !== 'search') {
      return undefined;
    }
    
    (e || window.event).returnValue = 'Please press the "Done" button, before exiting the page.';
    return 'Please press the "Done" button, before exiting the page.';
  };

  window.addEventListener('beforeunload', exitPageNotification);

  function getCurrentTime() {
    var now = new Date();
    var date = now.toISOString().split('T')[0];
    var time = ('0' + now.getHours()).slice(-2) + '-' + ('0' + now.getMinutes()).slice(-2) + '-' + ('0' + now.getSeconds()).slice(-2);
    return date + ' ' + time;
  }

  function endSearch() {
    setFormSubmitting(true);
    window.removeEventListener('beforeunload', exitPageNotification);
    const storage = getStorage();
    const id = localStorage.getItem('id');
    const storageRef = ref(storage, 'group-c/ '+ getCurrentTime() + ' group-c ' + id + '.txt');
    const data = 
      'ID: ' + id +
      '\nSearch Term: ' + localStorage.getItem('searchTerm') + 
      '\nTotal Search Time in s: ' + elapsedTime + 
      '\nActions: ' + String(actions);
    var blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    // saveAs(blob, 'dynamic.txt');
    navigate('/end');
  }

  function handleClick(link, id) {
    setActions(oldList => [...oldList, String(id) + ':' + String(elapsedTime)]);
    window.open(link);
  }

  window.onfocus = function() {
    setActions(oldList => [...oldList, 'Focus:' + String(elapsedTime)]);
  }

  return (
    <div className='App' id='App' tabIndex='100'>
      
      {isModalOpen ? <div className='modal'>
        <div className='overlay'/>
        <div className='modal-window'>
          <h3>Are you done searching?</h3>
          <div className='button-container'>
            <div className='modal-done-button'>
              <Button id='modalDoneButton' type='submit' variant='outlined' onClick={endSearch}>
                Yes
              </Button>
            </div>
            <div className='modal-cancel-button'>
              <Button id='modalCancelButton' type='submit' variant='outlined' onClick={() => setIsModalOpen(false)}>
                No
              </Button>
            </div>
          </div>
        </div>
      </div> : <div/> }
      
      <div className='App-header'>
        <img className='logo' src={Logo} alt='' />
        <div className='searchbar'>
          <input className='fake-input-field' id='input1' value={localStorage.getItem('searchTerm')} readOnly />
        </div>
        <div className='done-container'>
          <div className='done-highlighter-animation' id='done-highlighter'/>
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>Done</Button>
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
            <b>You can drive in Switzerland using your foreign driving license for up to 12 months.</b> However, if your driver's license is not in English, German, French, or Italian, you also need an International Driving License. This isn't actually a license but a translation of your foreign one.
          </p>
          <div className='grey-link' onClick={() => handleClick(featuredLink, 0)} > https://www.expatica.com › ... › Transport </div>
          <div className='blue-link' onClick={() => handleClick(featuredLink, 0)} > Tips for driving and parking in Switzerland | Expatica </div>
          <div className='footnote'>
            <div className='separation-line'/>
            <div className='help-icon'>
              <HelpIcon className='help-icon-svg'/>
            </div>
            <div className='footnote-text'> About featured snippets </div>
          </div>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(firstLink, 1)} > https://www.eda.admin.ch › services </div>
          <div className='blue-link' onClick={() => handleClick(firstLink, 1)} > Driving in Switzerland on a foreign licence </div>
          <p className='text'>
            27.11.2017 — A foreign, national or international licence entitles the holder to drive all categories of vehicles for which that licence is valid on Swiss ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(secondLink, 2)} > https://www.ch.ch › international-d... </div>
          <div className='blue-link' onClick={() => handleClick(secondLink, 2)} > International driving licence from Switzerland - ch.ch </div>
          <p className='text'>
            Validity and price. The international driving licence is valid for three years, but not beyond the expiry date of your Swiss driving licence. You cannot renew ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(thirdLink, 3)} > https://www.autoeurope.com › Travel Tips › IDP FAQ </div>
          <div className='blue-link' onClick={() => handleClick(thirdLink, 3)} > Do I Need an International Driving Permit in Switzerland? </div>
          <p className='text'>
            Applying for an international drivers permit for your trip to Switzerland is simple. Anyone who is 18 years of age with a valid driver's license is eligible ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(fourthLink, 4)} > https://www.iamexpat.ch › expat-info › driving-licence </div>
          <div className='blue-link' onClick={() => handleClick(fourthLink, 4)} > Driving licence in Switzerland </div>
          <p className='text'>
            The process of exchanging a licence depends on the validity of your old licence and where it was issued. Foreign driver's licences in Switzerland. For all ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(fifthLink, 5)} > https://www.englishforum.ch › 209... </div>
          <div className='blue-link' onClick={() => handleClick(fifthLink, 5)} > US Driver's License conversion to Swiss - English Forum ... </div>
          <p className='text'>
            31.05.2014 · 19 Posts<br></br>
            Fill in the form for the swiss license, send passport photos and your old license, and the eye test paper, and then about 2 weeks later, you get ...
          </p>
        </div>
        <div className='search-result'>
          <div className='grey-link' onClick={() => handleClick(sixthLink, 6)} > https://www.frommers.com › gettin... </div>
          <div className='blue-link' onClick={() => handleClick(sixthLink, 6)} > Getting Around in Switzerland | Frommer's </div>
          <p className='text'>
          Driver's License—Any adult who's at least 18 years old and holding a valid national driver's license can drive in Switzerland, as long as the permitted ...
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