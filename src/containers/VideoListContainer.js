import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js'; 

const mapStateToProps = (state) => { //gives data from store and turns it into props
    return {
        //needs array of videos
        videos: state.videoList
    }
}

const mapDispatchToProps = (dispatch) => { // getting functions to action names   
    return {
        handleVideoListEntryTitleClick : () => dispatch(changeVideo())
    }
};

var VideoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
