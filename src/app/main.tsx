import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'

import { routes } from './routes/routes'

import './styles/colors.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
