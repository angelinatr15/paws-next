import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className="justify-end flex">
      <Link href="/">
        <button className={styles.pageBtn}>Adopt</button>
      </Link>
      <Link href="/contact">
        <button className={styles.pageBtn}>Contact</button>
      </Link>
      <Link href="/education">
        <button className={styles.pageBtn}>Education</button>
      </Link>
      <Link href="/servicesResources">
        <button className={styles.pageBtn}>Services & Resources</button>
      </Link>
      <Link href="/volunteer">
        <button className={styles.pageBtn}>Volunteer</button>
      </Link>
    </div>
  );
};

export default NavBar;
