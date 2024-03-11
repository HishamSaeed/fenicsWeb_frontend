import React from 'react';
import { Spin } from 'antd';

const SpinComponent = ({ message = ''}) => {

    return (
        <Spin tip={message}>
            <div className="content" />
        </Spin>
    )
}

export default SpinComponent;
