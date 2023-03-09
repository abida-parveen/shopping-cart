import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/main/collection/CollectionItem";
import "./collection.css";

const Collection = ({ collections }) => {
  const { id } = useParams();
  const memoizedItems = useMemo(
    () =>
      collections[id].items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      )),
    [collections, id]
  );
  return (
    <div className="collection_page">
      <div className="container">
        <h2 className="title">{collections[id].title}</h2>
        <div className="items">
          {memoizedItems}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  // this will give all the data that is present in collection
  collections: state.collection.collections,
});
export default connect(mapStateToProps)(Collection);
