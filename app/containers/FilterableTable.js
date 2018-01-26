import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {compose, lifecycle} from 'recompose';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const FilterableTable = ({ filter, onFilter }) => {
    let input;

    return (
        <div className={filterableTable}>
            <input
                value={filter}
                ref={node => {input = node;}}
                onChange={() => onFilter(input.value)} />

            <ProductTable filter={filter} onSelect={onFilter} />
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle({
        componentDidMount() {
            window.addEventListener('test', ({detail}) => {
                this.props.onFilter(detail);
            }, false);
        }
    })
)(FilterableTable);
