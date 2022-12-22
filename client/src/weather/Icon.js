import styled from "styled-components";

const Icon = ({ weather }) => {
  return (
    <div>
      <StyledIcon src={weather.condition.icon} alt="current weather icon" />
    </div>
  );
};

const StyledIcon = styled.img`
  height: 150px;
  width: auto;
`;

export default Icon;
