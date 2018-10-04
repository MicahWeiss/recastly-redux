import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {
  return () => {
    searchYouTube({YOUTUBE_API_KEY, q},(data) => {
      changeVideo(data[0]);
      changeVideoList(data);
    })
  }
}

export default handleVideoSearch;
