import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; // 라우터를 사용하기 위해 추가

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/class-portfolio/"> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)
