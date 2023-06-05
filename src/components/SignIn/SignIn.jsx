import React from "react";

import "./SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/UserSlice";
const SignIn = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState({});
  const dispatch = useDispatch();
  //handle cho thằng Input
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  //handle cho thằng Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(inputValue)).unwrap();
    //dispath thanh cong thi ve trang chu
    data && navigate("/");
  };

  return (
    <div>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email or Phone"
          id="=email"
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
        <button type="submit">Log In</button>
        <NavLink
          to={"/auth/signUp"}
          style={{
            display: "inline-block",
            marginTop: "40px",
            textDecoration: "none",
            color: "blue",
          }}
        >
          Nếu chưa có tài khoản thì register in here
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
