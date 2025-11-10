import React from "react";
import leftArrow from "../assets/left-arrow.svg";

export default function LeftArrow() {
  return (
    <img
      src={leftArrow}
      alt="Left"
      style={{ width: 40, height: 40, cursor: "pointer" }}
    />
  );
}
