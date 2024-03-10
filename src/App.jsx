import './init';
import './App.css';
import { useState } from 'react';
import PushButton from './widgets/push-button/PushButton';
import SimulationParameter from './SimulationParameter';
import Visulaization from './Visualization';
import SimulationControl from './SimulationControl';
import EditParameterNew from './widgets/edit-parameter-new/EditParameterNew';
import PushButtonNew from './widgets/pus-button-new/PushButtonNew';

function App() {

  const [showHideVis, setShowVis] = useState(false)

  const onShowHideVis = () => {
    setShowVis(!showHideVis)
  }

  return (
    <div className='app'>
      <div className='navBar'>Nav Bar</div>
      <EditParameterNew/>
      <PushButtonNew/>
      <div className='layout'>
        <SimulationParameter/>
        <div className="mainContent">
          <PushButton onClick={onShowHideVis} label="Visualise"/>
          {
            showHideVis && <div className="modal">
              <div className="modal-content">
                <span className="Close" onClick={onShowHideVis}>&times;</span>
                <Visulaization></Visulaization>

              </div>
            </div>
          }
        </div>
        <SimulationControl/>
      </div>
    </div>
  )
}

export default App
