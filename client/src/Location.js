import { useContext } from "react";
import { DataContext } from "./WeatherContext";
import { GoLocation } from "react-icons/go";

import styled from "styled-components";
const Location = () => {
  const { weatherData } = useContext(DataContext);

  return (
    <Wrapper>
      <StyledLocationP>
        <GoLocation />
        {weatherData.location.name}, {weatherData.location.region}
      </StyledLocationP>
    </Wrapper>
  );
};

const StyledLocationP = styled.p`
  font-size: 18px;
  display: flex;
  gap: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Location;
