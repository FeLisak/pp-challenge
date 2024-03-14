import React from "react";
import * as Icons from "@pedidopago/react-icons";

import "./style/index.css";

import Header from "./components/header";
import { Tabs } from "./pages/tabs";
import { EditPositionPage } from "./pages/position/edit-position-page";
import { ViewCollaboratorPage } from "./pages/collaborator/view-collaborator-page";

export default function App() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <Tabs />
      </React.StrictMode>
    </div>
  );
}
