import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './main.scss'

import Home from './pages/home/Home.jsx'
import ErrorPage from './pages/error/ErrorPage.jsx'
import Logement from './pages/logement/LogementPage.jsx'
import About from './pages/about/AboutPage.jsx'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Header/>	
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/logement/:id" element={<Logement />} />
			<Route path='*' element={<ErrorPage />}/>
		</Routes>
		<Footer/>
	</BrowserRouter>
)
