import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Main from './pages/Main'
import Rental from './pages/Rental'
import Footer from './components/common/Footer'
import About from './pages/About'
import NotFound from './pages/NotFound'
import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} /> {/* Cette route capture toutes les autres URL non listées */}
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
