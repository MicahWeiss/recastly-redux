import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {
  return () => {
    searchYouTube({YOUTUBE_API_KEY, q},(data) => {
      changeVideo(data);
      changeVideoList(data);
    })
  }
}

// var handleVideoSearch = (q) => {
//   const SEND_QUERY = 'SEND_QUERY';
  
  

//   let options = {
//     key: YOUTUBE_API_KEY,
//     query: q
//   }
//   return searchYouTube(options, callback);
// };

// //from searchYouTube: callback(items)
// var getSearchResults = (videos) => {
//   const GET_VIDEOS_ARRAY = 'GET_VIDEOS_ARRAY';

//   return {
//     type: GET_VIDEOS_ARRAY,
//     videos: videos
//   }
// }

export default handleVideoSearch;
