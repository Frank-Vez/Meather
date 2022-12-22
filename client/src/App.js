import { useContext } from "react";
import { DataContext } from "./WeatherContext";
import styled from "styled-components";

import Background from "./Background";
import GlobalStyle from "./GlobalStyle";
import Location from "./Location";
import WeatherWrapper from "./weather/WeatherWrapper";
import TimeStamp from "./TimeStamp";

const App = () => {
  const { weatherData } = useContext(DataContext);

  return (
    <>
      <GlobalStyle />
      {!weatherData ? (
        <div>...Loading</div>
      ) : (
        <StyledApp>
          <Background />
          <Location />
          <WeatherWrapper />
          <TimeStamp />
        </StyledApp>
      )}
    </>
  );
};

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default App;
