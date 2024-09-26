import { Message } from '~/types/Message';
import { beginCell, Cell } from '@ton/core';
import { MessageArgs } from '~/types/MessageArgs';
import { ProveOwnership, storeProveOwnership } from '~/wrappers/NftItem';

export interface NftItemProveOwnershipArgs extends MessageArgs {
  body: ProveOwnership;
}

export default function proveOwnership(src: NftItemProveOwnershipArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString(),
  };
}

function body(src: ProveOwnership): Cell {
  return beginCell().store(storeProveOwnership(src)).endCell();
}
