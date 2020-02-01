import {ICollection} from '../models/collection';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('COLLECTIONS');

export const collectionsActionCreator = {
  getCollections: actionCreator.async<undefined, ICollection[]>('GET'),
};

export const collectionActions = {
  getCollectionsStart: () =>
    collectionsActionCreator.getCollections.started(undefined),
};

export type CollectionActions = typeof collectionActions;
