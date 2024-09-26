// eslint-disable
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
    const b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  const sc_0 = slice;
  const _code = sc_0.loadRef();
  const _data = sc_0.loadRef();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  const _code = source.readCell();
  const _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
  const _code = source.readCell();
  const _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  const builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
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
    const b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw.asCell());
  };
}

export function loadContext(slice: Slice) {
  const sc_0 = slice;
  const _bounced = sc_0.loadBit();
  const _sender = sc_0.loadAddress();
  const _value = sc_0.loadIntBig(257);
  const _raw = sc_0.loadRef().asSlice();
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
    const b_0 = builder;
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
  const sc_0 = slice;
  const _bounce = sc_0.loadBit();
  const _to = sc_0.loadAddress();
  const _value = sc_0.loadIntBig(257);
  const _mode = sc_0.loadIntBig(257);
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}





export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
}

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}





export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}





export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  const _cashback = sc_0.loadAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}





export type DeployDefaultCollection = {
  $$type: 'DeployDefaultCollection';
  business_address: Address;
  collection_content: Cell;
}

export function storeDeployDefaultCollection(src: DeployDefaultCollection) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2152417869, 32);
    b_0.storeAddress(src.business_address);
    b_0.storeRef(src.collection_content);
  };
}

export function loadDeployDefaultCollection(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2152417869) { throw Error('Invalid prefix'); }
  const _business_address = sc_0.loadAddress();
  const _collection_content = sc_0.loadRef();
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
    const b_0 = builder;
    b_0.storeUint(4229368130, 32);
    b_0.store(storeStateInit(src.collection_init));
    b_0.storeAddress(src.business_address);
    b_0.storeRef(src.collection_content);
  };
}

export function loadDeployCollection(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 4229368130) { throw Error('Invalid prefix'); }
  const _collection_init = loadStateInit(sc_0);
  const _business_address = sc_0.loadAddress();
  const _collection_content = sc_0.loadRef();
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
    const b_0 = builder;
    b_0.storeUint(1891763028, 32);
    b_0.storeAddress(src.business_address);
    b_0.storeAddress(src.admin_address);
    b_0.storeRef(src.collection_content);
  };
}

export function loadTransferCollection(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1891763028) { throw Error('Invalid prefix'); }
  const _business_address = sc_0.loadAddress();
  const _admin_address = sc_0.loadAddress();
  const _collection_content = sc_0.loadRef();
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
    const b_0 = builder;
    b_0.storeUint(2743565669, 32);
    b_0.storeAddress(src.minter);
    b_0.storeInt(src.item_id, 257);
    b_0.storeInt(src.generate_number, 257);
  };
}

export function loadLogEventMintRecord(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2743565669) { throw Error('Invalid prefix'); }
  const _minter = sc_0.loadAddress();
  const _item_id = sc_0.loadIntBig(257);
  const _generate_number = sc_0.loadIntBig(257);
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
    const b_0 = builder;
    b_0.storeStringRefTail(src.name);
    b_0.storeStringRefTail(src.type);
    const b_1 = new Builder();
    b_1.storeStringRefTail(src.region);
    b_1.storeStringRefTail(src.location);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadTree(slice: Slice) {
  const sc_0 = slice;
  const _name = sc_0.loadStringRefTail();
  const _type = sc_0.loadStringRefTail();
  const sc_1 = sc_0.loadRef().beginParse();
  const _region = sc_1.loadStringRefTail();
  const _location = sc_1.loadStringRefTail();
  return { $$type: 'Tree' as const, name: _name, type: _type, region: _region, location: _location };
}

function loadTupleTree(source: TupleReader) {
  const _name = source.readString();
  const _type = source.readString();
  const _region = source.readString();
  const _location = source.readString();
  return { $$type: 'Tree' as const, name: _name, type: _type, region: _region, location: _location };
}

function loadGetterTupleTree(source: TupleReader) {
  const _name = source.readString();
  const _type = source.readString();
  const _region = source.readString();
  const _location = source.readString();
  return { $$type: 'Tree' as const, name: _name, type: _type, region: _region, location: _location };
}

