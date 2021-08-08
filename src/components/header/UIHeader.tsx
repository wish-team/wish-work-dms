import React from "react";
import styles from "./UIHeader.module.css"

interface Item {
    label: string,
    href: string
} 

interface Props {
  logo: string;
  items: Array<Item>;
}

export const UIHeader = ({ logo, items }: Props) => {
  let navBarOptions = items.map((item) => {
    return <li><a href={item.href}>{item.label}</a></li>;
  });

  return (
    <div className={styles["nav-bar-ui-header"]}>
      <div className={styles["logo-nav-bar"]}>
        <img src={logo} />
        <ul className={styles["nav-bar-item"]}>{navBarOptions}</ul>
      </div>
    </div>
  );
};
