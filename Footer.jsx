import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>copy right @{currYear}</p>
    </footer>
  );
}
export default Footer;
