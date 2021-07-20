import "./App.css";
import { CssBaseline } from "@material-ui/core";
import Landing from "./views/Landing" 
import Record from "./components/Record";

function App() {
  return (
    <div className="App">
      {/* <CssBaseline />
      <Landing /> */}
      <Record />
    </div>
  );
}

export default App;
