import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {

    const activeLink = ({isActive}) => {
        return {
            color: isActive ? '#6c7ae0' : '#000'
        }
    }

    const navResponsive = () => {
        document.querySelector('.menuLinks').classList.toggle('nav-active');
        document.querySelectorAll('.menulist li').forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
        document.querySelectorAll('.iconMenu li').forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    }

    return (
        <>
            <div className='navBar'>
                <h2 className="title"><span className='title_identfier'>coza</span>store</h2>
                <div className="menuLinks">
                    <div className="leftside">
                        <ul className="menulist">
                            <li className="menuItem animateclass"><NavLink style={activeLink} className="menuItemLink" to='/'>Home</NavLink></li>
                            <li className="menuItem animateclass"><NavLink style={activeLink} className="menuItemLink" to='/shop'>Shop</NavLink></li>
                            <li className="menuItem animateclass"><NavLink style={activeLink} className="menuItemLink" to='/features'>Features</NavLink></li>
                            <li className="menuItem animateclass"><NavLink style={activeLink} className="menuItemLink" to='/blog'>Blog</NavLink></li>
                            <li className="menuItem animateclass"><NavLink style={activeLink} className="menuItemLink" to='/about'>About</NavLink></li>
                            <li className="menuItem animateclass"><NavLink style={activeLink} className="menuItemLink" to='/content'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="rightside">
                        <ul className="iconMenu">
                            <li className="iconMenuItem animateclass">
                                <SearchIcon/>
                            </li>
                            <li className="iconMenuItem animateclass">
                                <ShoppingCartIcon/>
                            </li>
                            <li className="iconMenuItem animateclass">
                                <FavoriteBorderIcon/>
                            </li>
                            <li className="iconMenuItem animateclass">
                                <PersonIcon/>
                            </li>
                        </ul>
                    </div>                
                </div>
                <div className="menuToggle" onClick={navResponsive}><MenuIcon/></div>
            </div>
        </>
    );
}

export default Navbar;
