import { Message } from '~/types/Message';
import { beginCell, Cell } from '@ton/core';
import { MessageArgs } from '~/types/MessageArgs';
import { ReassignSBT, storeReassignSBT } from '~/wrappers/NftItem';

export interface NftItemReassignSBTArgs extends MessageArgs {
  body: ReassignSBT;
}

export default function reassignSBT(src: NftItemReassignSBTArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString(),
  };
}

function body(src: ReassignSBT): Cell {
  return beginCell().store(storeReassignSBT(src)).endCell();
}
