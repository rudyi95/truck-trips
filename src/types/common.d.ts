declare interface ITrip {
  id: string;
  startL: string;
  endL: string;
  startD: string;
  endD: string;
  gross: string;
  miles: string;
}

declare type Nullable<T> = T | null;
