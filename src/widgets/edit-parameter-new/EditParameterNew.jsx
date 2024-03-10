import { SettingOutlined } from '@ant-design/icons'
import React from 'react';
import { InputNumber, Select, Space, Typography } from 'antd'

const { Option } = Select;

const EditParameterNew = () => {

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
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
        </Select>
    );
 
    return (
        <Space direction='vertical' align='center'>
            <Typography.Title level={5}>Title</Typography.Title>
            <InputNumber 
                addonBefore={selectBefore} 
                addonAfter={selectAfter} 
                defaultValue={100} 
                disabled={false}
                stringMode={false}/>
        </Space>
    )
}

export default EditParameterNew;