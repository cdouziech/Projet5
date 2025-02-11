import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/testRouting" element={<div>Routing is Working</div>} />
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  </BrowserRouter>
)
