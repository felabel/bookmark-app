// import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from './logo-bookmark.svg'
// eslint-disable-next-line
import Button from './Button'
const Header = () => {
    return (
        <header className='navbar'>
            <div className="wrapper">
                <div className="logo">
                    <Logo />
                    {/* <span> X </span> */}
                    <span> menu </span>
                </div>
                <div className="navlinks mobile-nav-links">
                    <a href = '/features' >features</a>
                    <a href = '/pricing' >pricing</a>
                    <a href = '/contact' >contact</a>
                    <a href = '/login' className='login' >login</a>
                    
                </div>
                <div className="nav-socials">
                    <span>face</span>
                    <span>twit</span>
                </div>
                
            </div>
        </header>
    )
}

export default Header
