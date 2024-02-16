import React from "react";
import Styles from "@/styles/components/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={Styles.nabarContainer}>
      <div className={Styles.title}>Team</div>
      <form className={Styles.form}>
        <input className={Styles.search} name="search" placeholder="search" />
      </form>
    </div>
  );
};

export default Navbar;
