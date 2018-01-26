import {FILTER, TOGGLE} from './types';

export function filterTable(filter) {
    return {
        type: FILTER,
        filter
    };
}

export function toggleOption(key) {
    return {
        type: TOGGLE,
        key
    };
}
