import {CollectionActions} from '../actions/collection-actions';
import {IAppState} from '../state/app-state';
import {DbInitializationService} from '../services/db-initialization-service';
import {CollectionService} from '../services/collection-service';
import {collectionsActionCreator} from '../actions/collection-actions';
import {map, switchMap, filter} from 'rxjs/operators';
import {combineEpics, Epic} from 'redux-observable';
import {Action} from 'redux';

let collectionService = new CollectionService();

const getCollectionsEpic: Epic<Action, Action, IAppState> = action$ =>
  action$.pipe(
    filter(collectionsActionCreator.getCollections.started.match),
    switchMap(action =>
      collectionService.getCollections().pipe(
        map(result => {
          return collectionsActionCreator.getCollections.done({
            params: undefined,
            result,
          });
        }),
      ),
    ),
  );

export default combineEpics(getCollectionsEpic);
