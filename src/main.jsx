import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CityProvider } from './Contexts/CityContext.jsx'
import UnitsProvider from './Contexts/UnitsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityProvider>
      <UnitsProvider>
        <App />
      </UnitsProvider>
    </CityProvider>
  </React.StrictMode>
)
