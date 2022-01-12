import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
// import Login from "./pages/Login";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Home />
      </div>
    </React.Fragment>
  );
}

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>