import { useState } from 'react';
import { Flex } from 'antd';
import { sendData, subscribe } from '../../services/ApiService';
import PushButtonNew from '../../widgets/pus-button-new/PushButtonNew'
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
            <PushButtonNew onPushed={onCreateSimulation} label="Create Simulation" disabled$={isSimulationRunning$}/>
            <PushButtonNew onPushed={onSimulate} label="Simulate" disabled$={isSimulationRunning$}/>
            { isSimulationRunning && <label>simulation running</label> }
        </Flex>
    )
}

export default SimulationControl;