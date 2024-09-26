import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue
} from '@ton/core';

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
}

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}





export type Context = {
  $$type: 'Context';
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Slice;
}

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw.asCell());
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef().asSlice();
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}





export type SendParameters = {
  $$type: 'SendParameters';
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
    if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
    if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}





export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
}

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}





export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}





export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}





export type DeployDefaultCollection = {
  $$type: 'DeployDefaultCollection';
  business_address: Address;
  collection_content: Cell;
}

export function storeDeployDefaultCollection(src: DeployDefaultCollection) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2152417869, 32);
    b_0.storeAddress(src.business_address);
    b_0.storeRef(src.collection_content);
  };
}

export function loadDeployDefaultCollection(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2152417869) { throw Error('Invalid prefix'); }
  let _business_address = sc_0.loadAddress();
  let _collection_content = sc_0.loadRef();
  return { $$type: 'DeployDefaultCollection' as const, business_address: _business_address, collection_content: _collection_content };
}





export type DeployCollection = {
  $$type: 'DeployCollection';
  collection_init: StateInit;
  business_address: Address;
  collection_content: Cell;
}

export function storeDeployCollection(src: DeployCollection) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(4229368130, 32);
    b_0.store(storeStateInit(src.collection_init));
    b_0.storeAddress(src.business_address);
    b_0.storeRef(src.collection_content);
  };
}

export function loadDeployCollection(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4229368130) { throw Error('Invalid prefix'); }
  let _collection_init = loadStateInit(sc_0);
  let _business_address = sc_0.loadAddress();
  let _collection_content = sc_0.loadRef();
  return { $$type: 'DeployCollection' as const, collection_init: _collection_init, business_address: _business_address, collection_content: _collection_content };
}





export type TransferCollection = {
  $$type: 'TransferCollection';
  business_address: Address;
  admin_address: Address;
  collection_content: Cell;
}

export function storeTransferCollection(src: TransferCollection) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1891763028, 32);
    b_0.storeAddress(src.business_address);
    b_0.storeAddress(src.admin_address);
    b_0.storeRef(src.collection_content);
  };
}

export function loadTransferCollection(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1891763028) { throw Error('Invalid prefix'); }
  let _business_address = sc_0.loadAddress();
  let _admin_address = sc_0.loadAddress();
  let _collection_content = sc_0.loadRef();
  return { $$type: 'TransferCollection' as const, business_address: _business_address, admin_address: _admin_address, collection_content: _collection_content };
}





export type LogEventMintRecord = {
  $$type: 'LogEventMintRecord';
  minter: Address;
  item_id: bigint;
  generate_number: bigint;
}

export function storeLogEventMintRecord(src: LogEventMintRecord) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2743565669, 32);
    b_0.storeAddress(src.minter);
    b_0.storeInt(src.item_id, 257);
    b_0.storeInt(src.generate_number, 257);
  };
}

export function loadLogEventMintRecord(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2743565669) { throw Error('Invalid prefix'); }
  let _minter = sc_0.loadAddress();
  let _item_id = sc_0.loadIntBig(257);
  let _generate_number = sc_0.loadIntBig(257);
  return { $$type: 'LogEventMintRecord' as const, minter: _minter, item_id: _item_id, generate_number: _generate_number };
}





export type Tree = {
  $$type: 'Tree';
  name: string;
  type: string;
  region: string;
  location: string;
}

export function storeTree(src: Tree) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.name);
    b_0.storeStringRefTail(src.type);
    let b_1 = new Builder();
    b_1.storeStringRefTail(src.region);
    b_1.storeStringRefTail(src.location);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadTree(slice: Slice) {
  let sc_0 = slice;
  let _name = sc_0.loadStringRefTail();
  let _type = sc_0.loadStringRefTail();
  let sc_1 = sc_0.loadRef().beginParse();
  let _region = sc_1.loadStringRefTail();
  let _location = sc_1.loadStringRefTail();
  return { $$type: 'Tree' as const, name: _name, type: _type, region: _region, location: _location };
}





export type Mint = {
  $$type: 'Mint';
  tree: Tree;
  destination: Address;
  order_id: bigint | null;
}

