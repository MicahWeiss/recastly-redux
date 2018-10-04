import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = (state) => {
    return {
        currentVideo: changeVideo(state.videos)
    }
}

const handleVideoListEntryTitleClick = () => {
    // console.log('dispatching cV', dispatch(changeVideo));
    // return {
    //     dispatch(changeVideo)
    // }
}



var VideoListContainer = connect(
    mapStateToProps,
    handleVideoListEntryTitleClick
)(VideoList)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
