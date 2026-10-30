import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// sb se phly target dom
//  create the root element
// then render the app component inside the root element using StrictMode for highlighting potential problems in the application.