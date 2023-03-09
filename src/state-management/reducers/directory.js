import DIRECTORY_DATA from '../../helper/directory-data.json'
const INITIAL_STATE = {
  sections: DIRECTORY_DATA,
};

// we don't have any action for the directory data as we won't be changing anyting here

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
