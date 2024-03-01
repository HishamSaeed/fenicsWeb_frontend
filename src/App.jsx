import './init';
import './App.css';
import SimulationParameter from './SimulationParameter'

function App() {

  return (
    <div className='app'>
      <div className='navBar'>Nav Bar</div>
      <div className='layout'>
        <SimulationParameter/>
        <div>Visulaziation</div>
        <div>Simulation Control</div>
      </div>
    </div>
  )
}

export default App
