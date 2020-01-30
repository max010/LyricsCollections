import {ISong} from './../models/song';

export interface ISongService {
  getSongs: (page: number, filter: string) => ISong[];
}
