import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Netifly env var

const fs = require("fs");
const path = `./.env`;
const vars = `
 ENV_VAR_1=${process.env.ENV_VAR_1_NETLIFY}\n
 ENV_VAR_2=${process.env.ENV_VAR_2_NETLIFY}
`;
fs.writeFileSync(path, vars);

//

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
