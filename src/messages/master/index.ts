import deploy from "./deploy";
import deployCollection from "./deployCollection";
import deployDefaultCollection from "./deployDefaultCollection";
import withdraw from "./withdraw";

const master = {
  deployCollection,
  deployDefaultCollection,
  withdraw,
  deploy
}

export default master;

export type { DeployArgs } from './deploy';
export type { DeployCollectionArgs } from './deployCollection';
export type { DeployDefaultCollectionArgs } from './deployDefaultCollection';
export type { WithdrawArgs } from './withdraw';