export function storeMint(src: Mint) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1061030527, 32);
    b_0.store(storeTree(src.tree));
    b_0.storeAddress(src.destination);
    if (src.order_id !== null && src.order_id !== undefined) { b_0.storeBit(true).storeUint(src.order_id, 64); } else { b_0.storeBit(false); }
  };
}

export function loadMint(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1061030527) { throw Error('Invalid prefix'); }
  let _tree = loadTree(sc_0);
  let _destination = sc_0.loadAddress();
  let _order_id = sc_0.loadBit() ? sc_0.loadUintBig(64) : null;
  return { $$type: 'Mint' as const, tree: _tree, destination: _destination, order_id: _order_id };
}





export type ChangeTree = {
  $$type: 'ChangeTree';
  tree: Tree;
  price: bigint | null;
}

export function storeChangeTree(src: ChangeTree) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2971782004, 32);
    b_0.store(storeTree(src.tree));
    if (src.price !== null && src.price !== undefined) { b_0.storeBit(true).storeCoins(src.price); } else { b_0.storeBit(false); }
  };
}

export function loadChangeTree(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2971782004) { throw Error('Invalid prefix'); }
  let _tree = loadTree(sc_0);
  let _price = sc_0.loadBit() ? sc_0.loadCoins() : null;
  return { $$type: 'ChangeTree' as const, tree: _tree, price: _price };
}





export type Transfer = {
  $$type: 'Transfer';
  query_id: bigint;
  new_owner: Address;
  business_address: Address;
  custom_payload: Cell | null;
  forward_amount: bigint;
  forward_payload: Slice;
}

export function storeTransfer(src: Transfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1607220500, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.new_owner);
    b_0.storeAddress(src.business_address);
    if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
    b_0.storeCoins(src.forward_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1607220500) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _new_owner = sc_0.loadAddress();
  let _business_address = sc_0.loadAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _forward_amount = sc_0.loadCoins();
  let _forward_payload = sc_0;
  return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, business_address: _business_address, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}





export type OwnershipAssigned = {
  $$type: 'OwnershipAssigned';
  query_id: bigint;
  prev_owner: Address;
  forward_payload: Slice;
}

export function storeOwnershipAssigned(src: OwnershipAssigned) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(85167505, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.prev_owner);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadOwnershipAssigned(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 85167505) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _prev_owner = sc_0.loadAddress();
  let _forward_payload = sc_0;
  return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}





export type Excesses = {
  $$type: 'Excesses';
  query_id: bigint;
}

export function storeExcesses(src: Excesses) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3576854235, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadExcesses(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: 'Excesses' as const, query_id: _query_id };
}





export type GetStaticData = {
  $$type: 'GetStaticData';
  query_id: bigint;
}

export function storeGetStaticData(src: GetStaticData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(801842850, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadGetStaticData(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 801842850) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: 'GetStaticData' as const, query_id: _query_id };
}





export type ReportStaticData = {
  $$type: 'ReportStaticData';
  query_id: bigint;
  index: bigint;
  collection: Address;
}

export function storeReportStaticData(src: ReportStaticData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2339837749, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeUint(src.index, 256);
    b_0.storeAddress(src.collection);
  };
}

export function loadReportStaticData(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2339837749) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _index = sc_0.loadUintBig(256);
  let _collection = sc_0.loadAddress();
  return { $$type: 'ReportStaticData' as const, query_id: _query_id, index: _index, collection: _collection };
}





export type Coordinates = {
  $$type: 'Coordinates';
  latitude: bigint | null;
  longitude: bigint | null;
}

export function storeCoordinates(src: Coordinates) {
  return (builder: Builder) => {
    let b_0 = builder;
    if (src.latitude !== null && src.latitude !== undefined) { b_0.storeBit(true).storeUint(src.latitude, 32); } else { b_0.storeBit(false); }
    if (src.longitude !== null && src.longitude !== undefined) { b_0.storeBit(true).storeUint(src.longitude, 32); } else { b_0.storeBit(false); }
  };
}

