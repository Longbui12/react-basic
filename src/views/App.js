import logo from "./logo.svg";
import "./App.scss";
import MyExample from "./Example/MyExample";
import ListTodo from "./Todos/ListTodo.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav.js";
import Home from "./Example/Home.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./Example/Contact.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <MyExample />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
