import React from "react";
import Data from "@/components/Data";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Data />
    </div>
  );
};

export default Home;
