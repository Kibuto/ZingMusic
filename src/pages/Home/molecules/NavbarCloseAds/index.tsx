// libs
import { PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
// others
import "./style.scss";

const NavbarCloseAds = (): JSX.Element => (
  <div className="navbar-close-ads-wrapper">
    <Button type="link" icon={<PoweroffOutlined />} size="large" />
    <NavbarTitle varClass="" name="Tắt Quảng Cáo" />
    <Button type="link" icon={<CloudUploadOutlined />} size="large" />
  </div>
);

export default NavbarCloseAds;
