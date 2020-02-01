import {ICollection} from '../models/collection';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('LOAD');

export const loadAppActionCreator = {
  initializeDb: actionCreator('INITIALIZE_DB'),
};

export const loadAppActions = {
  initializeDbStart: () => loadAppActionCreator.initializeDb(),
};

export type LoadAppActions = typeof loadAppActions;
