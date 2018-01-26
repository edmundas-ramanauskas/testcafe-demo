import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {FILTER, TOGGLE} from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case FILTER:
            return action.filter;
        default:
            return state;
    }
};

const initial = [
    {key: 'opt1', name: 'Option 1', checked: false},
    {key: 'opt2', name: 'Option 2', checked: false},
    {key: 'opt3', name: 'Option 3', checked: false},
];
const options = (state = initial, {type, key}) => {
    switch (type) {
        case TOGGLE:
            return state.map(option => {
                if (key === option.key) {
                    return {...option, checked: !option.checked};
                }
                return option;
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    options,
    routing
});

export default rootReducer;
