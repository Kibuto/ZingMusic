// libs
import React from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
// types
import { infoNews } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoNews;
}

const HotNews = (props: PropTypes) => {
  const { item } = props;
  return (
    <div className="hot-news-wrapper">
      <img src={item.image_url} alt="images" />
      <NavbarTitle varClass="hot-news" name={item.title} />
    </div>
  );
};

export default HotNews;
