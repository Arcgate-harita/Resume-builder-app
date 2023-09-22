import React from "react";

import styles from "./InputField.css";

function InputField({ label, value, handleInputChange, ...props }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    handleInputChange(newValue);
  };

  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" value={value} onChange={handleChange} {...props} />
    </div>
  );
}

export default InputField;