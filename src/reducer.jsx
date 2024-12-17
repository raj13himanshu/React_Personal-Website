const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      clickBtn: action.payload.clickBtn,
      btnPath: action.payload.btnPath,
      details: action.payload.details,
      details2: action.payload.details2,
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      clickBtn: action.payload.clickBtn,
      btnPath: action.payload.btnPath,
      details: action.payload.details,
      details2: action.payload.details2,
    };
  }

  return state;
};

export default reducer;
