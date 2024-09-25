import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <header>
            <img src='/../assets/img/LogoKasa.png' className='logo-kasa' alt='logo Kasa'/>
            <nav>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? 'nav-element active' : 'nav-element'}>
                    Accueil
                </NavLink>
                <NavLink to='/about' className={({ isActive }) =>
                    isActive ? 'nav-element active' : 'nav-element'}>
                    À Propos
                </NavLink>
            </nav>
        </header>
)}
