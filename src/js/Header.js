import '../css/Header.css'
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='contents'>
                <div>
                    <img src={logo} alt='로고' />
                </div>

                <div>
                    <ul>
                        <li><Link to={"/"}>HOME</Link></li>
                        <li><Link to={"/about"}>ABOUT</Link></li>
                        <li><Link to={"/explore"}>EXPLORE</Link></li>
                        <li><Link to={"/"}>MORE</Link></li>
                    </ul>
                </div>

                <div>
                    SIGN IN / SIGN UP
                </div>
            </div>
        </header>
    )
}

export default Header;