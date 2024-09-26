import { Message } from '~/types/Message';
import { beginCell, Cell } from '@ton/core';
import { MessageArgs } from '~/types/MessageArgs';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NftCollectionAdminWithdrawArgs extends MessageArgs {}

export default function adminWithdraw(src: NftCollectionAdminWithdrawArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body('Admin withdraw').toBoc().toString(),
  };
}

function body(src: string): Cell {
  return beginCell().storeUint(0, 32).storeStringTail(src).endCell();
}
