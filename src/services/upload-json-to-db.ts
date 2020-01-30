import {
  CollectionSchema,
  SongSchema,
  VersSchema,
} from './../models/realm-model';
import {ISong} from '../models/song';
import * as Realm from 'realm';
import {from, of} from 'rxjs';

export class UploadJsonToDb {
  upload = (collectionName: string, songs: ISong[]) => {
    let ps = songs.map(s => ({
      number: s.number,
      verses: [{rows: [...s.verses]}],
    }));

    console.log(songs, ps);
    return from(
      Realm.open({
        schema: [CollectionSchema, SongSchema, VersSchema],
        deleteRealmIfMigrationNeeded: true,
      }).then(realm => {
        try {
          return realm.write(() => {
            return realm.create('Collection', {
              name: collectionName,
              songs: [...ps],
            });
          });
        } catch (e) {
          console.log('Error on creation', e);
          return of(e);
        }
      }),
    );
  };
  getData = () => {
    return from(
      Realm.open({
        schema: [CollectionSchema, SongSchema, VersSchema],
        deleteRealmIfMigrationNeeded: true,
      }).then(realm => {
        let Song = JSON.stringify(realm.objects('Song'));
        console.log('bb', Song);
        return of();
      }),
    );
  };
}
