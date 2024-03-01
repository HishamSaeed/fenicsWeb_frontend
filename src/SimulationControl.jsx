import { useState } from 'react';
import { sendData, subscribe } from './services/ApiService';
import PushButton from './widgets/push-button/PushButton'
import './SimulationControl.css'

function SimulationControl() {

    const [isSimulationRunning, setIsSimulationRunning] = useState(false)

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
        <div className='mainContent'>
            <PushButton className='btn' onClick={onCreateSimulation} label="Create Simulation" disabled={isSimulationRunning}/>
            <PushButton className='btn' onClick={onSimulate} label="Simulate" disabled={isSimulationRunning}/>
            { isSimulationRunning && <label>simulation running</label> }
        </div>
    )
}

export default SimulationControl;