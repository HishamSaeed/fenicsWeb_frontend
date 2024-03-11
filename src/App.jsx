import './init';
import './App.css';
import { useState } from 'react';
import { MENU_LIST } from './components/MenuList';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
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
          defaultSelectedKeys={[contentPage.toString()]}
          onClick={handleMenuSelect}
          items={MENU_LIST.map(entry => {
            return {
              key: entry.key,
              icon: <entry.icon/>,
              label: entry.label
            }
          })}
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
              {
                MENU_LIST.map(entry => {
                  return (
                    <div key={entry.key}>
                      { (contentPage === entry.key) && <entry.component/> }
                    </div>
                  );
                })
              }
            </div>
          </Content>
      </Layout>
    </Layout>  
    </div>
      
  )
}

export default App
