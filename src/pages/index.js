import React from "react";
import '../index.css';

const Index = () => {
  return(
    <React.Fragment>
      <h1>Welcome to Video Slack!</h1>
      <p>Watercoolering for the 21st century workspace!</p>

      <form>
        Team: <input type="text" placeholder="Team Name"/>
        User: <input type="text" placeholder="User Name"/>
        Password: <input type="password" placeholder="Password"/>
        <input type="submit"/>
      </form>
    </React.Fragment>
  )
}
export default Index;
