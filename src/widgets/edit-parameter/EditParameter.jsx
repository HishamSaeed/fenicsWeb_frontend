import React, { useEffect, useState } from 'react';
import { fetchData, sendData, subscribe } from '../../services/ApiService';

const EditParameter = ({ endpoint, label, type = 'text', event_type }) => {

  const [Value, setValue] = useState("")

  useEffect(() => {
    fetchData(endpoint).then(data => {
      setValue(data['value']);
    })
    subscribe(event_type, (data) => {
      setValue(data);
    })
  })

  const handleValueChange = (value) => {
    setValue(value);
    sendData(endpoint, value);
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

export default EditParameter;
