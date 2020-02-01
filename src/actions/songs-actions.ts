import {ISong} from '../models/song';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('SONGS');

export const songsActionCreator = {
  filterSongs: actionCreator.async<{page: number; filter: string}, ISong[]>(
    'FILTER',
  ),
};

export const songsActions = {
  filterSongsStart: (page, filter) =>
    songsActionCreator.filterSongs.started({page, filter}),
};

export type SongsActions = typeof songsActions;
