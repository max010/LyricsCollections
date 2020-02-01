import {IAppState} from '../state/app-state';
import {songsActionCreator} from '../actions/songs-actions';
import {SongService} from '../services/song-service';
import {collectionsActionCreator} from '../actions/collection-actions';
import {map, switchMap, filter, debounce, debounceTime} from 'rxjs/operators';
import {combineEpics, Epic} from 'redux-observable';
import {timer} from 'rxjs';
import {Action} from 'redux';

let songService = new SongService();

const filterSongsEpic: Epic<Action, Action, IAppState> = action$ =>
  action$.pipe(
    filter(songsActionCreator.filterSongs.started.match),
    debounceTime(500),
    switchMap(action =>
      songService.filterSongs(action.payload.page, action.payload.filter).pipe(
        map(result => {
          return songsActionCreator.filterSongs.done({
            params: undefined,
            result,
          });
        }),
      ),
    ),
  );

export default combineEpics(filterSongsEpic);
