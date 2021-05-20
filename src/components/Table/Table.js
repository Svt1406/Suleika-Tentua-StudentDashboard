import * as s from "../Table/Table.styles";

const Table = ({ data }) => {
  const handleColClick = (event) => {
    console.log("clickie click", event.target.innerHTML);
  };
  const tableDataJsx = data.map((item) => {
    return (
      <tr key={item.id}>
        <s.TableTD>{item.name}</s.TableTD>
        <s.TableTD>{item.project}</s.TableTD>
        <s.TableTd>{item.difficulty}</s.TableTd>
        <s.TableTd>{item.niceness}</s.TableTd>
      </tr>
    );
  });

  return (
    <s.TableContainer>
      <table>
        <thead>
          <tr key="header">
            <s.TableTH>Name</s.TableTH>
            <s.TableTH onClick={(event) => handleColClick(event)}>
              Project
            </s.TableTH>
            <s.TableTH onClick={(event) => handleColClick(event)}>
              Difficulty
            </s.TableTH>
            <s.TableTH onClick={(event) => handleColClick(event)}>
              Niceness
            </s.TableTH>
          </tr>
        </thead>
        <tbody key="body">{tableDataJsx}</tbody>
      </table>
    </s.TableContainer>
  );
};

export default Table;
