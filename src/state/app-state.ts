import {ICollectionState} from './collections';
import {ICollection} from '../models/collection';
import {ISong} from '../models/song';

export interface IAppState {
  collections: ICollectionState;
  songs: ICollectionState;
}
