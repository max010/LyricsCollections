export interface ISong {
  collectionId: number;
  number: number;
  accord: string;
  verses: {
    value: string[];
  };
}
