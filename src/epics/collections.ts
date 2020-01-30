import {UploadJsonToDb} from './../services/upload-json-to-db';
import {CollectionService} from './../services/collection';
import {collectionsActionCreator} from '../actions/collections';
import {map, switchMap, filter} from 'rxjs/operators';
import {combineEpics} from 'redux-observable';

let collectionService = new CollectionService();
let uploadJsonToDb = new UploadJsonToDb();
const getCollectionsEpic = action$ =>
  action$.pipe(
    filter(collectionsActionCreator.getCollections.started.match),
    switchMap(action =>
      uploadJsonToDb.getData().pipe(
        map(result => {
          return collectionsActionCreator.uploadToDb.done({
            params: undefined,
            result: undefined,
          });
        }),
      ),
    ),
  );
// const getCollectionsEpic = action$ =>
//   action$.pipe(
//     filter(collectionsActionCreator.getCollections.started.match),
//     switchMap(action =>
//       collectionService.getCollections().pipe(
//         map(result => {
//           return collectionsActionCreator.getCollections.done({
//             params: undefined,
//             result,
//           });
//         }),
//       ),
//     ),
//   );

const uploadCollectionToDbEpic = action$ =>
  action$.pipe(
    filter(collectionsActionCreator.uploadToDb.started.match),
    switchMap(action =>
      uploadJsonToDb
        .upload(action.payload.collectionName, action.payload.songs)
        .pipe(
          map(result => {
            console.log('write to db');
            return collectionsActionCreator.uploadToDb.done({
              params: undefined,
              result: undefined,
            });
          }),
        ),
    ),
  );

export default combineEpics(getCollectionsEpic, uploadCollectionToDbEpic);
