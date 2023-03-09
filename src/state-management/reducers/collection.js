import COLLECTION_DATA from "../../helper/collection-data.json";

const INITIAL_STATE = {
  collections: COLLECTION_DATA,
};

// we don't have any action for the collection data as we won't be changing anyting here

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
