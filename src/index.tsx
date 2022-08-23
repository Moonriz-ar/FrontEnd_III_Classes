import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './Class 5 - Componentes/App'
//import App from './Class 6 - Repaso II/App'
//import App from './Class 7 - Componentes dinamicos/App'
//import App from './Class 8 - Estados con class/App'
import App from './Class 10 - Ciclo de vida/App'
// import App from './Class 11 - Forms/App'
import './index.css'
import reportWebVitals from './reportWebVitals'
//import App from './Test/App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
