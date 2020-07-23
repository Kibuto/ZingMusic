import React, { FC } from "react";
import classNames from "classnames";
import NavbarTitle from "../../atoms/NavbarTitle";
import VideoInspired from "../../molecules/VideoInspired";

import "./style.scss";

interface PropTypes {
  arr: Array<object>;
  title: string;
  noSinger: boolean;
  videoHot: boolean;
}

const TrendingVideo: FC<PropTypes> = (props) => {
  const { title, noSinger, arr, videoHot } = props;
  return (
    <div className="trending-video-wrapper">
      <div className="title">
        <NavbarTitle varClass="title" name={title} />
      </div>
      <div className={classNames("content", { "video-hot": videoHot })}>
        {arr.map((item: any, index: any) => {
          return <VideoInspired key={index} item={item} noSinger={noSinger} />;
        })}
      </div>
    </div>
  );
};

export default TrendingVideo;
