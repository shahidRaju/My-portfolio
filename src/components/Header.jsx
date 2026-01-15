import { NavLink } from 'react-router-dom'
import '../styles/Header.css';
export default function Header() {
  return (
    <header className="header">
        <div className="header-left">
            <div className="header__logo">
                <NavLink to="/">MyLogo</NavLink> 
            </div>
            <nav className="header__nav">
                <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
                <NavLink to="/our-story" className={({isActive}) => isActive ? 'active' : ''}>Our Story</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            </nav>
        </div>
        <div className="header__icons">
            <div className="icon-btn" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            <div className="icon-btn" aria-label="Cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </div>
        </div>
    </header>
  )
}
