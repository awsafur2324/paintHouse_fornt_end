import TopComment from "../Components/TopComment/TopComment";
import Banner from "../Components/banner/Banner";
import CountUp from "../Components/countup/CountUp";
import CraftCategory from "../Components/craft Item catagory/Craftcatagory";
import JoinNow from "../Components/join us now/JoinNow";
import OurProduct from "../Components/our product/OurProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurProduct />
      <CraftCategory />
      <CountUp />
      <TopComment />
      <JoinNow />
  
    </div>
  );
};

export default Home;
