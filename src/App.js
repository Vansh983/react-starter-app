import logo from "./logo.svg";
import shiftkey from "./shiftkey-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <img src={shiftkey} alt="" />
          <img src={logo} alt="" />
        </div>
        <h1>
          Say Hello to <span style={{ color: "#61dafb" }}>React</span>
        </h1>
        <p style={{ fontSize: 14 }}>Presented by Vansh Sood</p>
      </header>
    </div>
  );
}

export default App;
