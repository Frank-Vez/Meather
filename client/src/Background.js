import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "./WeatherContext";

const Background = () => {
  const { weatherData } = useContext(DataContext);

  console.log(weatherData.current.is_day);

  return <StyledBody isday={weatherData.current.is_day}></StyledBody>;
};

const StyledBody = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: ${(props) =>
    props.isday === 0 ? "rgb(113,43,117)" : "rgb(66,194,255)"};
  z-index: -1;
`;

export default Background;
