import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by
          <a href="https://github.com/Moredebbs" target="_blank" rel="noopener">
            {" "}
            Moyinoluwa Owoeye
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/Moredebbs/react-weather-app-project"
            target="_blank"
            rel="noopener"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://react-mi-clima.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
