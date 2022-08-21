import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { initialTodos } from './data/todos'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App initialTodos={ initialTodos } />
  </StrictMode>
);
