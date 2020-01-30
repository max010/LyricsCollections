import {ICollectionState} from './../state/collections';
import {defaultCollectionState} from '../state/collections';
import {collectionsActionCreator} from '../actions/collections';
import {isType} from 'typescript-fsa';

function collections(state: ICollectionState = defaultCollectionState, action) {
  if (isType(action, collectionsActionCreator.getCollections.done)) {
    return {
      ...state,
      collections: action.payload.result,
    };
  }

  return state;
}

export default collections;
