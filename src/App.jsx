import { useState } from "react"
import './App.css'
import Visulaization from './Visualization'

function App() {

  const [showHideVis, setShowVis] = useState(false)

  const onShowHideVis = () => {
    setShowVis(!showHideVis)
  }

  return (
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
  )
}

export default App
