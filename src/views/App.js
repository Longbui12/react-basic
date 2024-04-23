import logo from "./logo.svg";
import "./App.scss";
import MyExample from "./Example/MyExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>

        <MyExample />
      </header>
    </div>
  );
}

export default App;
