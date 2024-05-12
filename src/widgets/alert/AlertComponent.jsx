import React from 'react';
import { Alert } from 'antd';

const AlertComponent = ({ message = '', type = 'info' }) => {

    return (
        <Alert message={message} type={type} />
    )
}

export default AlertComponent;
