import React from 'react';
import {Link} from 'gatsby';
import Video from '../components/video';


const Videos = () => {
    return(
        <React.Fragment>

            <p>Hello from videos</p>
            <Video/>
            <Link to='/'>Home</Link><br/>
            <Link to='/recording'>Record Video</Link>

        </React.Fragment>
        
    )
}

export default Videos;