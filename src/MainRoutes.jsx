import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import PokiApp from './0LoPokimon/components/App'
import App5 from './Class 5 - Components/App'
import App6 from './Class 6 - Repaso II/App'
import App7 from './Class 7 - Componentes dinamicos/App'
import App8 from './Class 8 - Estados con class/App'
import App10 from './Class 10 - Ciclo de vida/App'
import App11 from './Class 11 - Repaso useEffects/App'
import App12 from './Class 12 - Forms/App'
import App14 from './Class 14 - api/App'
import App15 from './Class 15 - Repaso api/App'
import App16 from './Class 16 - React Router/App'

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  img {
    width: 50px;
  }
`

const routes = [
  {
    path: 'class-5',
    component: <App5 />,
    name: 'Class 5 - Componentes',
  },
  {
    path: 'class-6',
    component: <App6 />,
    name: 'Class 6 - Repaso II',
  },
  {
    path: 'class-7',
    component: <App7 />,
    name: 'Class 7 - Componentes dinamicos',
  },
  {
    path: 'class-8',
    component: <App8 />,
    name: 'Class 8 - Estados con class',
  },
  {
    path: 'class-10',
    component: <App10 />,
    name: 'Class 10 - Ciclo de vida',
  },
  {
    path: 'class-11',
    component: <App11 />,
    name: 'Class 11 - Repaso useEffects',
  },
  {
    path: 'class-12',
    component: <App12 />,
    name: 'Class 12 - Forms',
  },
  {
    path: 'class-14',
    component: <App14 />,
    name: 'Class 14 - api',
  },
  {
    path: 'class-15',
    component: <App15 />,
    name: 'Class 15 - Repaso api',
  },
  {
    path: 'class-16',
    component: <App16 />,
    name: 'Class 16 - React Router',
  },
  {
    path: 'pokimon',
    component: <PokiApp />,
    name: 'Lo Pokimon',
  }
]

const MainLayout = () => {
  return (
    <Layout className='min-h-full'>
      <Layout.Sider trigger={null}>
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt='Vapor' />
          Vapor
        </Logo>
        <Menu
          theme='dark'
          mode='inline'
          items={routes.map((r) => ({
            key: r.path,
            label: <Link to={`/${r.path}`}>{r.name}</Link>,
          }))}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className='p-16'>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={`/${r.path}/*`} element={r.component} />
          ))}
          <Route path='/*' element={<div>404</div>} />
        </Routes>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

const MockedClass5 = () => {
  return (
    <div>
      <h1>Class 5</h1>
      <Routes>
        <Route path='/' element={<div>index</div>} />
        <Route path='/asdf' element={<div>asdf</div>} />
      </Routes>
    </div>
  )
}

const MainRoutes = () => {
  React.useEffect(() => {
    console.log('MainRoutes mounted')
  }, [])

  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  )
}

export default MainRoutes
