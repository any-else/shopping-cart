import React from "react";
import ListProduct from "../../components/ListProduct/ListProduct";
import { Layout } from "antd";
import HeaderHome from "../../components/Header/Header";
import SliderComponent from "../../components/Slider/Slider";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <HeaderHome />
        <SliderComponent />
        <ListProduct />
      </Layout>
    </div>
  );
};

export default HomePage;
