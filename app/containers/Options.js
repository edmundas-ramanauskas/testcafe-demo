import { connect } from 'react-redux';
import {compose} from 'recompose';
import {createStructuredSelector} from 'reselect';
import {prop} from 'ramda';
import { toggleOption } from '../actions';
import Options from '../components/Options';

export default compose(
    connect(
        createStructuredSelector({
            options: prop('options')
        }),
        {
            onToggle: toggleOption
        }
    ),
)(Options);
