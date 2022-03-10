import FavoriteList from "../../Component/favoriteList/favoriteList";
import Featuares from "../../Component/Featuares/Featuares";
import Productgrid from "../../Component/Products/Products";
import Slider from "../../Component/Slider/Slider";

const Home = ({ activeFav }) => {
  return (
    <>
      <Slider />
      <FavoriteList activeFav={activeFav} />
      <Featuares />
      <Productgrid />
      {console.log(activeFav)}
    </>
  );
};

export default Home;
