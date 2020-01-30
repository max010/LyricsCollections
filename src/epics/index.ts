import {combineEpics} from 'redux-observable';
import collectionEpics from './collections';

export default combineEpics(collectionEpics) as any;
