import {ISong} from './../models/song';
import {ICollection} from '../models/collection';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('COLLECTIONS');

export const collectionsActionCreator = {
  getCollections: actionCreator.async<undefined, ICollection[]>('GET'),
  uploadToDb: actionCreator.async<undefined, undefined>('UPLOAD'),
};

export const collectionActions = {
  getCollectionsStart: () =>
    collectionsActionCreator.getCollections.started(undefined),
  uploadToDbStart: () => collectionsActionCreator.uploadToDb.started(),
};

export type CollectionActions = typeof collectionActions;
