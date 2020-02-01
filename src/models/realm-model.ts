export const VersSchema = {
  name: 'Vers',
  properties: {
    value: 'string',
  },
};
export const SongSchema = {
  name: 'Song',
  primaryKey: 'number',
  properties: {
    number: 'int',
    verses: 'Vers[]',
  },
};

export const CollectionSchema = {
  name: 'Collection',
  primaryKey: 'name',
  properties: {
    name: 'string',
    songs: {type: 'list', objectType: 'Song'},
  },
};
