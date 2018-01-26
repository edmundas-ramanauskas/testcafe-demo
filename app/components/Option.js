import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

const Option = ({checked, name, onToggle}) => (
    <div>
        <label>
            <Toggle
                checked={checked}
                onChange={onToggle} />
            <span>{name}</span>
        </label>
    </div>
);

Option.propTypes = {
    checked: PropTypes.bool,
    name: PropTypes.string,
    onToggle: PropTypes.func,
};

export default Option;
