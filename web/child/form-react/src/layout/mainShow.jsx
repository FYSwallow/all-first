import React, { useContext } from "react";
import { Input } from "antd";
import { componentEditMap } from "../config/formEditItem";
import { createComponent } from "./../components/createComponent";
import TitleEdit from "../components/edit/titleEdit";
import { FormContext } from "./../components/formContext";
import "./index.less";

function MainShow() {
  const {
    title,
    editData,
    editTitle,
  } = useContext(FormContext);
  return (
    <>
      <h2 className="question-title">
        {<Input
            type="text"
            size="large"
            className="question-title-input"
            value={title}
            onChange={(event) => editTitle(event.target.value)}
          />}
      </h2>
      <section className="question-content">
        {editData.map((item, index) => {
          return (
            <TitleEdit item={item} order={index} key={index}>
              {createComponent(componentEditMap[item.type], {
                ...item,
                order: index,
              })}
            </TitleEdit>
          );
        })}
      </section>
    </>
  );
}

export default MainShow;
