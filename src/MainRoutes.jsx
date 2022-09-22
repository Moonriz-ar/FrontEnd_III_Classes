import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import PokiApp from './0LoPokimon/V1/components/App'
import PokiAppV3Empty from './0LoPokimon/V3Empty/App'
import PokiAppV3Completed from './0LoPokimon/V3Completed/App'
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
import App19 from './Class 19 - Estilos/App'
import App20 from './Class 20 - Hooks Adicionales/App'
import App24 from './Class 24 - Composition/App'
import App25 from './Class 25 - context/App'

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
    path: 'class-19',
    component: <App19 />,
    name: 'Class 19 - Estilos',
  },
  {
    path: 'class-20',
    component: <App20 />,
    name: 'Class 20 - Hooks Adicionales',
  },
  {
    path: 'class-24',
    component: <App24 />,
    name: 'Class 24 - Composition',
  },
  {
    path: 'class-25',
    component: <App25 />,
    name: 'Class 25 - Context',
  },
  {
    path: 'pokimon',
    name: 'Lo Pokimon',
    sub: [
      {
        path: 'V1',
        component: <PokiApp />,
        name: 'V1',
      },
      {
        path: 'V3-empty',
        component: <PokiAppV3Empty />,
        name: `V3 solven't`,
      },
      {
        path: 'V3-completed',
        component: <PokiAppV3Completed />,
        name: `V3 solved `,
      },
    ],
  },
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
            label: r.sub ? r.name : <Link to={r.path}>{r.name}</Link>,
            children: r.sub?.map((s) => ({
              key: s.path,
              label: <Link to={`${r.path}/${s.path}`}>{s.name}</Link>,
            })),
          }))}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className='p-16'>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={
            <div>
              &lt;- Selecciona una clase
            </div>
          }/>
          {routes.map((r) => (
            <Route
              key={r.path}
              path={`${r.path}/*`}
              //if there is a sub route(r.sub) then render the outlet instead of the component
              //r.component and r.sub are linked data,
              //(if there is a sub route then there is no component)
              //so this can be done in a better way
              element={r.component || <Outlet />}
              children={r.sub?.map((s) => (
                <Route key={s.path} path={`${s.path}/*`} element={s.component} />
              ))}
            />
          ))}
          <Route path={`*`} element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
