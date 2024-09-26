import addCoordinates from "./addCoordinates";
import destroy from "./destroy";
import getStaticData from "./getStaticData";
import proveOwnership from "./proveOwnership";
import reassignSBT from "./reassignSBT";
import requestOwner from "./requestOwner";
import revoke from "./revoke";
import transfer from "./transfer";

const nftItem = {
  revoke,
  transfer,
  getStaticData,
  proveOwnership,
  destroy,
  reassignSBT,
  addCoordinates,
  requestOwner
}

export default nftItem;

export type { NftItemAddCoordinatesArgs } from './addCoordinates';
export type { NftItemDestroyArgs } from './destroy';
export type { NftItemGetStaticDataArgs } from './getStaticData';
export type { NftItemProveOwnershipArgs } from './proveOwnership';
export type { NftItemReassignSBTArgs } from './reassignSBT';
export type { NftItemRequestOwnerArgs } from './requestOwner';
export type { NftItemRevokeArgs } from './revoke';
export type { NftItemTransferArgs } from './transfer';

