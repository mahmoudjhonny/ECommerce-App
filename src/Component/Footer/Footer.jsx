import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footerBody'>
            <div className="footerSectionBody">
                <h3 className="footerSectionHeader">CATEGORIES</h3>
                <ul className="footerSectionList">
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">Women</Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">Men</Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">Shose</Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">Watches</Link></li>
                </ul>
            </div>
            <div className="footerSectionBody">
                <h3 className="footerSectionHeader">Help</h3>
                <ul className="footerSectionList">
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">Track Order</Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">Returns</Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">Shipping</Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSectionListItemLink">FAQs</Link></li>
                </ul>
            </div>
            <div className="footerSectionBody">
                <h3 className="footerSectionHeader">Get in touch</h3>
                <p className='about'>Any questions? Let us know in store at 8th floor,<br/> 379 Hudson St, New York, <br/>NY 10018 or call us on (+1) 96 716 6879</p>
                <ul className="footerSocialList">
                    <li className="footerSectionListItem"><Link to='#' className="footerSocialListItemLink"><FacebookIcon/></Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSocialListItemLink"><InstagramIcon/></Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSocialListItemLink"><TwitterIcon/></Link></li>
                    <li className="footerSectionListItem"><Link to='#' className="footerSocialListItemLink"><GoogleIcon/></Link></li>
                </ul>
            </div>
            <div className="footerSectionBody">
                <h3 className="footerSectionHeader">NEWSLETTER</h3>
                    <input type='email' placeholder='email@example.com' />
                <button className="subscribebutton">Subscribe</button>
            </div>
        </div>
    )
}
