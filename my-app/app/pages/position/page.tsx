import React from "react";

import "./../../style/index.css";

import Header from "./../../components/header";
import { EditPositionPage } from "./edit-position-page";

export default function App() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <EditPositionPage />
      </React.StrictMode>
    </div>
  );
}
