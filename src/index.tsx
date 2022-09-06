import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.dark.css';
import './index.css'
//import App from './0LoPokimon/components/App'
//import App from './Class 5 - Componentes/App'
//import App from './Class 6 - Repaso II/App'
//import App from './Class 7 - Componentes dinamicos/App'
//import App from './Class 8 - Estados con class/App'
//import App from './Class 10 - Ciclo de vida/App'
//import App from './Class 11 - Repaso useEffects/App'
//import App from './Class 12 - Forms/App'
//import App from './Class 14 - api/App'
//import App from './Class 15 - Repaso api/App'
import MainRoutes from './MainRoutes'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  // <React.StrictMode>
    <MainRoutes />
  // </React.StrictMode>
)
