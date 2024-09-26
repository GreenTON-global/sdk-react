import { Message } from '~/types/Message';
import { beginCell, Cell } from '@ton/core';
import { MessageArgs } from '~/types/MessageArgs';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NftCollectionUnlockArgs extends MessageArgs {}

export default function unlock(src: NftCollectionUnlockArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body('Unlock').toBoc().toString(),
  };
}

function body(src: string): Cell {
  return beginCell().storeUint(0, 32).storeStringTail(src).endCell();
}
