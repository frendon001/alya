//import { FETCH_PHOTOS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
