import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { todos } from './data/todos'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App todos={ todos } />
  </StrictMode>
);
