import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

export default function Footer() {
    return (
        <div className='footerBody'>
            <div className="footerSectionBody">
                <h3 className="footerSectionHeader">CATEGORIES</h3>
                <ul className="footerSectionList">
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">Women</a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">Men</a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">Shose</a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">Watches</a></li>
                </ul>
            </div>
            <div className="footerSectionBody">
                <h3 className="footerSectionHeader">Help</h3>
                <ul className="footerSectionList">
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">Track Order</a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">Returns</a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">Shipping</a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSectionListItemLink">FAQs</a></li>
                </ul>
            </div>
            <div className="footerSectionBody">
                <h3 className="footerSectionHeader">Get in touch</h3>
                <p className='about'>Any questions? Let us know in store at 8th floor,<br/> 379 Hudson St, New York, <br/>NY 10018 or call us on (+1) 96 716 6879</p>
                <ul className="footerSocialList">
                    <li className="footerSectionListItem"><a href='#' className="footerSocialListItemLink"><FacebookIcon/></a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSocialListItemLink"><InstagramIcon/></a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSocialListItemLink"><TwitterIcon/></a></li>
                    <li className="footerSectionListItem"><a href='#' className="footerSocialListItemLink"><GoogleIcon/></a></li>
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
