import Redux from 'redux';

var videoListReducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos ? action.videos : [];
  default:
    return [];
  }
};

export default videoListReducer;
