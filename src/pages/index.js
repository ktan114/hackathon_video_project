import React from "react";
import './mod.css';
import {Link} from 'gatsby';

const Index = () => {
  return(
    
    <React.Fragment >
  <div class="wrapper">
      <center>  
       
       
        <h1 >Welcome to Video Slack!</h1>
 

      <p>Watercoolering for the 21st century workspace!</p>


      <Link  to="/">Home</Link><br/>
            <Link to="/videos">Videos</Link>
            <div class="logintext">
      <form>
        <b>Team: </b> <br/>
        <input for="uname" type="text" placeholder="Team Name"/> <br/>
        <b>User: </b> <br/>
       <input type="text" placeholder="User Name"/> <br/>
       <b>Password: </b> <br/>
        <input type="password" placeholder="Password"/> <br/>
       
        <input type="submit"/>
      </form>

      </div>


      </center>
      </div>
    </React.Fragment>
  )
}


export default Index;
