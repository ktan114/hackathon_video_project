import React from 'react';
import {Link} from 'gatsby';


const Videos = () => {
    return(
        <React.Fragment>
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">League Dropdown</a>
    <div class="dropdown-content">
      <a href="#">Little League</a>
      <a href="#">NCAA</a>
      <a href="#">Minor League </a>
    </div>
  </li>
</ul>
            <p>Hello from videos</p>
            <Link to='/'>Home</Link><br/>
            <Link to='/recording'>Record Video</Link>

        </React.Fragment>
        
    )
}

export default Videos;