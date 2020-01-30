import {CollectionSchema, SongSchema} from './../models/realm-model';
import {ISong} from './../models/song';
import {from, of} from 'rxjs';
import * as Realm from 'realm';

export interface ISongService {
  filterSongs: (page: number, filter: string) => {};
}

export class SongService {
  filterSongs = (page: number, filter: string) => {
    return from(
      Realm.open({
        schema: [CollectionSchema, SongSchema],
        deleteRealmIfMigrationNeeded: true,
      }).then(realm => {
        var number = Number.parseInt(filter, 10);
        let songs = realm
          .objects<ISong[]>('Song')
          .filtered(
            Number.isNaN(number)
              ? `verses CONTAINS[${filter}]`
              : `number == ${number}`,
          );
        // console.log('bb', (song[0] as ISong).accord);
        return of(songs);
      }),
    );
  };
}
