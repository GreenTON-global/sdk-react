import { storeTransferCollection, TransferCollection } from '~/wrappers/NftCollection';
import { Message } from '~/types/Message';
import { beginCell, Cell } from '@ton/core';
import { MessageArgs } from '~/types/MessageArgs';

export interface NftCollectionTransferCollectionArgs extends MessageArgs {
  body: TransferCollection;
}

export default function transferCollection(src: NftCollectionTransferCollectionArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString(),
  };
}

function body(src: TransferCollection): Cell {
  return beginCell().store(storeTransferCollection(src)).endCell();
}
