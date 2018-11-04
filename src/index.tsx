import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const DecoratedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <DecoratedApp />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