function storeTupleTree(source: Tree) {
  const builder = new TupleBuilder();
  builder.writeString(source.name);
  builder.writeString(source.type);
  builder.writeString(source.region);
  builder.writeString(source.location);
  return builder.build();
}


export type Mint = {
  $$type: 'Mint';
  tree: Tree;
  destination: Address;
  order_id: bigint | null;
}

export function storeMint(src: Mint) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1061030527, 32);
    b_0.store(storeTree(src.tree));
    b_0.storeAddress(src.destination);
    if (src.order_id !== null && src.order_id !== undefined) { b_0.storeBit(true).storeUint(src.order_id, 64); } else { b_0.storeBit(false); }
  };
}

export function loadMint(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1061030527) { throw Error('Invalid prefix'); }
  const _tree = loadTree(sc_0);
  const _destination = sc_0.loadAddress();
  const _order_id = sc_0.loadBit() ? sc_0.loadUintBig(64) : null;
  return { $$type: 'Mint' as const, tree: _tree, destination: _destination, order_id: _order_id };
}





export type ChangeTree = {
  $$type: 'ChangeTree';
  tree: Tree;
  price: bigint | null;
}

export function storeChangeTree(src: ChangeTree) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2971782004, 32);
    b_0.store(storeTree(src.tree));
    if (src.price !== null && src.price !== undefined) { b_0.storeBit(true).storeCoins(src.price); } else { b_0.storeBit(false); }
  };
}

export function loadChangeTree(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2971782004) { throw Error('Invalid prefix'); }
  const _tree = loadTree(sc_0);
  const _price = sc_0.loadBit() ? sc_0.loadCoins() : null;
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
    const b_0 = builder;
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
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1607220500) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  const _new_owner = sc_0.loadAddress();
  const _business_address = sc_0.loadAddress();
  const _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _forward_amount = sc_0.loadCoins();
  const _forward_payload = sc_0;
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
    const b_0 = builder;
    b_0.storeUint(85167505, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.prev_owner);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadOwnershipAssigned(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 85167505) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  const _prev_owner = sc_0.loadAddress();
  const _forward_payload = sc_0;
  return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}





export type Excesses = {
  $$type: 'Excesses';
  query_id: bigint;
}

export function storeExcesses(src: Excesses) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3576854235, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadExcesses(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  return { $$type: 'Excesses' as const, query_id: _query_id };
}





export type GetStaticData = {
  $$type: 'GetStaticData';
  query_id: bigint;
}

export function storeGetStaticData(src: GetStaticData) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(801842850, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadGetStaticData(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 801842850) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
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
    const b_0 = builder;
    b_0.storeUint(2339837749, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeUint(src.index, 256);
    b_0.storeAddress(src.collection);
  };
}

export function loadReportStaticData(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2339837749) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  const _index = sc_0.loadUintBig(256);
  const _collection = sc_0.loadAddress();
  return { $$type: 'ReportStaticData' as const, query_id: _query_id, index: _index, collection: _collection };
}





export type Coordinates = {
  $$type: 'Coordinates';
  latitude: bigint | null;
  longitude: bigint | null;
}

export function storeCoordinates(src: Coordinates) {
  return (builder: Builder) => {
    const b_0 = builder;
    if (src.latitude !== null && src.latitude !== undefined) { b_0.storeBit(true).storeUint(src.latitude, 32); } else { b_0.storeBit(false); }
    if (src.longitude !== null && src.longitude !== undefined) { b_0.storeBit(true).storeUint(src.longitude, 32); } else { b_0.storeBit(false); }
  };
}

export function loadCoordinates(slice: Slice) {
  const sc_0 = slice;
  const _latitude = sc_0.loadBit() ? sc_0.loadUintBig(32) : null;
  const _longitude = sc_0.loadBit() ? sc_0.loadUintBig(32) : null;
  return { $$type: 'Coordinates' as const, latitude: _latitude, longitude: _longitude };
}

