import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homeWork" },
      { id: "todo2", title: "Making todo" },
      { id: "todo3", title: "fixing bug & deloy" },
    ],
  };

  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodos;
    // currentListTodo.push(todo);
    // this.setState({
    //   listTodos: currentListTodo,
    // }); // (cach 1)
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    }); // (cach 2)
    toast.success("You are create success 👌👌!");
  };
  render() {
    // let listTodos = this.state.listTodos (cach1)
    let { listTodos } = this.state; // (cach2)
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}{" "}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
