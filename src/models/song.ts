export interface IVerse {
    rows: string[];
}
export interface ISong {
    collectionId: number;
    number: number;
    name: string;
    verses: IVerse[];
}