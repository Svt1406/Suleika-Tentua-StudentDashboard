import styled from "@emotion/styled";

export const Header = styled.h3`
  font-size: 24px;
  color: rgba(82, 167, 193, 0.8);
  font-family: "Kaushan Script";
  margin-bottom: 5px;
`;

export const ProjectFilter = styled.div`
  padding: 10px;
  display: inline-block;
  width: 950px;
  margin-bottom: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`;

export const ProjectInput = styled.input`
cursor: pointer;
`;

export const ProjectFilterP = styled.div`
  text-align: left;
  columns: 5 10em;
  display: block;
  float: left;
  width: 25%;
`;

export const ProjectFilterLabel = styled.label`
font-size: 0.7rem;
padding-left: 10px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 1px;
  background: rgba(2, 128, 144, 0.8);
  padding: 5px 10px;
  margin: 20px 10px;
  color: rgba(255, 255, 255);
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 2s. ease;

  :hover {
    background-color: rgba(223, 163, 117, 0.4);
    color: rgb(102, 102, 102);
  }
`;