export const SongSchema = {
  name: 'Song',
  properties: {
    number: 'int',
    verses: 'string[]',
  },
};

export const CollectionSchema = {
  name: 'Collection',
  properties: {
    name: 'string',
    songs: {type: 'list', objectType: 'Song'},
  },
};
