import logo from '../img/logo.png'
import '../assets/css/index.css'

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <nav className="header__nav">
          <a className="header__nav__menu">accueil</a>
          <a className="header__nav__menu">à propos</a>
        </nav>
      </header>
    </div>
  )
}

export default App
