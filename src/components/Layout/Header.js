import '../css/Header.css'
import logo from '../../image/logo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='contents'>
                <div>
                    <img src={logo} alt='로고' />
                </div>

                <nav>
                    <ul>
                        <li><Link to={"/"}>HOME</Link></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/explore">EXPLORE</a></li>
                        <li>MORE</li>
                    </ul>
                </nav>

                <div>
                    SIGN IN / SIGN UP
                </div>
            </div>
        </header>
    )
}

export default Header;