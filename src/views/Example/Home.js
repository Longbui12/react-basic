import React from "react";
//import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import avatar from "../../assets/images/194179727_4349960718453304_3003521712708585950_n.jpg";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};
// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));
