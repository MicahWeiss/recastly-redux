var changeVideoList = (videos) => {
  const CHANGE_VIDEO_LIST = 'CHANGE_VIDEO_LIST';

  return (
    {
      type: CHANGE_VIDEO_LIST,
      videos: videos
    }
  );
};

export default changeVideoList;
