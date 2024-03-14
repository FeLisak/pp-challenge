"use client";

import { useEffect, useState } from "react";
import * as Icons from "@pedidopago/react-icons";
import { css } from "@emotion/css";

import "./../style/menu.css";
import "../pages/tabs";

interface colaboratorsProps {
  name: String;
  departament: String;
  access: String;
  unit: String;
  status: String;
}

export default function Colaborator({
  name,
  departament,
  access,
  unit,
  status,
}: colaboratorsProps) {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    let handler = () => {
      setOpenMenu(false);
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
        {status === "Ativo" ? (
          <div
            className={css`
              display: flex;
              padding: 16px;
              align-items: center;
              opacity: 1;
            `}
          >
            <div
              className={css`
                position: relative;
                display: flex;
                width: 196px;
                height: 100%;
                align-items: center;
              `}
            >
              <div
                className={css`
                  background: #bff5e3;
                  width: 32px;
                  height: 32px;
                  border-radius: 85px;
                  padding: 8px;
                  gap: 10px;
                  margin-right: 20px;
                `}
              >
                <p
                  className={css`
                    position: relative;
                    display: flex;
                    bottom: 1px;
                    left: 1px;
                    font-size: 14px;
                    font-weight: 400;
                  `}
                >
                  LZ
                </p>
              </div>
              <div
                className={css`
                  font-size: 12px;
                  font-weight: 600;
                  line-height: 16.8px;
                  color: #587169;
                `}
              >
                {name}
              </div>
            </div>
            <div
              className={css`
                position: relative;
                display: flex;
                width: 124px;
                height: 100%;
                align-items: center;
                color: #587169;
                margin-left: 1.5%;
              `}
            >
              {departament}
            </div>
            <div
              className={css`
                position: relative;
                display: flex;
                width: 156px;
                height: 100%;
                align-items: center;
                color: #587169;
              `}
            >
              {access}
            </div>
            <div
              className={css`
                position: relative;
                display: flex;
                width: 142px;
                height: 100%;
                align-items: center;
                color: #587169;
              `}
            >
              {unit}
            </div>
          </div>
        ) : (
          <div
            className={css`
              display: flex;
              padding: 16px;
              align-items: center;
              opacity: 0.5;
            `}
          >
            <div
              className={css`
                position: relative;
                display: flex;
                width: 196px;
                height: 100%;
                align-items: center;
              `}
            >
              <div
                className={css`
                  background: #bff5e3;
                  width: 32px;
                  height: 32px;
                  border-radius: 85px;
                  padding: 8px;
                  gap: 10px;
                  margin-right: 20px;
                `}
              >
                <p
                  className={css`
                    position: relative;
                    display: flex;
                    bottom: 1px;
                    left: 1px;
                    font-size: 14px;
                    font-weight: 400;
                  `}
                >
                  LZ
                </p>
              </div>
              <div
                className={css`
                  font-size: 12px;
                  font-weight: 600;
                  line-height: 16.8px;
                  color: #587169;
                `}
              >
                {name}
              </div>
            </div>
            <div
              className={css`
                position: relative;
                display: flex;
                width: 124px;
                height: 100%;
                align-items: center;
                color: #587169;
                margin-left: 1.5%;
              `}
            >
              {departament}
            </div>
            <div
              className={css`
                position: relative;
                display: flex;
                width: 156px;
                height: 100%;
                align-items: center;
                color: #587169;
              `}
            >
              {access}
            </div>
            <div
              className={css`
                position: relative;
                display: flex;
                width: 142px;
                height: 100%;
                align-items: center;
                color: #587169;
              `}
            >
              {unit}
            </div>
          </div>
        )}
        <div
          className={css`
            position: relative;
            display: flex;
            width: 166px;
            height: 100%;
            align-items: center;
            left: 3%;
          `}
        >
          {status === "Ativo" ? (
            <div
              className={css`
                position: relative;
                display: flex;
                width: 72px;
                height: 24px;
                border-radius: 80px;
                background: #b5f1dd;
                padding: 4px 8px 4px 8px;
                align-items: center;
                justify-content: center;
                gap: 4px;
                font-size: 14px;
                font-weight: 500;
                line-height: 16.24px;
                color: #587169;
              `}
            >
              {status}
            </div>
          ) : (
            <div
              className={css`
                position: relative;
                display: flex;
                width: 72px;
                height: 24px;
                border-radius: 80px;
                background: #eaefed;
                padding: 4px 8px 4px 8px;
                align-items: center;
                justify-content: center;
                gap: 4px;
                font-size: 14px;
                font-weight: 500;
                line-height: 16.24px;
                color: #587169;
              `}
            >
              {status}
            </div>
          )}
        </div>
        <div
          className={css`
            position: relative;
            display: flex;
            width: 24px;
            height: 24px;
            padding: 3px 0px 3px 0px;
            align-items: center;
            justify-content: right;
            cursor: pointer;
            z-index: 30;
          `}
        >
          <div
            className={css`
              position: relative;
              display: flex;
              background: none;
              color: none;
              border: none;
              cursor: pointer;
              z-index: 30;
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
                  <Icons.Eye size={24} />
                </div>
                <div className="text">
                  <a>Ver Colaborador</a>
                </div>
              </div>
              <div className="menu-option inactive">
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