function loadTupleCoordinates(source: TupleReader) {
  const _latitude = source.readBigNumberOpt();
  const _longitude = source.readBigNumberOpt();
  return { $$type: 'Coordinates' as const, latitude: _latitude, longitude: _longitude };
}

function loadGetterTupleCoordinates(source: TupleReader) {
  const _latitude = source.readBigNumberOpt();
  const _longitude = source.readBigNumberOpt();
  return { $$type: 'Coordinates' as const, latitude: _latitude, longitude: _longitude };
}

function storeTupleCoordinates(source: Coordinates) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.latitude);
  builder.writeNumber(source.longitude);
  return builder.build();
}


export type AddCoordinates = {
  $$type: 'AddCoordinates';
  coordinates: Coordinates;
}

export function storeAddCoordinates(src: AddCoordinates) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3619288943, 32);
    b_0.store(storeCoordinates(src.coordinates));
  };
}

export function loadAddCoordinates(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3619288943) { throw Error('Invalid prefix'); }
  const _coordinates = loadCoordinates(sc_0);
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
    const b_0 = builder;
    b_0.storeUint(81711432, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.dest);
    b_0.storeRef(src.forward_payload);
    b_0.storeBit(src.with_content);
  };
}

export function loadProveOwnership(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 81711432) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  const _dest = sc_0.loadAddress();
  const _forward_payload = sc_0.loadRef();
  const _with_content = sc_0.loadBit();
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
    const b_0 = builder;
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
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 86296494) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  const _item_id = sc_0.loadUintBig(256);
  const _owner = sc_0.loadAddress();
  const _data = sc_0.loadRef();
  const _revoked_at = sc_0.loadUintBig(64);
  const _content = sc_0.loadBit() ? sc_0.loadRef() : null;
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
    const b_0 = builder;
    b_0.storeUint(3502489578, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.dest);
    b_0.storeRef(src.forward_payload);
    b_0.storeBit(src.with_content);
  };
}

export function loadRequestOwner(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3502489578) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  const _dest = sc_0.loadAddress();
  const _forward_payload = sc_0.loadRef();
  const _with_content = sc_0.loadBit();
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
    const b_0 = builder;
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
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 232130531) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  const _item_id = sc_0.loadUintBig(256);
  const _initiator = sc_0.loadAddress();
  const _owner = sc_0.loadAddress();
  const _data = sc_0.loadRef();
  const _revoked_at = sc_0.loadUintBig(64);
  const _content = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'OwnerInfo' as const, query_id: _query_id, item_id: _item_id, initiator: _initiator, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}





export type Destroy = {
  $$type: 'Destroy';
  query_id: bigint;
}

export function storeDestroy(src: Destroy) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(520377210, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadDestroy(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 520377210) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  return { $$type: 'Destroy' as const, query_id: _query_id };
}





export type Revoke = {
  $$type: 'Revoke';
  query_id: bigint;
}

export function storeRevoke(src: Revoke) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1871312355, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadRevoke(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1871312355) { throw Error('Invalid prefix'); }
  const _query_id = sc_0.loadUintBig(64);
  return { $$type: 'Revoke' as const, query_id: _query_id };
}





export type ReassignSBT = {
  $$type: 'ReassignSBT';
  new_owner: Address;
}

export function storeReassignSBT(src: ReassignSBT) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3986195783, 32);
    b_0.storeAddress(src.new_owner);
  };
}

export function loadReassignSBT(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3986195783) { throw Error('Invalid prefix'); }
  const _new_owner = sc_0.loadAddress();
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
    const b_0 = builder;
    b_0.storeInt(src.next_item_index, 257);
    b_0.storeRef(src.collection_content);
    b_0.storeAddress(src.owner_address);
  };
}

