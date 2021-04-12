import React, { useState, useContext, useEffect } from "react";
import { Input } from "antd";
import { FormContext } from "../formContext";
import { debounce, deepClone } from "../../utils/index";
const { TextArea } = Input;
function InputEdit({ title, content, order, type }) {
  const { addEditData } = useContext(FormContext);
  const [inputData, setInputData] = useState(deepClone(content));

  useEffect(() => {
    addEditData({ title, content: inputData, type }, true, order);
  }, [inputData]);

  const editData = (event) => {
    debounce(() => setInputData(event.target.value))();
  };

  return (
    <div className="input-edit-warpper clearfix">
      <section>
        <TextArea
          rows={4}
          readOnly
        ></TextArea>
      </section>
    </div>
  );
}

export default InputEdit;
