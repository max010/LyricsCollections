import {ISong} from './../models/song';
import {CollectionSchema, SongSchema} from './../models/realm-model';
import * as Realm from 'realm';
import {from, of} from 'rxjs';
let pv3000Json = require('../../song-sources/pv3000.json');

export class UploadJsonToDb {
  upload = () => {
    return from(
      Realm.open({
        schema: [CollectionSchema, SongSchema],
        deleteRealmIfMigrationNeeded: true,
      }).then(realm => {
        try {
          return realm.write(() => {
            realm.create('Collection', {
              name: 'Песнь Возрождения 3000',
              songs: [...pv3000Json],
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
        schema: [CollectionSchema, SongSchema],
        deleteRealmIfMigrationNeeded: true,
      }).then(realm => {
        let songs = realm.objects<ISong[]>('Song').filtered('number == 10');
        // console.log('bb', (song[0] as ISong).accord);
        console.log('bb', songs);
        return of();
      }),
    );
  };
}
