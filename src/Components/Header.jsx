import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <img src='/../assets/img/LogoKasa.png' className='logo-kasa' alt='logo Kasa'/>
            <nav>
                <Link to='/' className='nav-element'>Accueil</Link>
                <Link  to='/a-propos' className='nav-element'>À Propos</Link>
            </nav>
        </header>
)}

export default Header