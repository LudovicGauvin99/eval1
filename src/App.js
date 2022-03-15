import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./composants/Form";
import { Article } from "./composants/Article";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Form />
        <Article />
      </main>
    </div>
  );
}

export default App;
