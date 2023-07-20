export interface DataStore<T> {
  isFetched: boolean;
  loading: boolean;
  isLast?: boolean;
  item?: T;
  list?: T[];
}
