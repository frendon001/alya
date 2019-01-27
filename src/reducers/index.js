import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
//import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  photos: photosReducer
});
