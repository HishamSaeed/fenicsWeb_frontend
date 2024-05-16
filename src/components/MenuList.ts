import { HeatMapOutlined, SettingOutlined, CaretRightOutlined  } from '@ant-design/icons'
import SimulationParameter from './simulation-parameter/SimulationParameter'
// import Visualization from './simulation-visualization/Visualization'
import SimulationControl from './simulation-control/SimulationControl'
import VisualizerEmbed from './visualizer/visualizer'
import { LayoutPageNav } from '../models/LayoutPage';

export const MENU_LIST = [
    { component: SimulationParameter, key: LayoutPageNav.SimulationParameter, label: 'Simulation Settings', icon: SettingOutlined },
    { component: VisualizerEmbed, key: LayoutPageNav.SimulationVisualization, label: 'Visualization', icon: HeatMapOutlined },
    { component: SimulationControl, key: LayoutPageNav.SimulationControl, label: 'Run Simulation', icon: CaretRightOutlined }
]