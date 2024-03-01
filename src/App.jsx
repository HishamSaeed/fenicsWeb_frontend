import { useState } from 'react';
import './init';
import './App.css';
import SimulationParameter from './SimulationParameter'
import Visulaization from './Visualization'

function App() {

  const [showHideVis, setShowVis] = useState(false)

  const onShowHideVis = () => {
    setShowVis(!showHideVis)
  }

  return (
    <div className='app'>
      <div className='navBar'>Nav Bar</div>
      <div className='layout'>
        <SimulationParameter/>
        <div className="mainContent">
          <button onClick={onShowHideVis}>Visualise</button>
          {
            showHideVis && <div className="modal">
              <div className="modal-content">
                <span className="Close" onClick={onShowHideVis}>&times;</span>
                <Visulaization></Visulaization>

              </div>
            </div>
          }
        </div>
        <div>Simulation Control</div>
      </div>
    </div>
  )
}

export default App
