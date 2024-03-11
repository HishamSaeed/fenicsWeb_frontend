import './init';
import './App.css';
import { useState } from 'react';
import PushButton from './widgets/push-button/PushButton';
import SimulationParameter from './SimulationParameter';
import Visulaization from './Visualization';
import SimulationControl from './SimulationControl';
import { MenuFoldOutlined, MenuUnfoldOutlined, HeatMapOutlined, SettingOutlined, CaretRightOutlined  } from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd';
import { LayoutPageNav } from './models/LayoutPage';

const { Header, Sider, Content } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [contentPage, setContentPage] = useState(LayoutPageNav.SimulationParameter);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuSelect = ({ key }) => {
    setContentPage(Number(key));
  };

  return (
    <div className='app'>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical'/>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[contentPage]}
          onClick={handleMenuSelect}
          items={[
            {
              key: LayoutPageNav.SimulationParameter.toString(),
              icon: <SettingOutlined />,
              label: 'Simulation Settings',
            },
            {
              key: LayoutPageNav.SimulationVisualization.toString(),
              icon: <HeatMapOutlined />,
              label: 'Visualization',
            },
            {
              key: LayoutPageNav.SimulationControl.toString(),
              icon: <CaretRightOutlined />,
              label: 'Run Simulation',
            }
          ]}
        >
        </Menu>
      </Sider>
      <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>
              { (contentPage === LayoutPageNav.SimulationParameter) && <SimulationParameter/> }
              { (contentPage === LayoutPageNav.SimulationVisualization) && <div className="modal"><Visulaization /></div> }
              { (contentPage === LayoutPageNav.SimulationControl) && <SimulationControl/> }
            </div>
          </Content>
      </Layout>
    </Layout>  
    </div>
      
  )
  // return (
  //   <div className='app'>
  //     <div className='navBar'>Nav Bar</div>
  //     <div className='layout'>
  //       <SimulationParameter/>
  //       <div className="mainContent">
  //         <PushButton onClick={onShowHideVis} label="Visualise"/>
  //         {
  //           showHideVis && <div className="modal">
  //             <div className="modal-content">
  //               <span className="Close" onClick={onShowHideVis}>&times;</span>
  //               <Visulaization></Visulaization>

  //             </div>
  //           </div>
  //         }
  //       </div>
  //       <SimulationControl/>
  //     </div>
  //   </div>
  // )
}

export default App
