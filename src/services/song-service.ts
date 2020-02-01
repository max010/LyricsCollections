import {ISong} from '../models/song';
import {from, Observable} from 'rxjs';
import * as Realm from 'realm';
import {map} from 'rxjs/operators';
import {realmConfiguration} from './db-helpers';

export interface ISongService {
  filterSongs: (page: number, filter: string) => {};
}

export class SongService {
  filterSongs = (page: number, filter: string): Observable<ISong[]> => {
    return from(Realm.open(realmConfiguration)).pipe(
      map(realm => {
        var number = Number.parseInt(filter, 10);
        let songs = realm
          .objects<ISong[]>('Song')
          .filtered(
            Number.isNaN(number)
              ? `ANY verses.value CONTAINS[c] $0`
              : `number == $1`,
            filter,
            number,
          );
        return (Array.from(songs) as any) as ISong[];
      }),
    );
  };
}
