import FavoriteList from '../../Component/favoriteList/favoriteList';
import Featuares from '../../Component/Featuares/Featuares';
import Productgrid from '../../Component/Products/Products';
import Slider from '../../Component/Slider/Slider';

const Home = () => {
    return (
        <>
            <Slider/>
            <FavoriteList/>
            <Featuares />
            <Productgrid/>
        </>
    );
}

export default Home;
