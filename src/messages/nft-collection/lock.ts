import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NftCollectionLockArgs extends MessageArgs { }

export default function lock(src: NftCollectionLockArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body('Lock').toBoc().toString()
  }
}

function body(src: string): Cell {
  return beginCell().storeUint(0, 32).storeStringTail(src).endCell();
}