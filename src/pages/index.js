import React from "react";
import {Link} from 'gatsby';
import './mod.css';



const Index = () => {
  return(
    
    <React.Fragment >
  <div class="wrapper">
      <center>  
        <h1>Welcome to Video Slack!</h1>
      <p>Watercoolering for the 21st century workspace!</p>
</center>

      <Link  to="/">Home</Link><br/>
            <Link to="/videos">Videos</Link>
            <div class="logintext">
      <form>
        <b>Team: </b>
        <input for="uname" type="text" placeholder="Team Name"/> <br/>
        <b>User: </b>
       <input type="text" placeholder="User Name"/> <br/>
       <b>Password: </b>
        <input type="password" placeholder="Password"/> <br/>
       
        <input type="submit"/>
      </form>

      </div>


      
      </div>
    </React.Fragment>
  )
}


export default Index;
