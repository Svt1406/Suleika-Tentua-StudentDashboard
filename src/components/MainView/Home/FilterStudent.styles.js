import styled from "@emotion/styled";

export const FilterContainer = styled.div`
  display: block;
  width: 175px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 15px 30px;
  margin: 25px;
`;

export const Header = styled.h3`
  font-size: 24px;
  color: rgba(82, 167, 193, 0.8);
  font-family: "Kaushan Script";
  margin: 10px 0;
`;

export const Filter = styled.div`
  text-align: left;
  columns: 4 5em;
  display: block;
  float: left;
  width: 50%;
`;

export const Input = styled.input`
  padding-left: 15px;
  cursor: pointer;
`;

export const FilterLabel = styled.label`
  padding-left: 10px;
  font-size: 0.8rem;
`;
