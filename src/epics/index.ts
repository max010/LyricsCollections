import {combineEpics} from 'redux-observable';
import collectionEpics from './collections-epics';
import songEpics from './songs-epics';
import loadAppEpics from './load-app-epics';

export default combineEpics(collectionEpics, songEpics, loadAppEpics) as any;
