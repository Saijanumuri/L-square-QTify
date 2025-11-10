import React from "react";
import rightArrow from "../assets/right-arrow.svg";

export default function RightArrow() {
  return (
    <img
      src={rightArrow}
      alt="Right"
      style={{ width: 40, height: 40, cursor: "pointer" }}
    />
  );
}
