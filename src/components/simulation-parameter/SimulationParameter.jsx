import { Typography } from 'antd'
import EditParameter from '../../widgets/edit-parameter/EditParameter';
import ApiServiceNew from '../../services/ApiServiceNew';
import { sendData } from '../../services/ApiService';
import { useEffect } from 'react';

function SimulationParameter() {

    useEffect(() => {
        sendData('publish_events');
        return
    }, []);
    
    const tStart$ = ApiServiceNew.subscribeToObservable('update_t_start');
    const tEnd$ = ApiServiceNew.subscribeToObservable('update_t_end');
    const dt$ = ApiServiceNew.subscribeToObservable('update_dt');
    const uIn$ = ApiServiceNew.subscribeToObservable('update_u_in');
    const uOut$ = ApiServiceNew.subscribeToObservable('update_u_out');

    const onTstartChange = (value) => {
        sendData('t_start', value);
    }

    const onTendChange = (value) => {
        sendData('t_end', value);
    }

    const onDtChange = (value) => {
        sendData('dt', value);
    }

    const onUinChange = (value) => {
        sendData('u_in', value);
    }

    const onUoutChange = (value) => {
        sendData('u_out', value);
    }

    return (
        <div>
            <Typography.Title level={3}>Simulation Parameters</Typography.Title>
            <EditParameter param$={tStart$} label='T-Start' onValueChanged={onTstartChange} />
            <EditParameter param$={tEnd$} label='T-End' onValueChanged={onTendChange} />
            <EditParameter param$={dt$} label='dt' onValueChanged={onDtChange} />
            <EditParameter param$={uIn$} label='U-In' onValueChanged={onUinChange} />
            <EditParameter param$={uOut$} label='U-Out' onValueChanged={onUoutChange} />
        </div>
    )
}

export default SimulationParameter;