import {loadAppActionCreator} from './../actions/app-load-actions';
import {IAppState} from '../state/app-state';
import {songsActionCreator} from '../actions/songs-actions';
import {SongService} from '../services/song-service';
import {collectionsActionCreator} from '../actions/collection-actions';
import {map, switchMap, filter, debounce, debounceTime} from 'rxjs/operators';
import {combineEpics, Epic} from 'redux-observable';
import {timer} from 'rxjs';
import {Action} from 'redux';
import {DbInitializationService} from '../services/db-initialization-service';

let dbInitializationService = new DbInitializationService();

const loadAppEpic: Epic<Action, Action, IAppState> = action$ =>
  action$.pipe(
    filter(loadAppActionCreator.initializeDb.match),
    switchMap(action => {
      return dbInitializationService
        .initializeDb()
        .pipe(
          map(() => collectionsActionCreator.getCollections.started(undefined)),
        );
    }),
  );

export default combineEpics(loadAppEpic);
