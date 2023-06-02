import React from "react";
import "./CardProduct.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/CartSLice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardProduct = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const handleClick = (product) => {
    const add = addToCart(product);
    dispatch(add);
    toast("Wow so easy!");
  };

  return (
    <div className="root-card">
      <img src={product.image} width={100} height={100} />
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        <h4>{product.name}</h4>
        <p>{product.type}</p>
        <p>$ {product.price}</p>
      </div>
      <div
        className="icon"
        style={{ cursor: "pointer" }}
        onClick={() => handleClick(product)}
      >
        <PlusCircleOutlined />
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardProduct;
