import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./styles.scss";

interface PropTypes {
  arr: Array<object>;
}

const Partner: FC<PropTypes> = (props) => {
  const { arr } = props;
  return (
    <div className="partner-wrapper">
      <NavbarTitle parent="partner" name="ĐỐI TÁC" />
      <div className="list-partner">
        {arr.map((item: any, index: any) => {
          return <img key={index} src={item.image} alt="image" />;
        })}
      </div>
    </div>
  );
};

export default Partner;
