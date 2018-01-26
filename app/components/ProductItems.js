import PropTypes from 'prop-types';
import React from 'react';
import ProductRow from './ProductRow';

const Items = ({ prefix, onSelect, products }) => {
    return (<div>
        {products
            .filter(p => {
                const nameLC = p.name.toLowerCase();
                const filterLC = prefix.toLowerCase();
                return nameLC.indexOf(filterLC) !== -1;
            })
            .map(p => {
                return <ProductRow key={p.name} data={p} onClick={onSelect} />;
            })}
    </div>);
};

Items.propTypes = {
    prefix: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

export default Items;
