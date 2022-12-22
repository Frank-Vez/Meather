import styled from "styled-components";

const Description = ({ text }) => {
  return (
    <div>
      <StyledP>{text.condition.text}</StyledP>
    </div>
  );
};

const StyledP = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.26em;
`;

export default Description;
