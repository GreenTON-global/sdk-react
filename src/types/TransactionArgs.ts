export interface TransactionArgs<T> {
  validUntil: number;
  message: T;
}
