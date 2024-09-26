import { Message } from '~/types/Message';
import { beginCell, Cell } from '@ton/core';
import { MessageArgs } from '~/types/MessageArgs';
import { RequestOwner, storeRequestOwner } from '~/wrappers/NftItem';

export interface NftItemRequestOwnerArgs extends MessageArgs {
  body: RequestOwner;
}

export default function requestOwner(src: NftItemRequestOwnerArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString(),
  };
}

function body(src: RequestOwner): Cell {
  return beginCell().store(storeRequestOwner(src)).endCell();
}