export function loadCoordinates(slice: Slice) {
  let sc_0 = slice;
  let _latitude = sc_0.loadBit() ? sc_0.loadUintBig(32) : null;
  let _longitude = sc_0.loadBit() ? sc_0.loadUintBig(32) : null;
  return { $$type: 'Coordinates' as const, latitude: _latitude, longitude: _longitude };
}


function loadGetterTupleCoordinates(source: TupleReader) {
  let _latitude = source.readBigNumberOpt();
  let _longitude = source.readBigNumberOpt();
  return { $$type: 'Coordinates' as const, latitude: _latitude, longitude: _longitude };
}



export type AddCoordinates = {
  $$type: 'AddCoordinates';
  coordinates: Coordinates;
}

export function storeAddCoordinates(src: AddCoordinates) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3619288943, 32);
    b_0.store(storeCoordinates(src.coordinates));
  };
}

export function loadAddCoordinates(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3619288943) { throw Error('Invalid prefix'); }
  let _coordinates = loadCoordinates(sc_0);
  return { $$type: 'AddCoordinates' as const, coordinates: _coordinates };
}





export type ProveOwnership = {
  $$type: 'ProveOwnership';
  query_id: bigint;
  dest: Address;
  forward_payload: Cell;
  with_content: boolean;
}

export function storeProveOwnership(src: ProveOwnership) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(81711432, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.dest);
    b_0.storeRef(src.forward_payload);
    b_0.storeBit(src.with_content);
  };
}

export function loadProveOwnership(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 81711432) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _dest = sc_0.loadAddress();
  let _forward_payload = sc_0.loadRef();
  let _with_content = sc_0.loadBit();
  return { $$type: 'ProveOwnership' as const, query_id: _query_id, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}





export type OwnershipProof = {
  $$type: 'OwnershipProof';
  query_id: bigint;
  item_id: bigint;
  owner: Address;
  data: Cell;
  revoked_at: bigint;
  content: Cell | null;
}

export function storeOwnershipProof(src: OwnershipProof) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(86296494, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeUint(src.item_id, 256);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.data);
    b_0.storeUint(src.revoked_at, 64);
    if (src.content !== null && src.content !== undefined) { b_0.storeBit(true).storeRef(src.content); } else { b_0.storeBit(false); }
  };
}

export function loadOwnershipProof(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 86296494) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _item_id = sc_0.loadUintBig(256);
  let _owner = sc_0.loadAddress();
  let _data = sc_0.loadRef();
  let _revoked_at = sc_0.loadUintBig(64);
  let _content = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'OwnershipProof' as const, query_id: _query_id, item_id: _item_id, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}





export type RequestOwner = {
  $$type: 'RequestOwner';
  query_id: bigint;
  dest: Address;
  forward_payload: Cell;
  with_content: boolean;
}

export function storeRequestOwner(src: RequestOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3502489578, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.dest);
    b_0.storeRef(src.forward_payload);
    b_0.storeBit(src.with_content);
  };
}

export function loadRequestOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3502489578) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _dest = sc_0.loadAddress();
  let _forward_payload = sc_0.loadRef();
  let _with_content = sc_0.loadBit();
  return { $$type: 'RequestOwner' as const, query_id: _query_id, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}





export type OwnerInfo = {
  $$type: 'OwnerInfo';
  query_id: bigint;
  item_id: bigint;
  initiator: Address;
  owner: Address;
  data: Cell;
  revoked_at: bigint;
  content: Cell | null;
}

export function storeOwnerInfo(src: OwnerInfo) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(232130531, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeUint(src.item_id, 256);
    b_0.storeAddress(src.initiator);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.data);
    b_0.storeUint(src.revoked_at, 64);
    if (src.content !== null && src.content !== undefined) { b_0.storeBit(true).storeRef(src.content); } else { b_0.storeBit(false); }
  };
}

export function loadOwnerInfo(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 232130531) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _item_id = sc_0.loadUintBig(256);
  let _initiator = sc_0.loadAddress();
  let _owner = sc_0.loadAddress();
  let _data = sc_0.loadRef();
  let _revoked_at = sc_0.loadUintBig(64);
  let _content = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'OwnerInfo' as const, query_id: _query_id, item_id: _item_id, initiator: _initiator, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}





export type Destroy = {
  $$type: 'Destroy';
  query_id: bigint;
}

