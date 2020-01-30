import {ICollection} from './../models/collection';
import {of, Observable} from 'rxjs';

export interface ICollectionService {
  getCollections: () => Observable<ICollection[]>;
}

export class CollectionService implements ICollectionService {
  getCollections = (): Observable<ICollection[]> => {
    return of([
      {
        id: 'ddd',
        name: 'test',
        songsCount: 5,
        author: 'ddd',
      } as ICollection,
    ]);
  };
}
