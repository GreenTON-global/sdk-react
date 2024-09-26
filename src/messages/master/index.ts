import deploy from './deploy';
import deployCollection from './deployCollection';
import deployDefaultCollection from './deployDefaultCollection';
import withdraw from './withdraw';

const master = {
  deployCollection,
  deployDefaultCollection,
  withdraw,
  deploy,
};

export default master;

export type { MasterDeployArgs } from './deploy';
export type { MasterDeployCollectionArgs } from './deployCollection';
export type { MasterDeployDefaultCollectionArgs } from './deployDefaultCollection';
export type { MasterWithdrawArgs } from './withdraw';
