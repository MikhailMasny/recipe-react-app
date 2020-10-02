import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header header__top-indent">
        <h1 className="header__title">
          Recipe finder{" "}
          <span role="img" aria-label="salad">
            🥗
          </span>
        </h1>
      </div>
    </div>
  );
}
