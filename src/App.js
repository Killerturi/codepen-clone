import { useContext } from "react";
import "./App.css";
import CodeShow from "./Component/CodeShow";
import Result from "./Component/Result";
import DataContext from "./Context/DataContext";

function App() {
  const { html, css, js } = useContext(DataContext);

  return (
    <div className="App">
      <header
        className="App-header"
        style={html || css || js ? { display: "none" } : null}
      >
        <h1>CodePen-Clone</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdD41hYT8iyPDtD-NxKoU41IrItNAXmBHCKHER0c4&s"
          alt="logo"
        />
      </header>
      <CodeShow />
      <Result />
    </div>
  );
}

export default App;
