import React from "react";
import AllProducts from "../../AllProducts/AllProducts";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Review from "../Review/Review";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AllProducts></AllProducts>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
