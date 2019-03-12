import { types } from './types';
import axios from 'axios';

export const dummyThunk1 = url => async dispatch => {
  const res = await axios.get(url);
  dispatch({
        type: types.FETCH_SOMETHING1,
        payload: res.data
    })
}

export const dummyThunk2 = string => dispatch => {
  dispatch({
        type: types.FETCH_SOMETHING2,
        payload: string
    })
}

export const dummyThunk3 = index => dispatch => {
  const imageArr = ['../imgs/kermit.jpg', '../imgs/yay-type.jpg'];
  dispatch({
        type: types.CHANGE_IMAGE,
        payload: imageArr[index]
    })
}
