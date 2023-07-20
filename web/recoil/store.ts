export interface DataStore<T> {
  isFetched: boolean;
  loading: boolean;
  isLast?: boolean;
  data: T;
}
