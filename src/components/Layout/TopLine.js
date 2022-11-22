import '../css/TopLine.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='contents'>
                <div>
                    <img src={logo} alt='로고' />
                </div>

                <nav>
                    <ul>
                        <li>메뉴 1</li>
                        <li>메뉴 2</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;