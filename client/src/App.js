import { CssBaseline } from "@material-ui/core";

import Main from "./views/Main";
import Landing from "./views/Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <Landing /> */}
      <Main />
    </div>
  );
}

export default App;
