import React from "react";
import axios from "axios";
import "./ListUer.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    // Cach 1:
    // axios.get("https://reqres.in/api/users?page=1").then((res) => {
    //   //   console.log("Check res :", res);
    //   //   console.log("Check res :", res.data);
    //   console.log("Check res :", res.data.data);
    // });

    // Cach 2 :
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
    // console.log("Check Res :", res.data.data);
  }

  handleViewDetailUser = (user) => {
    console.log("Check User : ", this.props);
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
