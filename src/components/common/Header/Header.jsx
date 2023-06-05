import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import Layout from "antd/es/layout/layout";

const { Header } = Layout;
const HeaderHome = () => {
  return (
    <Header className="header">
      <p>
        <Link>SHOP VU</Link>
      </p>
      <div className="header-search">
        <div className="search-icon">
          <SearchOutlined />
        </div>

        <input placeholder="Search" />
      </div>
      <div className="header-more">
        <NavLink to={'/cart'}>
          {" "}
          <ShoppingCartOutlined style={{ fontSize: 28 }} />
        </NavLink>

        <Avatar size={28} icon="user" />
      </div>
    </Header>
  );
};

export default HeaderHome;
