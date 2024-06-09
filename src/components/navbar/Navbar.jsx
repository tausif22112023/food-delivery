import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Button, Input, Flex, Tooltip } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  return (
    <>
      <div className="main-container">
        <div className="header">
          <div className="logo-title-container">
            <img
              className="logo-style"
              src={logo}
              alt="Logo-Image"
              onClick={() => {
                navigate("/");
              }}
            />
            <h1
              onClick={() => {
                navigate("/");
              }}
            >
              Feastify
            </h1>
          </div>
          <div className="menu-container">
            <Button
              type="text"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button type="text">Menu</Button>
            <Button type="text">Contact Us</Button>
          </div>
          <div className="side-menu-container">
            <Flex gap={30}>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <ShoppingCartOutlined
                onClick={() => {
                  navigate("cart");
                }}
                style={{ fontSize: "24px" }}
              />
              <Button
                type="primary"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "black",
                }}
              >
                SignIn
              </Button>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}
