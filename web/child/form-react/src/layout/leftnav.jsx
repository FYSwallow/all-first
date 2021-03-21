import React from "react";
import { leftNavConfig } from "../config/leftnavconfig";

function LeftNav({ addEditData }) {
  return (
    <ul className="template-nav-list clearfix">
      {leftNavConfig.map((item, index) => {
        return (
          <li
            className="template-nav-item"
            key={index}
            onClick={() => {
              addEditData(item.defaultProps);
            }}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

export default LeftNav;
