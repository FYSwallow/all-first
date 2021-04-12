import React, { useState, useContext, useEffect } from "react";
import { Input } from "antd";
import { FormContext } from "../formContext";

function TitleEdit({ item, order, children }) {
  const { addEditData, setActiveIndex } = useContext(FormContext);
  const [itemTitle, setItemTitle] = useState(item.title);

  useEffect(() => {
    addEditData({ ...item, title: itemTitle }, true, order);
  }, [itemTitle]);

  return (
    <div className="question-item" onClick={() => setActiveIndex(order)}>
      <h3 className="question-item-title">
        <span>{order + 1}、</span>
        <Input
          type="text"
          className="edit-title-input"
          defaultValue={itemTitle}
          onChange={(event) => {
            setItemTitle(event.target.value);
          }}
        />
      </h3>
      {children}
    </div>
  );
}

export default TitleEdit;
