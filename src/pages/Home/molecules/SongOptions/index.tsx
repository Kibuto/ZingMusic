import React from "react";
import NavbarIcon from "../../atoms/NavbarIcon";

import "./styles.scss";

const SongOptions = () => {
  return (
    <div className="song-options-wrapper">
      <NavbarIcon parent="song-option" icon="fab fa-youtube" />
      <NavbarIcon parent="song-option" icon="fas fa-download" />
      <NavbarIcon parent="song-option" icon="fas fa-plus" />
      <NavbarIcon parent="song-option" icon="fas fa-share-alt" />
    </div>
  );
};

export default SongOptions;
