import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state) => { //gives data from store and turns it into props
    return {
        //needs current video
        video: state.currentVideo
    }
}

// NO ACTIONS HERE?????  
// const mapDispatchToProps = (dispatch) => { // getting functions to action names.  
//     return {  
//     }
// };

var VideoPlayerContainer = connect(
    mapStateToProps,
    //mapDispatchToProps
)(VideoPlayer)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


export default VideoPlayerContainer;
