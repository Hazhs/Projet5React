
import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const Resizing = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', Resizing);
    return () => {
      window.removeEventListener('resize', Resizing);
    }
  }, [])

  const textNav1 = windowWidth < 650 ? 'ACCUEIL' : 'Accueil';
  const textNav2 = windowWidth < 650 ? 'A PROPOS' : 'A Propos';

  return (
    <header>
      <img src="/../assets/img/LogoKasa.png" className="logo-kasa" alt="logo Kasa"/>
      <nav>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? 'nav-element active' : 'nav-element'}>
          {textNav1}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
            isActive ? 'nav-element active' : 'nav-element' }>
          {textNav2}
        </NavLink>
      </nav>
    </header>
  )
}