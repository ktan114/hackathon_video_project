import React from 'react';
import {Link} from 'gatsby';
import Record from '../components/recordingView';
import StyledRecord from '../styledComponents/StyledRecord';

const Recording = () => {
    return(
        <StyledRecord>
            <h1>Record your video!</h1>
            <Record/>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/videos">Videos</Link>
            </div>
        
        </StyledRecord>
    )
}

export default Recording;