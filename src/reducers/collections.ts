import { ICollectionState } from './../state/collections';
import { defaultCollectionState } from "../state/collections";


function collections(state: ICollectionState = defaultCollectionState, action) {
  switch (action.type) {
    case 'Get':
      return {
        ...state,
        collections: action.payload.data
      }
    default:
      return state
  }
}

export default collections;