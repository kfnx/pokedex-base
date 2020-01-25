import React from "react";
import style from "./style.css";

export default function({ children }) {
  return <div className={style.intro}>{children}</div>;
}
