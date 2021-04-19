import React from 'react';
import styled from 'styled-components';

const DataTable = styled.table`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const DataList = ({
  title,
  data=[],
  requesting=false,
  fetchData,
}) => {
  let result = data.map((item, i) => (
    <tr key={Date.now() + i}>
      <td>{item}</td>
    </tr>
  ));

  if (!result.length) {
    result = (<tr><td> No data loaded</td></tr>);
  }

  if (requesting) {
    result = (<tr><td> Loading... </td></tr>);
  }

  return (
    <div className="col text-center">
      <h5>{title}</h5>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-info"
            disabled={requesting}
            onClick={fetchData}
          >
            Fetch Data
          </button>
        </div>
      </div>
      <DataTable className="table text-left">
        <tbody>
          {result}
        </tbody>
      </DataTable>
    </div>
  );
};
export default DataList;