export function storeDestroy(src: Destroy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(520377210, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadDestroy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 520377210) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: 'Destroy' as const, query_id: _query_id };
}





export type Revoke = {
  $$type: 'Revoke';
  query_id: bigint;
}

export function storeRevoke(src: Revoke) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1871312355, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadRevoke(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1871312355) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: 'Revoke' as const, query_id: _query_id };
}





export type ReassignSBT = {
  $$type: 'ReassignSBT';
  new_owner: Address;
}

export function storeReassignSBT(src: ReassignSBT) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3986195783, 32);
    b_0.storeAddress(src.new_owner);
  };
}

export function loadReassignSBT(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3986195783) { throw Error('Invalid prefix'); }
  let _new_owner = sc_0.loadAddress();
  return { $$type: 'ReassignSBT' as const, new_owner: _new_owner };
}





export type CollectionData = {
  $$type: 'CollectionData';
  next_item_index: bigint;
  collection_content: Cell;
  owner_address: Address;
}

export function storeCollectionData(src: CollectionData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.next_item_index, 257);
    b_0.storeRef(src.collection_content);
    b_0.storeAddress(src.owner_address);
  };
}

export function loadCollectionData(slice: Slice) {
  let sc_0 = slice;
  let _next_item_index = sc_0.loadIntBig(257);
  let _collection_content = sc_0.loadRef();
  let _owner_address = sc_0.loadAddress();
  return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}





export type NftCollection$Data = {
  $$type: 'NftCollection$Data';
  collection_index: bigint;
  admin_address: Address;
  business_address: Address;
  collection_content: Cell;
  next_item_index: bigint;
  avaliable_trees: Dictionary<bigint, number>;
  is_locked: boolean;
  admin_funds: bigint;
  catalog_size: bigint;
}

export function storeNftCollection$Data(src: NftCollection$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(src.collection_index, 16);
    b_0.storeAddress(src.admin_address);
    b_0.storeAddress(src.business_address);
    b_0.storeRef(src.collection_content);
    b_0.storeUint(src.next_item_index, 32);
    b_0.storeDict(src.avaliable_trees, Dictionary.Keys.BigUint(256), Dictionary.Values.Uint(16));
    b_0.storeBit(src.is_locked);
    b_0.storeCoins(src.admin_funds);
    b_0.storeUint(src.catalog_size, 8);
  };
}

export function loadNftCollection$Data(slice: Slice) {
  let sc_0 = slice;
  let _collection_index = sc_0.loadUintBig(16);
  let _admin_address = sc_0.loadAddress();
  let _business_address = sc_0.loadAddress();
  let _collection_content = sc_0.loadRef();
  let _next_item_index = sc_0.loadUintBig(32);
  let _avaliable_trees = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.Uint(16), sc_0);
  let _is_locked = sc_0.loadBit();
  let _admin_funds = sc_0.loadCoins();
  let _catalog_size = sc_0.loadUintBig(8);
  return { $$type: 'NftCollection$Data' as const, collection_index: _collection_index, admin_address: _admin_address, business_address: _business_address, collection_content: _collection_content, next_item_index: _next_item_index, avaliable_trees: _avaliable_trees, is_locked: _is_locked, admin_funds: _admin_funds, catalog_size: _catalog_size };
}





export type NftData = {
  $$type: 'NftData';
  is_initialized: boolean;
  index: bigint;
  collection_address: Address;
  owner_address: Address;
  individual_content: Cell;
}

export function storeNftData(src: NftData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.is_initialized);
    b_0.storeInt(src.index, 257);
    b_0.storeAddress(src.collection_address);
    b_0.storeAddress(src.owner_address);
    b_0.storeRef(src.individual_content);
  };
}

