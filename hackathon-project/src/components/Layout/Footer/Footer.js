import React from "react";
import Button from "../CustomButton/Button";

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <Button
          display="block" 
          border="none"
          color="rgb(200, 200, 200)"
          height = "100px"
          onClick={() => console.log("You clicked on the pink circle!")}
          radius = "5%"
          width = "250px"
          children = "Presentation"
          margin = "0 auto"
          fontSize = "x-large"
        />
      </footer>
    );
  }
}
export default Footer;