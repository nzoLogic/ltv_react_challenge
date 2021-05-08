import React from 'react';
import styled from 'styled-components';
import useVegetable from '../../data/vegetables/useVegetable';

const DataTable = styled.table`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const VegetableDataList = ({
  title,
  data = [],
  requesting = false,
  fetchData,
}) => {
  const { vegetables } = useVegetable();
  
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
          {vegetables.map((item, i) => (
            <tr key={Date.now() + i}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </div>
  );
};
export default VegetableDataList;
