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

  handleDeleteUser = (user) => {
    console.log("CHeck handleDeleteUser :", user);
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log("Check props :", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
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
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
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

const mapDispatch = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatch)(Color(Home));
