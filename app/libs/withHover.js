import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';
import {compose, mapProps, withHandlers, withState} from 'recompose';

export default Component => {
    const WithHover = ({onEnter, onLeave, ...props}) => (
    <Component onMouseEnter={onEnter} onMouseLeave={onLeave} {...props} />
  );
    WithHover.propTypes = {
        onEnter: PropTypes.func.isRequired,
        onLeave: PropTypes.func.isRequired,
    };

    return compose(
        withState('isHovering', 'setIsHovering', false),
        withHandlers({
            onEnter: ({setIsHovering}) => () => {
                setIsHovering(true);
            },
            onLeave: ({setIsHovering}) => () => {
                setIsHovering(false);
            },
        }),
        mapProps(omit(['setIsHovering'])),
    )(WithHover);
};
