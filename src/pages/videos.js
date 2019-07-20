import React from 'react';
import {Link} from 'gatsby';
import Video from '../components/video';
import "../videos.css";


const Videos = () => {
    return(
        <div className = "video-container">
            <p>Videos</p>
            <table>
  <tr>
    <td></td>
    <td class="vert"></td>
    <td></td>
  </tr>
  <tr>
    <td class="hori"></td>
    <td class="vert hori"></td>
    <td class="hori"></td>
  </tr>
  <tr>
    <td></td>
    <td class="vert"></td>
    <td></td>
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