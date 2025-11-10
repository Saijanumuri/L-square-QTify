import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../assets/hero.svg";

function Hero() {
  return (
    <div className={styles.hero}>
     
      
        <img src={heroImage}  alt="headphones" />
      
    </div>
  );
}

export default Hero;
