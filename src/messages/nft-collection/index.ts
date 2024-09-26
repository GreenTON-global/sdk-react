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

export type { NftCollectionMintArgs } from './mint';
export type { NftCollectionTransferCollectionArgs } from './transferCollection';
export type { NftCollectionChangeTreeArgs } from './changeTree';
export type { NftCollectionWithdrawArgs } from './withdraw';
export type { NftCollectionAdminWithdrawArgs } from './adminWithdraw';
export type { NftCollectionLockArgs } from './lock';
export type { NftCollectionUnlockArgs } from './unlock';
