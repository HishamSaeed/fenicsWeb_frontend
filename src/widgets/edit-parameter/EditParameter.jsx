import React, { useEffect, useState }  from 'react';
import { InputNumber, Select, Space, Typography } from 'antd'

const { Option } = Select;

const EditParameter = ({ param$, onValueChanged, label = '' }) => {

    const [value, setValue] = useState('')
    const [units, setUnits] = useState([])

    useEffect(() => {
        const sub = param$.subscribe(param => {
            setValue(param?.value)
            if ( param?.units )
                setUnits(param?.units)
        })

        return () => {
            sub.unsubscribe();
        }
      }, [])

      const valueChanged = (value) => {
        onValueChanged(value);
      };

    const selectBefore = (
        <Select
            defaultValue="add"
            style={{
              width: 60,
            }}
        >
            <Option value="add">+</Option>
            <Option value="minus">-</Option>
        </Select>
    );

    const selectAfter = (
        <Select
            defaultValue="USD"
            style={{
                width: 60,
            }}
        >
            {
                units.map(entry => {
                    return (
                        <Option key={entry} value="entry">{entry}</Option>
                    );
                })
            }
        </Select>
    );
 
    return (
        <Space direction='vertical' align='center'>
            <Typography.Title level={5}>{label}</Typography.Title>
            <InputNumber 
                addonBefore={selectBefore} 
                addonAfter={units.length ? selectAfter : ''} 
                defaultValue={100} 
                disabled={false}
                value={value}
                onChange={valueChanged}/>
        </Space>
    )
}

export default EditParameter;