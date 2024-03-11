import { useState } from 'react';
import { Flex } from 'antd';
import { sendData, subscribe } from '../../services/ApiService';
import PushButton from '../../widgets/push-button/PushButton';
import SpinComponent from '../../widgets/spin/Spin';
import ApiServiceNew from '../../services/ApiServiceNew';
import './SimulationControl.css'

function SimulationControl() {

    const [isSimulationRunning, setIsSimulationRunning] = useState(false)

    const isSimulationRunning$ = ApiServiceNew.subscribeToObservable('simulation_running');

    const onCreateSimulation = () => {
        sendData('create_simulation')
    }

    const onSimulate = () => {
        sendData('simulate')
        subscribe('simulation_running', (data) => {
            setIsSimulationRunning(data);
          })
    }

    return (
        <Flex vertical="true" gap="large" justify="center">
            <PushButton onPushed={onCreateSimulation} label="Create Simulation" disabled$={isSimulationRunning$}/>
            <PushButton onPushed={onSimulate} label="Simulate" disabled$={isSimulationRunning$}/>
            { isSimulationRunning && <SpinComponent message='Simulation is Running'/> }
        </Flex>
    )
}

export default SimulationControl;