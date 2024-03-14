"use client";

import { useState, SetStateAction } from "react";
import * as Icons from "@pedidopago/react-icons";
import * as API from "@tanstack/react-query";

import Colaborator from "../components/collaborator";
import Position from "../components/position";
import "./../style/tabs.css";

const showingColaborators = [
  { label: "10", value: 1 },
  { label: "25", value: 2 },
  { label: "50", value: 3 },
  { label: "100", value: 4 },
];

export function Tabs() {
  const [selectedNumberOfColaborators, setSelectedNumberOfColaborators] =
    useState("10");

  function handleSelectNumber(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSelectedNumberOfColaborators(event.target.value);
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: SetStateAction<number>) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className={toggleState === 1 ? "tab-title active-tab" : "tab-title"}>
        <h1>Colaboradores</h1>
      </div>
      <div className={toggleState === 2 ? "tab-title active-tab" : "tab-title"}>
        <h1>Organização</h1>
      </div>
      <div className="container">
        <div>
          <div className="tabs-selection">
            <div
              className={
                toggleState === 1
                  ? "tabs tab-selected"
                  : "tabs tab-not-selected"
              }
              onClick={() => toggleTab(1)}
            >
              <a>Colaboradores</a>
            </div>
            <div
              className={
                toggleState === 2
                  ? "tabs tab-selected"
                  : "tabs tab-not-selected"
              }
              onClick={() => toggleTab(2)}
            >
              <a>Cargos</a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className={
                toggleState === 1
                  ? "tab-content active-tab"
                  : "tab-content not-active-tab"
              }
            >
              <form className="search">
                <input type="text" required />
                <div className="search-icon">
                  <Icons.Search size={24} />
                </div>
                <span>Pesquise por nome ou cpf</span>
              </form>
              <div className="table-title">
                <a>Listagem de colaboradores</a>
              </div>
              <div className="table">
                <div className="table-objects">
                  <div className="complete-name">Nome Completo</div>
                  <div className="departament">Departamento</div>
                  <div className="access-level">Nível de Acesso</div>
                  <div className="unit">Unidade</div>
                  <div className="status">Status</div>
                </div>
                <div className="colaborators">
                  <Colaborator
                    key={1}
                    name="João Zlochevsky"
                    departament="Administrativo"
                    access="Moderador"
                    unit="Quartel General"
                    status="Ativo"
                  />
                  <Colaborator
                    key={2}
                    name="João Zlochevsky"
                    departament="Administrativo"
                    access="Moderador"
                    unit="Quartel General"
                    status="Inativo"
                  />
                  <Colaborator
                    key={3}
                    name="Luis Zlochevsky"
                    departament="Administrativo"
                    access="Moderador"
                    unit="Quartel General"
                    status="Ativo"
                  />
                  <Colaborator
                    key={4}
                    name="João Zlochevsky"
                    departament="Administrativo"
                    access="Moderador"
                    unit="Quartel General"
                    status="Ativo"
                  />
                  <Colaborator
                    key={5}
                    name="João Zlochevsky"
                    departament="Administrativo"
                    access="Moderador"
                    unit="Quartel General"
                    status="Inativo"
                  />
                  <Colaborator
                    key={6}
                    name="Luis Zlochevsky"
                    departament="Administrativo"
                    access="Moderador"
                    unit="Quartel General"
                    status="Ativo"
                  />
                </div>
              </div>
              <div className="tab-footer">
                <div className="number-of-registers">
                  <div className="text">
                    <a>
                      Mostrando {selectedNumberOfColaborators} de 50 registros
                    </a>
                  </div>
                  <form className="number-selection">
                    <div className="select-icon">
                      <span>
                        <Icons.ChevronDown size={24} />
                      </span>
                    </div>
                    <select onChange={handleSelectNumber}>
                      {showingColaborators.map((number) => (
                        <option value={number.label} key={number.value}>
                          {number.label}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div className="pagination">
                  <div className="previous inactive">
                    <Icons.ChevronLeft size={24} />
                  </div>
                  <div className="page-number">1 de 10</div>
                  <div className="next">
                    <Icons.ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={
                toggleState === 2
                  ? "tab-content active-tab"
                  : "tab-content not-active-tab"
              }
            >
              <form className="search">
                <input type="text" required />
                <div className="search-icon">
                  <Icons.Search size={24} />
                </div>
                <span>Pesquise por cargos</span>
              </form>
              <div className="table-title">
                <a>Listagem de cargos</a>
              </div>
              <div className="table">
                <div className="table-objects">
                  <div className="position">Cargo</div>
                  <div className="position-departament">Departamento</div>
                  <div className="number-of-colaborators">Colaboradores</div>
                </div>
                <div className="colaborators">
                  <Position
                    key={4}
                    position="Analista"
                    positionDepartament="SAC"
                    numberOfColaborators={0}
                  />
                  <Position
                    key={5}
                    position="Analista"
                    positionDepartament="Eventos"
                    numberOfColaborators={0}
                  />
                  <Position
                    key={6}
                    position="Analista"
                    positionDepartament="Produtivo"
                    numberOfColaborators={0}
                  />
                </div>
              </div>
              <div className="tab-footer">
                <div className="number-of-registers"></div>
                <div className="pagination">
                  <div className="previous inactive">
                    <Icons.ChevronLeft size={24} />
                  </div>
                  <div className="page-number">1 de 10</div>
                  <div className="next">
                    <Icons.ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
