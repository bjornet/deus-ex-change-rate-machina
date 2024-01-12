import { createRoot } from "react-dom/client";
import { App } from "./components/App";

const container = document.getElementById("app");

if (!container) {
  throw new Error("Couldn't find app container in the document");
}

const root = createRoot(container);
root.render(<App />);
