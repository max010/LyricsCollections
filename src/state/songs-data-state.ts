import {ICollection} from '../models/collection';
import {ISong} from '../models/song';

export interface ISongsDataState {
  collections: ICollection[];
  songs: ISong[];
  songsLoading: boolean;
}

export const defaultSongsDataState: ISongsDataState = {
  collections: [],
  songs: [],
  songsLoading: false,
};
