import {
  ISongsDataState,
  defaultSongsDataState,
} from '../state/songs-data-state';
import {collectionsActionCreator} from '../actions/collection-actions';
import {isType} from 'typescript-fsa';
import {songsActionCreator} from '../actions/songs-actions';

function songsData(state: ISongsDataState = defaultSongsDataState, action) {
  if (isType(action, collectionsActionCreator.getCollections.done)) {
    return {
      ...state,
      collections: action.payload.result,
    };
  }
  if (isType(action, songsActionCreator.filterSongs.started)) {
    return {
      ...state,
      songsLoading: true,
    };
  }
  if (isType(action, songsActionCreator.filterSongs.done)) {
    return {
      ...state,
      songs: action.payload.result,
      songsLoading: false,
    };
  }
  if (isType(action, songsActionCreator.filterSongs.failed)) {
    return {
      ...state,
      songsLoading: false,
    };
  }

  return state;
}

export default songsData;
