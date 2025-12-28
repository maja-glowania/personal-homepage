import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import store from "./core/store";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "./core/theme";
import { selectIsDarkMode } from "./common/themeSlice";

const Theme = ({ children }) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>
);
