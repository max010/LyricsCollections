import {ICollection} from '../models/collection';
import actionCreatorFactory from 'typescript-fsa';
import {IAppSettings} from '../state/app-settings';

const actionCreator = actionCreatorFactory('SETTINGS');

export const appSettingsActionCreator = {
  getAppSettings: actionCreator('GET'),
  setAppSettings: actionCreator<IAppSettings>('SET'),
};

export const collectionActions = {
  getAppSettings: () => appSettingsActionCreator.getAppSettings(),
  setAppSettings: (settings: IAppSettings) =>
    appSettingsActionCreator.setAppSettings(settings),
};

export type CollectionActions = typeof collectionActions;
