import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MovieApp } from './MovieApp.tsx'
import './styles.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MovieApp />
  </StrictMode>,
)
