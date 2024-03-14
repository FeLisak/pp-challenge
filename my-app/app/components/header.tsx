"use client";

import * as Icons from "@pedidopago/react-icons";
import { css } from "@emotion/css";

export default function Header() {
  return (
    <header>
      <div
        className={css`
          display: flex;
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #eaefed;
          background-color: #fff;
        `}
      >
        <div
          className={css`
            position: relative;
            display: flex;
            width: 100px;
            height: auto;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #eaefed;
          `}
        >
          <Icons.PpColored
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
            size={35}
          />
        </div>
        <div
          className={css`
            position: relative;
            display: flex;
            width: 100px;
            height: auto;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            margin-right: 0;
            cursor: pointer;
            border-left: 1px solid #eaefed;
          `}
        >
          <Icons.Moon size={20} color="#587169" />
        </div>
        <div
          className={css`
            display: flex;
            width: 200px;
            align-items: center;
            justify-content: center;
            margin-right: 0;
            border-left: 1px solid #eaefed;
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
              margin-right: 10px;
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
          <div className="info">
            <p
              className={css`
                position: relative;
                font-size: 14px;
                line-height: 14px;
                font-weight: 600;
                color: #34423d;
              `}
            >
              Luis Zlochevsky
            </p>
            <p
              className={css`
                position: relative;
                display: flex;
                font-size: 12px;
                line-height: 14.4px;
                font-weight: 400;
                color: #587169;
              `}
            >
              meus dados
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
