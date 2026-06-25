import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mocks/server';
import { App } from './App.tsx'
import './index.css'
import { Exemplos } from './componentes/Esboco.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
