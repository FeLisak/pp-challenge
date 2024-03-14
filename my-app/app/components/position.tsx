"use client";

import { useEffect, useState } from "react";
import * as Icons from "@pedidopago/react-icons";
import { css } from "@emotion/css";

import "./../style/menu.css";
import "../pages/tabs";

interface positionsProps {
  position: String;
  positionDepartament: String;
  numberOfColaborators: number;
}

export default function Position({
  position,
  positionDepartament,
  numberOfColaborators,
}: positionsProps) {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    let handler = () => {
      setOpenMenu(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [openEditPositionPage, setOpenEditPositionPage] = useState(false);

  useEffect(() => {
    let handler = () => {
      setOpenEditPositionPage(true);
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        height: 69px;
        border-bottom: 1px solid #eaefed;
        justify-content: center;
        font-size: 12px;
        font-weight: 400;
        line-height: 16.8px;
        z-index: 2;
      `}
    >
      <div
        className={css`
          display: flex;
          width: 100%;
          padding: 16px;
          align-items: center;
        `}
      >
        <div
          className={css`
            position: relative;
            display: flex;
            width: 200px;
            height: 100%;
            align-items: center;
            margin-left: 2.5%;
            color: #587169;
          `}
        >
          {position}
        </div>
        <div
          className={css`
            position: relative;
            display: flex;
            width: 196px;
            height: 100%;
            align-items: center;
            color: #587169;
          `}
        >
          {positionDepartament}
        </div>
        <div
          className={css`
            position: relative;
            display: flex;
            width: 385px;
            height: 100%;
            align-items: center;
            color: #587169;
          `}
        >
          {numberOfColaborators}
        </div>
        <div
          className={css`
            position: relative;
            display: flex;
            width: 24px;
            height: 100%;
            padding: 3px 0px 3px 0px;
            align-items: center;
            justify-content: right;
            cursor: pointer;
            z-index: 30;
          `}
        >
          <div
            className={css`
              background: none;
              color: none;
              border: none;
              cursor: pointer;
            `}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Icons.MoreVertical size={24} color="#587169" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div className={`menu ${openMenu ? "active" : "inactive"}`}>
              <div className="menu-option">
                <div className="icon">
                  <Icons.Edit size={24} />
                </div>
                <div className="text">
                  <a>Editar</a>
                </div>
              </div>
              <div className="menu-option">
                <div className="icon">
                  <Icons.Duplicate size={24} />
                </div>
                <div className="text">
                  <a>Duplicar</a>
                </div>
              </div>
              <div className="menu-option">
                <div className="icon">
                  <Icons.Trash size={24} />
                </div>
                <div className="text">
                  <a>Excluir</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
