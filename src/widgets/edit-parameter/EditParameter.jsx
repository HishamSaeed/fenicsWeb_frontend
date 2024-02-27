import React, { useState } from 'react';

const EditParameter = ({ onChange, label, type = 'text',  }) => {

  const [Value, setValue] = useState("")

  const handleValueChange = (value) => {
    setValue(value);
    onChange && onChange(value);
  }

  return (
    <div>
      <label htmlFor="editParameterLabel">{label}</label>
      <input
          type='type'
          id='editParameterLabel'
          value={Value}
          onChange={(e) => handleValueChange(e.target.value)}
      />
    </div>
  );
};

export default EditParameter