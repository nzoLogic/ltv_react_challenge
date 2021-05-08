import React from 'react';
import styled from 'styled-components';
import useVegetable from '../../data/vegetables/useVegetable';

const DataTable = styled.table`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const TableRow = (props) => (
  <tr>
    <td>{props.children}</td>
  </tr>
)

const VegetableDataList = () => {
  const {
    vegetables,
    isFetching,
    fetchVegetablesData
  } = useVegetable();

  const noVeggies = vegetables.length === 0;

  return (
    <div className="col text-center">
      <h5>2 - Vegetables</h5>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-info"
            disabled={isFetching}
            onClick={fetchVegetablesData}
          >
            Fetch Data
          </button>
        </div>
      </div>
      <DataTable className="table text-left">
        <tbody>
          {
            showIf(!isFetching && noVeggies)(
              () => <tr><td>No data loaded</td></tr>
            )
          }
          {
            showIf(isFetching)(
              () => <TableRow>Loading...</TableRow>
            )
          }
          {
            showIf(vegetables.length && !isFetching)(
              () => vegetables.map((item, i) => (
                <tr key={Date.now() + i}>
                  <td>{item}</td>
                </tr>
              ))
            )
          }
        </tbody>
      </DataTable>
    </div>
  );
};

export default VegetableDataList;

/**
 * helper method for rendering :)
 */
function showIf(condition) {
  return function (fn) {
    if (condition) {
      return fn()
    }
    return null;
  }
}
