import { useContext } from "react";
import { DataContext } from "./WeatherContext";
import moment from "moment";
import styled from "styled-components";

const TimeStamp = () => {
  const { weatherData } = useContext(DataContext);
  console.log(weatherData);
  return (
    <Wrapper>
      <p>{moment(weatherData.current.last_updated).format("dddd")}</p>
      <p>{moment(weatherData.current.last_updated).format("d/mm/yyyy")}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default TimeStamp;
