import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './jsx/Header'
import Hero from './jsx/Hero'
import Main from './jsx/Main'
import Rental from './jsx/Rental'
import Footer from './jsx/Footer'
import About from './jsx/About'
import NotFound from './jsx/NotFound'
import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<><Hero /><Main /></>} />
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} /> {/* Cette route capture toutes les autres URL non listées */}
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
