import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './jsx/Header'
import Hero from './jsx/Hero'
import Main from './jsx/Main'
import Rental from './jsx/Rental'
import Footer from './jsx/Footer'
import About from './jsx/About'
import './assets/css/index.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/Projet-10-Kasa">
            <Header />
            <Routes>
                <Route path="/" element={<><Hero /><Main /></>} />
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
