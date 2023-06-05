import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "../../redux/reducer/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SignUp.css";
const SignUp = () => {
  const [inputValue, setInputValue] = React.useState({});
  const dispatch = useDispatch();
  //handle cho thằng Input
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  {
  }
  //handle cho thằng Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(inputValue)).unwrap();
    } catch (error) {
      console.log("LOI", error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>SignUp Here</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email or Phone"
          id="email"
          name="email"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <button>Register</button>

        <NavLink
          to={"/auth/SignIn"}
          style={{
            display: "inline-block",
            marginTop: "40px",
            textDecoration: "none",
            color: "blue",
          }}
        >
          Nếu có tài khoản thì Login in here
        </NavLink>
      </form>
    </div>
  );
};

export default SignUp;
