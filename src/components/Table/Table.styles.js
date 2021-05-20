import styled from "@emotion/styled";

export const TableTD = styled.td`
  font-size: 14px;
  padding-left: 50px;
  font-weight: bold;
`;

export const TableTd = styled.td`
  padding-left: 80px;
`;

export const TableTH = styled.th`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;
  padding-left: 50px;
  font-family: "Kaushan Script";
`;

export const TableContainer = styled.div`
  background-image: linear-gradient(
    315deg,
    rgba(179, 246, 216, 0.8) 0%,
    rgba(82, 167, 193, 0.8) 74%
  );
  overflow: auto;
  position: relative;
  text-align: left;
  width: 750px;
  height: 400px;
  border-radius: 5px;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;
