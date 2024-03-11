import { Typography } from 'antd'
import EditParameterNew from '../../widgets/edit-parameter-new/EditParameterNew';
import ApiServiceNew from '../../services/ApiServiceNew';
import { sendData } from '../../services/ApiService';

function SimulationParameter() {

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
            <EditParameterNew param$={tStart$} label='T-Start' onValueChanged={onTstartChange}></EditParameterNew>
            <EditParameterNew param$={tEnd$} label='T-End' onValueChanged={onTendChange}></EditParameterNew>
            <EditParameterNew param$={dt$} label='dt' onValueChanged={onDtChange}></EditParameterNew>
            <EditParameterNew param$={uIn$} label='U-In' onValueChanged={onUinChange}></EditParameterNew>
            <EditParameterNew param$={uOut$} label='U-Out' onValueChanged={onUoutChange}></EditParameterNew>
        </div>
    )
}

export default SimulationParameter;