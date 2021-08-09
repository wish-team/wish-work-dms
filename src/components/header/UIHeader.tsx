import React from "react";
import "./UIHeader.css"

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
    <div className="navBarUiHeader">
      <div className="logoNavBar">
        <img src={logo} />
        <ul className="navBarItem">{navBarOptions}</ul>
      </div>
    </div>
  );
};
