import React from 'react';
import {Link} from 'gatsby';
import Record from '../components/recordingView'

const Recording = () => {
    return(
        <React.Fragment>
            <p>Hello from Recording page</p>
            <Record/>
            <Link to="/">Home</Link><br/>
            <Link to="/videos">Videos</Link>
        
        </React.Fragment>
    )
}

export default Recording;