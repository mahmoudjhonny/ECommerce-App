import "./productGridPage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addFavorite } from "../../Redux/Actions/favoriteActions";

const ProductGridPage = () => {
  const [active, setActive] = useState("All");
  const products = useSelector((state) => state.product);
  const { favorite } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const allCategories = [
    "All",
    ...new Set(products.products.map((product) => product.category)),
  ];

  const handleClick = (id) => {
    const fav = favorite.find((item) => (item.id === id ? true : false));
    dispatch(fav ? null : addFavorite(id));
  };

  return (
    <>
      <nav className="productNav">
        <div className="navLinks">
          {allCategories.map((link, i) => (
            <div className="divButton" key={i}>
              <button
                className={`navLinksOption ${
                  link === active ? "activeNavProduct" : null
                }`}
                onClick={() => setActive(link)}
              >
                {link}
              </button>
            </div>
          ))}
        </div>
        <div className="NavOptions">
          <button className="filterButton">
            <FilterListIcon /> Filter
          </button>
          <button className="searchButton">
            <SearchIcon /> Search
          </button>
        </div>
      </nav>

      <div className="productsBody">
        {active === "All"
          ? products.products.map((products) => (
              <div className="productbody" key={products.id}>
                <img
                  src={products.image}
                  className="productImg"
                  alt={products.category}
                />
                <Link to={`/${products.id}`} className="quickView">
                  Quick View
                </Link>
                <p className="productTitle">{products.title}</p>
                <div className="productprice">
                  <p className="productpriceNember">{products.price} $</p>
                  <span className="favoriteIcon">
                    <FavoriteBorderIcon
                      onClick={() => handleClick(products.id)}
                    />
                  </span>
                </div>
              </div>
            ))
          : products.products.map(
              (products) =>
                products.category === active && (
                  <div className="productbody" key={products.id}>
                    <img
                      src={products.image}
                      className="productImg"
                      alt={products.category}
                    />
                    <Link to={`/${products.id}`} className="quickView">
                      Quick View
                    </Link>
                    <p className="productTitle">{products.title}</p>
                    <div className="productprice">
                      <p className="productpriceNember">{products.price} $</p>
                      <span className="favoriteIcon">
                        <FavoriteBorderIcon
                          onClick={() => handleClick(products.id)}
                        />
                      </span>
                    </div>
                  </div>
                )
            )}
      </div>
    </>
  );
};

export default ProductGridPage;
