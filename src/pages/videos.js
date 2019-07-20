import React from 'react';
import {Link} from 'gatsby';


const Videos = () => {
    return(
        <React.Fragment>
            <p>Hello from videos</p>
            <Link to='/'>Home</Link><br/>
            <Link to='/recording'>Record Video</Link>
        </React.Fragment>
        
    )
}

export default Videos;