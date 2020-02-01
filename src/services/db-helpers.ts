import {CollectionSchema, SongSchema, VersSchema} from '../models/realm-model';

export const realmConfiguration = {
  schema: [CollectionSchema, SongSchema, VersSchema],
  deleteRealmIfMigrationNeeded: true,
};
