import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = ({options, onToggle}) => (
    <div>{options.map(({key, ...option}) =>
        <Option key={key} {...option} onToggle={() => onToggle(key)} />
    )}
    </div>
);

Options.propTypes = {
    options: PropTypes.array,
    onToggle: PropTypes.func,
};

export default Options;
