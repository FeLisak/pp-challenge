"use client";

import * as Icons from "@pedidopago/react-icons";
import { SetStateAction, useState } from "react";

import "./../../style/view-colaborator-page.css";

const selectableGender = [
  { label: "Masculino", value: 1 },
  { label: "Feminino", value: 2 },
  { label: "Não Binario", value: 3 },
  { label: "Outro", value: 4 },
  { label: "Prefiro não responder", value: 5 },
];

const selectableDDI = [
  { label: "+1", value: 1 },
  { label: "+44", value: 2 },
  { label: "+55", value: 3 },
];

export function ViewCollaboratorPage() {
  const [selectedGender, setSelectedGender] = useState("Sexo");

  function handleSelectGender(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSelectedGender(event.target.value);
  }

  const [selectedDDI, setSelectedDDI] = useState("DDI");

  function handleSelectDDI(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSelectedDDI(event.target.value);
  }

  return (
    <div>
      <div className="tab-title">
        <div className="icon-box">
          <Icons.ArrowLeft />
        </div>
        <h1>Meus dados</h1>
      </div>
      <div className="container">
        <div className="colaborator-info-box">
          <form className="colaborator-info gray">
            <input type="text" placeholder="CPF" required />
          </form>
          <form className="colaborator-info name">
            <input type="text" required />
            <span>Nome Completo</span>
          </form>
          <form className="colaborator-info gender">
            <div className="select-icon">
              <span>
                <Icons.ChevronDown size={24} />
              </span>
            </div>
            <select className="gender-selection" onChange={handleSelectGender}>
              {selectableGender.map((option) => (
                <option value={option.label} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span>Sexo</span>
          </form>
          <form className="colaborator-info phone">
            <select className="ddi-selection" onChange={handleSelectDDI}>
              {selectableDDI.map((option) => (
                <option value={option.label} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="select-icon">
              <span>
                <Icons.ChevronDown size={24} />
              </span>
            </div>
            <span>DDI</span>
            <div className="phone-number">
              <input type="text" required />
              <span>Telefone</span>
            </div>
          </form>
          <form className="colaborator-info">
            <input type="text" required />
            <span>E-Mail</span>
          </form>
          <div className="image">
            <img src="https://s3-alpha-sig.figma.com/img/2712/b04c/7acbb0eeb38587f7a2f8fc926bd40845?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lq0JKQ8BV711WAXeZVy404hHFMQwNAtzL05~IzQ7KWaeGC2ni-2SeTmD9~lv3nMycc6hDPPZc9l8wXRRxNcQVDi47ywdqCTzOB5UEfNcDvtBz6aSDz7zRY5fG49yw~wmkv~l2OKDfVduuUF4qI~GKMRo24hPOBwoQocWkMGd~ANSvlH9znH4JBu62vMIF29H580-3nzBgFVABmJjenPBiNhEfRTPGQgVrp-QYY1STuh~6alQxnG0Mysw~XNl4I-627WUu3vOxZ98pmbZlty5QTGy54zl6RFa2KDFsqnPTMeQXrgl8cXV5a47MYqFfILStIotPcc12XP1imgKYinhMw__" />
            <div className="icon-circle">
              <Icons.UserPlus size={18} color="#587169" />
            </div>
            <div className="text">
              <h1>Foto do colaborador</h1>
              <p>(Formato .jpg ou .png tamanho máximo 2mb)</p>
            </div>
          </div>
        </div>
        <div className="position-info-box">
          <div className="box">
            <form className="position-info">
              <input type="text" placeholder="Departamento" required />
            </form>
            <form className="position-info">
              <input type="text" placeholder="Cargo" required />
            </form>
          </div>
          <div className="box">
            <form className="position-info">
              <input type="text" placeholder="Unidade" required />
            </form>
            <form className="position-info">
              <input type="text" placeholder="Status" required />
            </form>
          </div>
        </div>
        <div className="tab-footer">
          <div className="buttons">
            <div className="cancel">
              <a>Cancelar</a>
            </div>
            <div className="save">
              <a>Salvar meus dados</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
