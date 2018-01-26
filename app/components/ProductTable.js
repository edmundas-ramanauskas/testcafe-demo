import PropTypes from 'prop-types';
import React from 'react';
import Items from './ProductItems';

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const ProductTable = ({filter, onSelect}) =>
    <Items prefix={filter} onSelect={onSelect} products={products} />;

ProductTable.propTypes = {
    filter: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
};

export default ProductTable;
