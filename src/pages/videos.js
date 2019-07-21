import React from 'react';
import {Link} from 'gatsby';
import Video from '../components/video';
import "../videos.css";


const Videos = () => {
    return(
        // <React.Fragment>

        //     <p>Hello from videos</p>
        //     <Video/>
        //     <Link to='/'>Home</Link><br/>
        //     <Link to='/recording'>Record Video</Link>

        // </React.Fragment>
        <div className = "video-container">
            <p>Videos</p>
            <table>
            <tr>
                <td> <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
                <td class="vert"> <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
                <td> <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
            </tr>
            <tr>
            <td class="hori">
                <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
            <td class="vert hori"> <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
            <td class="hori"> <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
            </tr>
            <tr>
            <td> <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
            <td class="vert"> <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
             <td><iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe></td>
            </tr>
            </table>
            <Video/>
            <div className = "video-links">
                <Link to='/'>Home</Link><br/>
                <Link to='/recording'>Record Video</Link>
            </div>

            
        </div>
        
        
    )
}

export default Videos;