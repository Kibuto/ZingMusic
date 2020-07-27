import React, { FC } from "react";
import classNames from "classnames";
import NavbarTitle from "../../atoms/NavbarTitle";
import { Link } from "react-router-dom";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
    view: string;
  };
  weekAlbum: boolean;
}

const SongInfoVideo: FC<PropTypes> = (props) => {
  const { item, weekAlbum } = props;
  return (
    <div
      className={classNames({
        "song-info-album-wrapper": weekAlbum,
        "song-info-video-wrapper": !weekAlbum,
      })}
    >
      <div className="song-info-wrapper">
        <Link to={`/product/${item.id}`}>
          <NavbarTitle varClass="song" name={item.song} />
        </Link>
        <div className="singer-wrapper">
          {item.singer.map((name: any, index) => {
            return (
              <Link to={`/singer/${name.id}`} key={index}>
                <NavbarTitle varClass="singer" name={`${name.singer} `} />
              </Link>
            );
          })}
        </div>
      </div>
      <NavbarTitle varClass="song-view" name={item.view} />
    </div>
  );
};

export default SongInfoVideo;
