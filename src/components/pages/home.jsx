import Layout from "../Layouts/layout.jsx";
import BannerComp from "../BannerComp/bannerComp.jsx";
import GameShop from "../GameShop/gameShop.jsx";
import Header from "../Header/header.jsx";
import Footer from "../Footer/footer.jsx";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => (
  <>
    <Layout>
      <BannerComp />
      <div className="container">
        <Header white="New" red="Games" />
        <GameShop />
      </div>
      <Footer />
    </Layout>
  </>
);

export default Home;
