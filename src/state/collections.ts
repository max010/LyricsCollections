import { ICollection } from './../models/collection';
import { ISong } from "../models/song";

export interface ICollectionState {
    collections: ICollection[];
    songs: ISong[];
}

export const defaultCollectionState: ICollectionState = {
    collections: [],
    songs: [],
}