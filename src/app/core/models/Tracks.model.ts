import {ArtistModel} from '@core/models/Artist.model';

export interface TrackModel {
  name: string,
  album: string,
  cover: string,
  url: string,
  _id: string | number,
  artist?: ArtistModel,
}
