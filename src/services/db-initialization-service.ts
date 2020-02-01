import {realmConfiguration} from './db-helpers';
import {map} from 'rxjs/operators';
import {ISong} from '../models/song';
import {CollectionSchema, SongSchema, VersSchema} from '../models/realm-model';
import * as Realm from 'realm';
import {from, of} from 'rxjs';
let pv3000Json = require('../../song-sources/pv3000.json');

export class DbInitializationService {
  initializeDb = () => {
    return from(
      Realm.open(realmConfiguration).then(realm => {
        try {
          if (realm.objects('Collection').length > 0) {
            return of();
          } else {
            return realm.write(() => {
              this.loadPV3000(realm);
            });
          }
        } catch (e) {
          console.log('Error on creation', e);
          return of(e);
        }
      }),
    );
  };

  private loadPV3000 = (realm: Realm) => {
    const processedJson = pv3000Json.map(s => ({
      number: s.number,
      accord: s.accord,
      verses: s.verses.map(v => ({value: v})),
    }));

    realm.create('Collection', {
      name: 'Песнь Возрождения 3000',
      songs: [...processedJson],
    });
  };
}
