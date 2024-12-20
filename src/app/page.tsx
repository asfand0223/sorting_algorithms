import React from "react";
import Data from "@/components/data";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Data />
    </div>
  );
};

export default Home;
