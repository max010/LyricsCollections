export const VersSchema = {
  name: 'Vers',
  properties: {
    rows: 'string[]',
  },
};

export const SongSchema = {
  name: 'Song',
  properties: {
    number: 'int',
    verses: {type: 'list', objectType: 'Vers'},
  },
};

export const CollectionSchema = {
  name: 'Collection',
  properties: {
    name: 'string',
    songs: {type: 'list', objectType: 'Song'},
  },
};
