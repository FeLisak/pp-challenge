import React from "react";

import "./../../style/index.css";

import Header from "./../../components/header";
import { ViewCollaboratorPage } from "./view-collaborator-page";

export default function App() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <ViewCollaboratorPage />
      </React.StrictMode>
    </div>
  );
}
