import React from "react";


const Index = () => {
  return(
    <React.Fragment>
      
      <center>
      
      <h1>Welcome to Video Slack!</h1>
      <p>Watercoolering for the 21st century workspace!</p>

      <form>
        Team: <input type="text" placeholder="Team Name"/> <br/>
       User: <input type="text" placeholder="User Name"/> <br/>
        Password: <input type="password" placeholder="Password"/> <br/>
        <input type="submit"/>
      </form>

      </center>

    </React.Fragment>
  )
}


export default Index;