export function loadCollectionData(slice: Slice) {
  const sc_0 = slice;
  const _next_item_index = sc_0.loadIntBig(257);
  const _collection_content = sc_0.loadRef();
  const _owner_address = sc_0.loadAddress();
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
    const b_0 = builder;
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
  const sc_0 = slice;
  const _collection_index = sc_0.loadUintBig(16);
  const _admin_address = sc_0.loadAddress();
  const _business_address = sc_0.loadAddress();
  const _collection_content = sc_0.loadRef();
  const _next_item_index = sc_0.loadUintBig(32);
  const _avaliable_trees = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.Uint(16), sc_0);
  const _is_locked = sc_0.loadBit();
  const _admin_funds = sc_0.loadCoins();
  const _catalog_size = sc_0.loadUintBig(8);
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
    const b_0 = builder;
    b_0.storeBit(src.is_initialized);
    b_0.storeInt(src.index, 257);
    b_0.storeAddress(src.collection_address);
    b_0.storeAddress(src.owner_address);
    b_0.storeRef(src.individual_content);
  };
}

export function loadNftData(slice: Slice) {
  const sc_0 = slice;
  const _is_initialized = sc_0.loadBit();
  const _index = sc_0.loadIntBig(257);
  const _collection_address = sc_0.loadAddress();
  const _owner_address = sc_0.loadAddress();
  const _individual_content = sc_0.loadRef();
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
    const b_0 = builder;
    b_0.storeAddress(src.collection_address);
    b_0.storeUint(src.index, 64);
    b_0.storeAddress(src.owner_address);
    b_0.storeRef(src.individual_content);
    b_0.storeBit(src.is_initialized);
    b_0.storeAddress(src.business_address);
    b_0.store(storeCoordinates(src.coordinates));
    const b_1 = new Builder();
    b_1.storeAddress(src.admin_address);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadNftItem$Data(slice: Slice) {
  const sc_0 = slice;
  const _collection_address = sc_0.loadAddress();
  const _index = sc_0.loadUintBig(64);
  const _owner_address = sc_0.loadAddress();
  const _individual_content = sc_0.loadRef();
  const _is_initialized = sc_0.loadBit();
  const _business_address = sc_0.loadAddress();
  const _coordinates = loadCoordinates(sc_0);
  const sc_1 = sc_0.loadRef().beginParse();
  const _admin_address = sc_1.loadAddress();
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
    const b_0 = builder;
    b_0.storeUint(src.contract_id, 16);
    b_0.storeAddress(src.admin_address);
    b_0.storeUint(src.next_collection_index, 16);
  };
}

export function loadMasterContract$Data(slice: Slice) {
  const sc_0 = slice;
  const _contract_id = sc_0.loadUintBig(16);
  const _admin_address = sc_0.loadAddress();
  const _next_collection_index = sc_0.loadUintBig(16);
  return { $$type: 'MasterContract$Data' as const, contract_id: _contract_id, admin_address: _admin_address, next_collection_index: _next_collection_index };
}





type MasterContract_init_args = {
  $$type: 'MasterContract_init_args';
  contract_id: bigint;
  admin_address: Address;
}

function initMasterContract_init_args(src: MasterContract_init_args) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.contract_id, 257);
    b_0.storeAddress(src.admin_address);
  };
}

