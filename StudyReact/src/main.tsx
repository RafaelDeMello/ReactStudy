import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { Exemplos } from './componentes/Esboco.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exemplos />
  </StrictMode>,
)
