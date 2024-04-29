import React from "react";
//import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import avatar from "../../assets/images/397468199_6960756350686151_1708441086323802462_n.jpg";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  render() {
    console.log("Check props :", this.props);
    return (
      <>
        <div>Hello form Home Page</div>
        <div>
          <img
            alt="AVATAR"
            src={avatar}
            style={{ width: "500px", height: "500px", marginTop: "20px" }}
          />
        </div>
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
