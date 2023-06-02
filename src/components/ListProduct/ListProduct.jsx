import React, { useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";

import "./ListProduct.css";
import ProductAPI from "../../api/Product";
const ListProduct = () => {
  const [isCheck, setIsCheck] = React.useState(true);
  const [productList, setProductList] = React.useState([]);

  useEffect(() => {
    const handleCallApi = async () => {
      const response = await ProductAPI.getAllProduct();

      const data = await response.data;

      setProductList(data);
    };
    if (isCheck) {
      handleCallApi();
    }
    return () => {
      setIsCheck(false);
    };
  }, [isCheck]);

  return (
    <div className="root-list">
      {productList.map((product) => (
        <CardProduct product={product} />
      ))}
    </div>
  );
};

export default ListProduct;
