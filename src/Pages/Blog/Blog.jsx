import './blog.css';
import {news} from '../../sliderData.js'
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SearchIcon from '@mui/icons-material/Search';

const Blog = () => {
    return (
        <div className="blogContainear">
            <div className="blogHeader">
                <h1 className="blogHeaderTitle">Blog</h1>
            </div>
            <div className="blogSection">
                <div className="blogSectionRight">
                    <div className="sectionContainear">
                        {news.map((item, i) => (
                            <div className='arrg' key={i}>
                                <div className="sectionContainearImage">
                                    <Link to='/detailed' className='imageLink'>
                                        <img src={item.image_url} alt={item.title} className='ImageSrc' />
                                    </Link>
                                </div>
                                <div className="itemInfo">
                                    <h4 className="itemInfoTitle">
                                        <Link className='itemInfoLink' to='/detailed'>
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <p className="itemInfoText">
                                        {item.description}
                                    </p>
                                    <div className="itemInfoDesc">
                                        <span className="admin">
                                            <span className='by'>By </span> 
                                            {item.creator} | {item.category} | {item.comments} Comments</span>
                                        <Link to='/detailed' className="read">CONTINUE READING  <ArrowRightAltIcon/></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
                <div className="blogSectionLeft">
                    <div className="searchContainear">
                        <input type="text" className="searchbar" placeholder='Search' />
                        <SearchIcon className='searchIcon'/>
                    </div>
                    <div className="categoryContainear">
                        <h3 className="categoryTitle">Categories</h3>
                        <ul className="categoryList">
                            <li className='catListItems'>Fashion</li>
                            <li className='catListItems'>Beauty</li>
                            <li className='catListItems'>Street Style</li>
                            <li className='catListItems'>Life Style</li>
                            <li className='catListItems'>DYI&Crafts</li>
                        </ul>
                    </div>
                    <div className="categoryContainear">
                        <h3 className="categoryTitle">Archive</h3>
                        <ul>
                            <li className='ArchiveContainear'>
                                <span>JUN 2022</span>
                                <span>(15)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Feb 2022</span>
                                <span>(30)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Mar 2022</span>
                                <span>(21)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Apr 2022</span>
                                <span>(9)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>May 2022</span>
                                <span>(14)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>JUNE 2022</span>
                                <span>(15)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>JUL 2022</span>
                                <span>(5)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Aug 2022</span>
                                <span>(6)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Sep 2022</span>
                                <span>(5)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Oct 2022</span>
                                <span>(10)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Nov 2022</span>
                                <span>(52)</span>
                            </li>
                            <li className='ArchiveContainear'>
                                <span>Dec 2022</span>
                                <span>(8)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
