import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Header/>	
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/about" element={<About />} />
			<Route path="/logements" element={<Logements />} />
			<Route path='*' element={<ErrorPage />}/>
		</Routes>
		<Footer/>
	</BrowserRouter>
)
