import {combineEpics} from 'redux-observable';
import collectionEpics from './collections';
import songEpics from './songs';

export default combineEpics(collectionEpics, songEpics) as any;
