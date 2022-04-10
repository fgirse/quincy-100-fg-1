/* eslint-disable prettier/prettier */






import React, { useEffect } from "react";

function SetBgImg() {
 
  if (typeof document !== "undefined") {
    // browser code
     // The function below will change the background color
     // eslint-disable-next-line no-inner-declarations
     function SetBackgroundImage() {
      document.getElementById("Hero6").style.backgroundImage = "url('/Hero6.png')";
  
     }
      document.addEventListener("DOMContentLoaded",SetBackgroundImage());
    }
    return(
      <div></div>
    )
  }
  
  export default SetBgImg