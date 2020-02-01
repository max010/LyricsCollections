import {defaultAppSettings} from './../state/app-settings';
import {collectionsActionCreator} from '../actions/collection-actions';
import {isType} from 'typescript-fsa';
import {IAppSettings} from '../state/app-settings';

function appSettings(state: IAppSettings = defaultAppSettings, action) {
  if (isType(action, collectionsActionCreator.getCollections.done)) {
    return {
      ...state,
      collections: action.payload.result,
    };
  }

  return state;
}

export default appSettings;