async function MasterContract_init(contract_id: bigint, admin_address: Address) {
  const __code = Cell.fromBase64('te6ccgECGgEABZIAART/APSkE/S88sgLAQIBYgIDAuDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCyPhDAcx/AcoAVSBQI8sPASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssPye1UFQQCASAQEQTy7aLt+wGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsJJbf+AgghCAS0pNuo61MNMfAYIQgEtKTbry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdRZbBLbPH/gIIIQ/BcJQrrjAiCCEJRqmLa64wLAAAUGBwgCtoFKbfhCUlDHBfL0RDBRQNs8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIcH+AQvhCSgsYCQF0MNMfAYIQ/BcJQrry4IHU1FkC+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHURERsFNs8fwoBUDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH8MAqiPTvkBgvAlC3biuVdvxrTEUSlIMAawADoMObb3rkE9F39ONHnbyrqPJoEom/hCUjDHBfL0IfhBbyQQZxBXEEfbPBRwckMwbW1t2zxYf9sx4JEw4nANDgG8yFUgghBwwgNUUATLH1gg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WzMlGUBBIEDlAiRBGEEXbPAGkEg4BqoFKbfhCUnDHBfL0XXBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIcH+AQvhCRgULAazIVSCCEHDCA1RQBMsfWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbMyUBmBRBGEEXbPA4BOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8DgAyE18D+CdvECGhggnJw4BmtgihggiYloCgoQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAPAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAhG8Lu7Z5tnjYYwVEgIDeiATFAACIAAQqr7tRNDSAAECFKgB2zxVAts8bDEVFgHU7UTQ1AH4Y9IAAY4o0w/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMPVSBsE+D4KNcLCoMJuvLgiYEBAdcA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBIC0QHbPBcBnFRzIRA2RUbbPGwycFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhBMBgAAnABDvhD+ChY2zwZANYC0PQEMG0hggCiJQGAEPQPb6Hy4IcBggCiJSICgBD0FwKBeeoBgBD0D2+h8uCHEoF56gECgBD0F8gByPQAyQHMcAHKAEADWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFoEBAc8AyQ==');
  const __system = Cell.fromBase64('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');
  const builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initMasterContract_init_args({ $$type: 'MasterContract_init_args', contract_id, admin_address })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const MasterContract_errors: { [key: number]: { message: string } } = {
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

const MasterContract_types: ABIType[] = [
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

const MasterContract_getters: ABIGetter[] = [
  { "name": "nft_collection_by_index", "arguments": [{ "name": "index", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }], "returnType": { "kind": "simple", "type": "address", "optional": false } },
  { "name": "next_collection_index", "arguments": [], "returnType": { "kind": "simple", "type": "int", "optional": false, "format": 257 } },
]

export const MasterContract_getterMapping: { [key: string]: string } = {
  'nft_collection_by_index': 'getNftCollectionByIndex',
  'next_collection_index': 'getNextCollectionIndex',
}

const MasterContract_receivers: ABIReceiver[] = [
  { "receiver": "internal", "message": { "kind": "empty" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "DeployDefaultCollection" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "DeployCollection" } },
  { "receiver": "internal", "message": { "kind": "text", "text": "Withdraw" } },
  { "receiver": "internal", "message": { "kind": "typed", "type": "Deploy" } },
]

export class MasterContract implements Contract {

  static async init(contract_id: bigint, admin_address: Address) {
    return await MasterContract_init(contract_id, admin_address);
  }

  static async fromInit(contract_id: bigint, admin_address: Address) {
    const init = await MasterContract_init(contract_id, admin_address);
    const address = contractAddress(0, init);
    return new MasterContract(address, init);
  }

  static fromAddress(address: Address) {
    return new MasterContract(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell, data: Cell };
  readonly abi: ContractABI = {
    types: MasterContract_types,
    getters: MasterContract_getters,
    receivers: MasterContract_receivers,
    errors: MasterContract_errors,
  };

  private constructor(address: Address, init?: { code: Cell, data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean | null | undefined }, message: null | DeployDefaultCollection | DeployCollection | 'Withdraw' | Deploy) {

    let body: Cell | null = null;
    if (message === null) {
      body = new Cell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DeployDefaultCollection') {
      body = beginCell().store(storeDeployDefaultCollection(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DeployCollection') {
      body = beginCell().store(storeDeployCollection(message)).endCell();
    }
    if (message === 'Withdraw') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) { throw new Error('Invalid message type'); }

    await provider.internal(via, { ...args, body: body });

  }

  async getNftCollectionByIndex(provider: ContractProvider, index: bigint) {
    const builder = new TupleBuilder();
    builder.writeNumber(index);
    const source = (await provider.get('nft_collection_by_index', builder.build())).stack;
    const result = source.readAddress();
    return result;
  }

  async getNextCollectionIndex(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('next_collection_index', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }

}