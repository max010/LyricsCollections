import {ICollection} from '../models/collection';
import {Observable, from} from 'rxjs';
import {map} from 'rxjs/operators';
import * as Realm from 'realm';
import {realmConfiguration} from './db-helpers';

export interface ICollectionService {
  getCollections: () => Observable<ICollection[]>;
}

export class CollectionService implements ICollectionService {
  getCollections = (): Observable<ICollection[]> => {
    return from(Realm.open(realmConfiguration)).pipe(
      map(realm => {
        return (realm.objects('Collection') as any) as ICollection[];
      }),
    );
  };
}
