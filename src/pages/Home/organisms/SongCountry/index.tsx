import React, { FC } from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import SongTrending from "../../molecules/SongTrending";
// others
import "./style.scss";
import { infoSong } from "../../../../types/Home";

interface PropTypes {
  arr: Array<infoSong>;
  title: string;
}

const SongCountry: FC<PropTypes> = (props) => {
  const { title, arr } = props;
  return (
    <div className="song-country-wrapper">
      <div className="title">
        <NavbarTitle varClass="title" name={title} />
      </div>
      <div className="content">
        {arr.map((item: infoSong, index) => (
          <SongTrending
            length={arr.length}
            key={index}
            index={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCountry;
