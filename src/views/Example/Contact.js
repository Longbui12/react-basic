import React from "react";
import Color from "../HOC/Color";
class Contact extends React.Component {
  render() {
    return <h1>Please, Contact Me ! 🙉🙉</h1>;
  }
}

// export default Contact;
export default Color(Contact);
