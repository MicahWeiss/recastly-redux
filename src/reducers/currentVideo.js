import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;
  }
};

export default currentVideoReducer;

/*
  action from currentVideo.js:
     {
      type: CHANGE_VIDEO,
      video: video
    }
  */
