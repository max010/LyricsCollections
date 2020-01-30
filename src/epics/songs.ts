import {songsActionCreator} from './../actions/songs-list';
import {SongService} from './../services/song';
import {collectionsActionCreator} from '../actions/collections';
import {map, switchMap, filter} from 'rxjs/operators';
import {combineEpics} from 'redux-observable';

let songService = new SongService();

const filterSongsEpic = action$ =>
  action$.pipe(
    filter(songsActionCreator.filterSongs.started.match),
    switchMap(action =>
      songService.filterSongs(action.payload.page, action.payload.filter).pipe(
        map(result => {
          return collectionsActionCreator.uploadToDb.done({
            params: undefined,
            result: undefined,
          });
        }),
      ),
    ),
  );

export default combineEpics(filterSongsEpic);
