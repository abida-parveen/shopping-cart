import React, { memo } from "react";
import "./collection-item.css";
import CustomButton from "../../../common/CustomButton";
import { addItem } from "../../../../state-management/actions/cart";
import { connect } from "react-redux";

const CollectionItem = memo(({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection_item">
      <div className="image_container">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
      <div className="collection_footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
