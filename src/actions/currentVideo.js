var changeVideo = (video) => {
  const CHANGE_VIDEO = 'CHANGE_VIDEO';

  return (
    {
      type: 'CHANGE_VIDEO',
      video: video
    }
  );
};

export default changeVideo;
