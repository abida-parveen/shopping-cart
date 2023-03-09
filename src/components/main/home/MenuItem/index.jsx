import React from "react";
import "./menu-item.css";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
    const { title, imageUrl, size, linkUrl } = props;
    const navigate = useNavigate();
  return (
    <div
      className={`${size} menu_item`}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div
        className="background_image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h4 className="title">{title.toUpperCase()}</h4>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
