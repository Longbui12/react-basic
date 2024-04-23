import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyExample extends React.Component {
  state = {
    arrJobs: [
      { id: "abcdew123", title: "Developer", salary: "700" },
      { id: "abcdew456", title: "Tester", salary: "400" },
      { id: "abcdew789", title: "Project manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job form parent : ", job);
    // cach 1 :
    // let currentJob = this.state.arrJobs;
    // currentJob.push(job);
    // this.setState({
    //   arrJobs: currentJob,
    // });
    // Cach 2 :
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  componentDidMount() {
    console.log("check componentDidMount !🤬🤬");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "run componentDidUpdate",
      "prev State :",
      prevState,
      "current state :",
      this.state
    );
  }
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyExample;
