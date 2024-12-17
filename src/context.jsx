import React, { useContext, useReducer} from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
  details: "",
  details2: "",
  clickBtn: "",
  btnPath: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Raj Technical",
        image: "./images/hero.svg",
        clickBtn: "About Me",
        btnPath: "/about",
        details: "A frontEnd Developer & self taught Learner. ",
        details2: "",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Himanshu Raj",
        image: "./images/about1.svg",
        clickBtn: "Hire Me",
        btnPath: "/contact",
        details:
          "Hey Everyone, I am Himanshu Raj, I love to do Coding, Design User interface & Responsive Web Pages. I'm B.tech graduated under Computer Science Engineering from GNIOT, Greater Noida.",
        details2: " ",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
