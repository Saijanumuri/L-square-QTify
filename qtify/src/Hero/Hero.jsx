import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../assets/hero.svg"; 

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={heroImage}
          width={212}
          height={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
