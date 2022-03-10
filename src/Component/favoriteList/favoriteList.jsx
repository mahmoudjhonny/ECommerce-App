import "./favoriteList.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavoriteList = ({ activeFav }) => {
  return (
    <div className={activeFav ? "open favoriteContainear" : "close"}>
      <div className="favoriteContainearInfo">
        <div className="favCardInfo">
          <img
            src="https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
            alt="fav"
            className="favCardImage"
          />
          <div className="favCardText">
            <p>mahmoud maosjcmv dkdjd dkd</p>
          </div>
          <div className="favCardIcon">
            <FavoriteBorderIcon className="cardfavIcon" />
          </div>
        </div>
      </div>
      <div className="favoriteContainearInfo">
        <div className="favCardInfo">
          <img
            src="https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
            alt="fav"
            className="favCardImage"
          />
          <div className="favCardText">
            <p>mahmoud maosjcmv dkdjd dkd</p>
          </div>
          <div className="favCardIcon">
            <FavoriteBorderIcon className="cardfavIcon" />
          </div>
        </div>
      </div>
      <div className="favoriteContainearInfo">
        <div className="favCardInfo">
          <img
            src="https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
            alt="fav"
            className="favCardImage"
          />
          <div className="favCardText">
            <p>mahmoud maosjcmv dkdjd dkd</p>
          </div>
          <div className="favCardIcon">
            <FavoriteBorderIcon className="cardfavIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
