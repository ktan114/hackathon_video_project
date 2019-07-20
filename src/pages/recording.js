import React from 'react';
import {Link} from 'gatsby';

const Recording = () => {
    return(
        <React.Fragment>
            <p>Hello from Recording page</p>
            <Link to="/">Home</Link><br/>
            <Link to="/videos">Videos</Link>
        
        </React.Fragment>
    )
}

export default Recording;