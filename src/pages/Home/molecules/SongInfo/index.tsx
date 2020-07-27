import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./style.scss";
import { addView } from "../../../../actions/topChart";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
  };
  noSinger: Boolean;
}

const SongInfo: FC<PropTypes> = (props) => {
  const { item, noSinger } = props;
  const dispatch = useDispatch();

  const _handleIncreaseView = (item: any) => {
    const newSong = {
      id: item.id,
      song: item.song,
      singer: item.singer,
      image: item.image,
      view: item.view,
    };

    const action = addView(newSong);
    dispatch(action);
  };

  const showSinger = (list: Array<Object>) => {
    return list.map((info: any, index) => {
      return (
        <span key={index}>
          <Link to={`/singer/${info.id}`}>
            <NavbarTitle varClass="singer" name={`${info.singer}`} />
          </Link>
          {index < list.length - 1 && <span>, </span>}
        </span>
      );
    });
  };

  return (
    <div className="song-info-wrapper">
      <Link
        onClick={() => _handleIncreaseView(item)}
        to={`/product/${item.id}`}
      >
        <NavbarTitle varClass="song" name={item.song} />
      </Link>
      {noSinger && (
        <div className="singer-wrapper">{showSinger(item.singer)}</div>
      )}
    </div>
  );
};

export default SongInfo;
