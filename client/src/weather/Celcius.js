import styled from "styled-components";

const Celcius = ({ degrees }) => {
  return (
    <div>
      <StyledDegrees>{degrees.temp_c}°C </StyledDegrees>
    </div>
  );
};

const StyledDegrees = styled.p`
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(
    202.53deg,
    #e8fcff 24.11%,
    rgba(232, 252, 255, 0) 109.2%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Celcius;
