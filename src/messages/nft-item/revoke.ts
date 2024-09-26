import { Message } from '~/types/Message';
import { beginCell, Cell } from '@ton/core';
import { MessageArgs } from '~/types/MessageArgs';
import { Revoke, storeRevoke } from '~/wrappers/NftItem';

export interface NftItemRevokeArgs extends MessageArgs {
  body: Revoke;
}

export default function revoke(src: NftItemRevokeArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString(),
  };
}

function body(src: Revoke): Cell {
  return beginCell().store(storeRevoke(src)).endCell();
}
