import { useContext } from "react";
import { DataContext } from "../WeatherContext";
import styled from "styled-components";
import Celcius from "./Celcius";
import Icon from "./Icon";
import Description from "./Description";
const WeatherWrapper = () => {
  const { weatherData } = useContext(DataContext);
  return (
    <Wrapper>
      <Celcius degrees={weatherData.current} />
      <Icon weather={weatherData.current} />
      <Description text={weatherData.current} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default WeatherWrapper;
