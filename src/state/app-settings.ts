import {ICollection} from '../models/collection';
import {ISong} from '../models/song';

export interface IAppSettings {
  versFontSize: number;
  versFontWeight: string;
  colorScheme: 1;
}

export const defaultAppSettings: IAppSettings = {
  versFontSize: 18,
  versFontWeight: 'normal',
  colorScheme: 1,
};
