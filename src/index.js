import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './jsx/Header'
import Hero from './jsx/Hero'
import Main from './jsx/Main'
import Footer from './jsx/Footer'
import './assets/css/index.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Hero />
            <Main />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
