import "./favoriteList.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { delFavorite } from "../../Redux/Actions/favoriteActions";

const FavoriteList = ({ activeFav }) => {
  const { products } = useSelector((state) => state.product);
  const { favorite } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <div className={activeFav ? "open favoriteContainear" : "close"}>
      {favorite.map((item, index) => (
        <div className="favoriteContainearInfo" key={index}>
          <div className="favCardInfo">
            <img
              src={products[item.id - 1].image}
              alt={products[item.id - 1].id}
              className="favCardImage"
            />
            <div className="favCardText">
              <p>{products[item.id - 1].title}</p>
            </div>
            <div className="favCardIcon">
              <FavoriteBorderIcon
                className="cardfavIcon"
                onClick={() => dispatch(delFavorite(item.id))}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
