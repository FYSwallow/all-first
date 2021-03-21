import React, { useState, useContext, useEffect } from "react";
import { Input } from "antd";
import { FormContext } from "../formContext";
import { debounce, deepClone } from "../../utils/index";

const shapeList = {
  inputRadio: "radio",
  inputCheck: "check",
  inputSelect: "select",
};

function InputEdit({ title, content, order, type }) {
  const { addEditData } = useContext(FormContext);
  const [inputData, setInputData] = useState(deepClone(content));

  useEffect(() => {
    addEditData({ title, content: inputData, type }, true, order);
  }, [inputData]);

  const editData = (index, event, item) => {
    debounce(() => {
      setInputData((inputData) => {
        item.value = event.target.value;
        inputData.splice(index, 1, item);
        // inputData[index] = item
        return inputData;
      });
    })();
  };
  return (
    <ul className="input-edit-warpper clearfix">
      {inputData.map((item, index) => {
        return (
          <li key={index} className="input-edit-item">
            <label className={`label-${shapeList[type]}`}>
              <Input
                type="text"
                prefix={<span className={`${shapeList[type]}-shape`}></span>}
                defaultValue={item.value}
                onChange={(e) => editData(index, e, item)}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default InputEdit;
