import React from "react";
import Partner from "../../../organisms/Partner";
import partner from "../../../../../mocks/Partner";

import "./style.scss";

const MainBottom = () => {
  return (
    <div className="main-bottom-wrapper">
      <Partner arr={partner} />
    </div>
  );
};

export default MainBottom;