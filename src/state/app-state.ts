import {ISongsDataState} from './songs-data-state';
import {IAppSettings} from './app-settings';

export interface IAppState {
  songsData: ISongsDataState;
  appSettings: IAppSettings;
}
