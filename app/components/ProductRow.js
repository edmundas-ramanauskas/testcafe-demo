import PropTypes from 'prop-types';
import React from 'react';
import {compose, mapProps} from 'recompose';
import withHover from '../libs/withHover';

const style = {
    display: 'block',
    cursor: 'pointer',
    textDecoration: 'underline'
};

const whenActive = compose(
    withHover,
    mapProps(({isHovering, isActive, ...props}) => ({
        isActive: isActive || isHovering,
        ...props,
    })),
  );

const ProductRow = whenActive(({ data, onClick }) =>
    <a style={style} onClick={() => onClick(data.name)}>{data.name} = {data.price}</a>);

ProductRow.displayName = 'ProductRow';
ProductRow.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func.isRequired,
};

export default ProductRow;
