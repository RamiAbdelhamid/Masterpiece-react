import Navbar from "../Component/Shared/Navbar";
import CategoryCards from "../Component/HomeComponent/Category";
import ThymeCrop from "../Component/HomeComponent/ThymeCrop";
import ChickenSection from "../Component/HomeComponent/ChickenSection";
import Reviews from "../Component/HomeComponent/Reviews";
import Footer from "../Component/Shared/Footer";
import Carousel from '../Component/HomeComponent/Carousel';

const Home = () => {

  return (
    <>
     
      <Carousel/>
      <br />
      <br />
      <br />
      <CategoryCards/>
      <br />
      <br />
      <br />
      <ThymeCrop/>
      <br />
      <br />
      <br />
      <ChickenSection/>
      <br />
      <br />
      <br />
      <Reviews/>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
