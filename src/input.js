import React, { useState } from "react";
import "./InputForm.css"

const InputForm = () => {
  const [value, setValue] = useState("");

  const parse = (e) => {
    const pos = e.target.selectionStart;
    let v = parseFloat(e.target.value);
    if (isNaN(v)) v = 0;

    e.target.value = v.toFixed(2);
    e.target.selectionStart = e.target.selectionEnd = pos;
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="0.00"
        type="text"
        value={value}
        onChange={parse}
        className="input-field"
      />
    </div>
  );
};

export default InputForm;
