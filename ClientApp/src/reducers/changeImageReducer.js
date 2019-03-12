import { types } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case types.CHANGE_IMAGE:
            return action.payload || false;
        default:
            return state;
    }
}
