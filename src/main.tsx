import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DataProviderContainer from "./store/DataProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProviderContainer>
      <App />
    </DataProviderContainer>
  </StrictMode>,
);
