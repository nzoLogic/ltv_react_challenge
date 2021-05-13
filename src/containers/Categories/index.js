import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DataList from '../../components/DataList';
import VegetableDataList from '../../components/VegetableDataList';

import {
  AnimalsRequest,
} from '../../store/animals/actions';

const CategoriesContainer = styled.div`
  margin-top: 20px;
  @media only screen and (min-width: 1200px) {
    margin-top: 40px;
  }
`;

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      Animals,
      fetchAnimals,
    } = this.props;

    return (
      <CategoriesContainer>
        <div className="row">
          <DataList { ...Animals } title="1 - Animals" fetchData={ fetchAnimals } />
          <VegetableDataList />
        </div>
      </CategoriesContainer>
    );
  }
}

Categories.propTypes = {
  Animals: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    data: PropTypes.array,
    messages: PropTypes.array,
    errors: PropTypes.array,
  }),
};

const mapStateToProps = (state) => ({
  Animals: state.animals,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnimals: () => dispatch(AnimalsRequest()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
