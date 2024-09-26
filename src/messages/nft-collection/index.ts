import changeTree from "./changeTree";
import transferCollection from "./transferCollection";
import mint from "./mint";
import withdraw from "./withdraw";
import adminWithdraw from "./adminWithdraw";
import lock from "./lock";
import unlock from "./unlock";

const nftCollection = {
  mint,
  transferCollection,
  changeTree,
  withdraw,
  adminWithdraw,
  lock,
  unlock
}

export default nftCollection;

export type { MintArgs } from './mint';
export type { TransferCollectionArgs } from './transferCollection';
export type { ChangeTreeArgs } from './changeTree';
export type { WithdrawArgs } from './withdraw';
export type { AdminWithdrawArgs } from './adminWithdraw';
export type { LockArgs } from './lock';
export type { UnlockArgs } from './unlock';
