import {ISong} from './../models/song';
import {ICollection} from '../models/collection';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('SONGS');

export const songsActionCreator = {
  filterSongs: actionCreator.async<{page: number; filter: string}, ISong[]>(
    'FILTER',
  ),
};

export const songsActions = {
  getCollectionsStart: (page, filter) =>
    songsActionCreator.filterSongs.started({page, filter}),
};

export type SongsActions = typeof songsActions;