export function loadNftData(slice: Slice) {
  let sc_0 = slice;
  let _is_initialized = sc_0.loadBit();
  let _index = sc_0.loadIntBig(257);
  let _collection_address = sc_0.loadAddress();
  let _owner_address = sc_0.loadAddress();
  let _individual_content = sc_0.loadRef();
  return { $$type: 'NftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}


function loadGetterTupleNftData(source: TupleReader) {
  let _is_initialized = source.readBoolean();
  let _index = source.readBigNumber();
  let _collection_address = source.readAddress();
  let _owner_address = source.readAddress();
  let _individual_content = source.readCell();
  return { $$type: 'NftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}



export type NftItem$Data = {
  $$type: 'NftItem$Data';
  collection_address: Address;
  index: bigint;
  owner_address: Address;
  individual_content: Cell;
  is_initialized: boolean;
  business_address: Address;
  coordinates: Coordinates;
  admin_address: Address;
}

export function storeNftItem$Data(src: NftItem$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.collection_address);
    b_0.storeUint(src.index, 64);
    b_0.storeAddress(src.owner_address);
    b_0.storeRef(src.individual_content);
    b_0.storeBit(src.is_initialized);
    b_0.storeAddress(src.business_address);
    b_0.store(storeCoordinates(src.coordinates));
    let b_1 = new Builder();
    b_1.storeAddress(src.admin_address);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadNftItem$Data(slice: Slice) {
  let sc_0 = slice;
  let _collection_address = sc_0.loadAddress();
  let _index = sc_0.loadUintBig(64);
  let _owner_address = sc_0.loadAddress();
  let _individual_content = sc_0.loadRef();
  let _is_initialized = sc_0.loadBit();
  let _business_address = sc_0.loadAddress();
  let _coordinates = loadCoordinates(sc_0);
  let sc_1 = sc_0.loadRef().beginParse();
  let _admin_address = sc_1.loadAddress();
  return { $$type: 'NftItem$Data' as const, collection_address: _collection_address, index: _index, owner_address: _owner_address, individual_content: _individual_content, is_initialized: _is_initialized, business_address: _business_address, coordinates: _coordinates, admin_address: _admin_address };
}





export type MasterContract$Data = {
  $$type: 'MasterContract$Data';
  contract_id: bigint;
  admin_address: Address;
  next_collection_index: bigint;
}

export function storeMasterContract$Data(src: MasterContract$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(src.contract_id, 16);
    b_0.storeAddress(src.admin_address);
    b_0.storeUint(src.next_collection_index, 16);
  };
}

export function loadMasterContract$Data(slice: Slice) {
  let sc_0 = slice;
  let _contract_id = sc_0.loadUintBig(16);
  let _admin_address = sc_0.loadAddress();
  let _next_collection_index = sc_0.loadUintBig(16);
  return { $$type: 'MasterContract$Data' as const, contract_id: _contract_id, admin_address: _admin_address, next_collection_index: _next_collection_index };
}





type NftItem_init_args = {
  $$type: 'NftItem_init_args';
  collection_address: Address;
  index: bigint;
}

function initNftItem_init_args(src: NftItem_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.collection_address);
    b_0.storeInt(src.index, 257);
  };
}

async function NftItem_init(collection_address: Address, index: bigint) {
  const __code = Cell.fromBase64('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');
  const __system = Cell.fromBase64('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');
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initNftItem_init_args({ $$type: 'NftItem_init_args', collection_address, index })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const NftItem_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  2167: { message: `Only owner can destroy` },
  4034: { message: `collection is locked` },
  6344: { message: `only admin can transfer the collection` },
  10395: { message: `only owner can withdraw` },
  13928: { message: `Only admin can reasign SBT` },
  19053: { message: `only owner can deploy collection` },
  19630: { message: `only owner can lock` },
  20159: { message: `only business can change catalog` },
  23060: { message: `to low price` },
  26236: { message: `Sould bound nft can't be transfered` },
  29763: { message: `to high price` },
  38690: { message: `Assignment can be done only once` },
  39869: { message: `only business can withdraw` },
  41017: { message: `Only the collection can initialize the NFT item` },
  49977: { message: `only admin can withdraw` },
  50202: { message: `only owner can unlock` },
  52036: { message: `catalog size reaches the limit` },
  52171: { message: `Only business can add coordinates` },
  54310: { message: `not enought money or tree doesn't exists` },
}

const NftItem_types: ABIType[] = [
  { "name": "StateInit", "header": null, "fields": [{ "name": "code", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "Context", "header": null, "fields": [{ "name": "bounced", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "sender", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "value", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "raw", "type": { "kind": "simple", "type": "slice", "optional": false } }] },
  { "name": "SendParameters", "header": null, "fields": [{ "name": "bounce", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "to", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "value", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "mode", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "body", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "code", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": true } }] },
  { "name": "Deploy", "header": 2490013878, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "DeployOk", "header": 2952335191, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "FactoryDeploy", "header": 1829761339, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "cashback", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "DeployDefaultCollection", "header": 2152417869, "fields": [{ "name": "business_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "collection_content", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "DeployCollection", "header": 4229368130, "fields": [{ "name": "collection_init", "type": { "kind": "simple", "type": "StateInit", "optional": false } }, { "name": "business_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "collection_content", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "TransferCollection", "header": 1891763028, "fields": [{ "name": "business_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "admin_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "collection_content", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "LogEventMintRecord", "header": 2743565669, "fields": [{ "name": "minter", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "item_id", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "generate_number", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }] },
  { "name": "Tree", "header": null, "fields": [{ "name": "name", "type": { "kind": "simple", "type": "string", "optional": false } }, { "name": "type", "type": { "kind": "simple", "type": "string", "optional": false } }, { "name": "region", "type": { "kind": "simple", "type": "string", "optional": false } }, { "name": "location", "type": { "kind": "simple", "type": "string", "optional": false } }] },
  { "name": "Mint", "header": 1061030527, "fields": [{ "name": "tree", "type": { "kind": "simple", "type": "Tree", "optional": false } }, { "name": "destination", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "order_id", "type": { "kind": "simple", "type": "uint", "optional": true, "format": 64 } }] },
  { "name": "ChangeTree", "header": 2971782004, "fields": [{ "name": "tree", "type": { "kind": "simple", "type": "Tree", "optional": false } }, { "name": "price", "type": { "kind": "simple", "type": "uint", "optional": true, "format": "coins" } }] },
  { "name": "Transfer", "header": 1607220500, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "new_owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "business_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "custom_payload", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "forward_amount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "forward_payload", "type": { "kind": "simple", "type": "slice", "optional": false, "format": "remainder" } }] },
  { "name": "OwnershipAssigned", "header": 85167505, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "prev_owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "forward_payload", "type": { "kind": "simple", "type": "slice", "optional": false, "format": "remainder" } }] },
  { "name": "Excesses", "header": 3576854235, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "GetStaticData", "header": 801842850, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "ReportStaticData", "header": 2339837749, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "index", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 256 } }, { "name": "collection", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "Coordinates", "header": null, "fields": [{ "name": "latitude", "type": { "kind": "simple", "type": "uint", "optional": true, "format": 32 } }, { "name": "longitude", "type": { "kind": "simple", "type": "uint", "optional": true, "format": 32 } }] },
  { "name": "AddCoordinates", "header": 3619288943, "fields": [{ "name": "coordinates", "type": { "kind": "simple", "type": "Coordinates", "optional": false } }] },
  { "name": "ProveOwnership", "header": 81711432, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "dest", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "forward_payload", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "with_content", "type": { "kind": "simple", "type": "bool", "optional": false } }] },
  { "name": "OwnershipProof", "header": 86296494, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "item_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 256 } }, { "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "revoked_at", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "content", "type": { "kind": "simple", "type": "cell", "optional": true } }] },
  { "name": "RequestOwner", "header": 3502489578, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "dest", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "forward_payload", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "with_content", "type": { "kind": "simple", "type": "bool", "optional": false } }] },
  { "name": "OwnerInfo", "header": 232130531, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "item_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 256 } }, { "name": "initiator", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "revoked_at", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "content", "type": { "kind": "simple", "type": "cell", "optional": true } }] },
  { "name": "Destroy", "header": 520377210, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "Revoke", "header": 1871312355, "fields": [{ "name": "query_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "ReassignSBT", "header": 3986195783, "fields": [{ "name": "new_owner", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "CollectionData", "header": null, "fields": [{ "name": "next_item_index", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "collection_content", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "owner_address", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "NftCollection$Data", "header": null, "fields": [{ "name": "collection_index", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 16 } }, { "name": "admin_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "business_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "collection_content", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "next_item_index", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 32 } }, { "name": "avaliable_trees", "type": { "kind": "dict", "key": "uint", "keyFormat": 256, "value": "uint", "valueFormat": 16 } }, { "name": "is_locked", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "admin_funds", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "catalog_size", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 8 } }] },
  { "name": "NftData", "header": null, "fields": [{ "name": "is_initialized", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "index", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "collection_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "owner_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "individual_content", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "NftItem$Data", "header": null, "fields": [{ "name": "collection_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "index", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "owner_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "individual_content", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "is_initialized", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "business_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "coordinates", "type": { "kind": "simple", "type": "Coordinates", "optional": false } }, { "name": "admin_address", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "MasterContract$Data", "header": null, "fields": [{ "name": "contract_id", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 16 } }, { "name": "admin_address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "next_collection_index", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 16 } }] },
]

const NftItem_getters: ABIGetter[] = [
  { "name": "get_nft_data", "arguments": [], "returnType": { "kind": "simple", "type": "NftData", "optional": false } },
  { "name": "get_tree_coordinates", "arguments": [], "returnType": { "kind": "simple", "type": "Coordinates", "optional": false } },
  { "name": "get_authority_address", "arguments": [], "returnType": { "kind": "simple", "type": "slice", "optional": false } },
  { "name": "get_revoked_time", "arguments": [], "returnType": { "kind": "simple", "type": "int", "optional": false, "format": 257 } },
]

export const NftItem_getterMapping: { [key: string]: string } = {
  'get_nft_data': 'getGetNftData',
  'get_tree_coordinates': 'getGetTreeCoordinates',
  'get_authority_address': 'getGetAuthorityAddress',
  'get_revoked_time': 'getGetRevokedTime',
}

const NftItem_receivers: ABIReceiver[] = [
  { "receiver": "internal", "message": { "kind": "empty" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "Revoke" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "Transfer" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "GetStaticData" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "ProveOwnership" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "RequestOwner" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "Destroy" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "AddCoordinates" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "ReassignSBT" } },
]

export class NftItem implements Contract {

  static async init(collection_address: Address, index: bigint) {
    return await NftItem_init(collection_address, index);
  }

  static async fromInit(collection_address: Address, index: bigint) {
    const init = await NftItem_init(collection_address, index);
    const address = contractAddress(0, init);
    return new NftItem(address, init);
  }

  static fromAddress(address: Address) {
    return new NftItem(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell, data: Cell };
  readonly abi: ContractABI = {
    types: NftItem_types,
    getters: NftItem_getters,
    receivers: NftItem_receivers,
    errors: NftItem_errors,
  };

  private constructor(address: Address, init?: { code: Cell, data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean | null | undefined }, message: null | Revoke | Transfer | GetStaticData | ProveOwnership | RequestOwner | Destroy | AddCoordinates | ReassignSBT) {

    let body: Cell | null = null;
    if (message === null) {
      body = new Cell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Revoke') {
      body = beginCell().store(storeRevoke(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Transfer') {
      body = beginCell().store(storeTransfer(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'GetStaticData') {
      body = beginCell().store(storeGetStaticData(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ProveOwnership') {
      body = beginCell().store(storeProveOwnership(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'RequestOwner') {
      body = beginCell().store(storeRequestOwner(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Destroy') {
      body = beginCell().store(storeDestroy(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AddCoordinates') {
      body = beginCell().store(storeAddCoordinates(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ReassignSBT') {
      body = beginCell().store(storeReassignSBT(message)).endCell();
    }
    if (body === null) { throw new Error('Invalid message type'); }

    await provider.internal(via, { ...args, body: body });

  }

  async getGetNftData(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('get_nft_data', builder.build())).stack;
    const result = loadGetterTupleNftData(source);
    return result;
  }

  async getGetTreeCoordinates(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('get_tree_coordinates', builder.build())).stack;
    const result = loadGetterTupleCoordinates(source);
    return result;
  }

  async getGetAuthorityAddress(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('get_authority_address', builder.build())).stack;
    let result = source.readCell().asSlice();
    return result;
  }

  async getGetRevokedTime(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('get_revoked_time', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

}