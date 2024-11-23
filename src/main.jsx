import React from "react";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // Hydrate server-rendered content
  hydrateRoot(
    rootElement,
    <StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>
  );
} else {
  // Render client-side
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>
  );
}
