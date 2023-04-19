import SideBar from "../../components/SideBar/SideBar";

import styles from "./Main.module.scss";
import Dash from "../../components/Dash/Dash";
import Header from "../../components/Header/Header";
const Main = () => {
  return (
    <div className={styles.Main}>
      <Header />
      <Dash />
    </div>
  );
};

export default Main;
