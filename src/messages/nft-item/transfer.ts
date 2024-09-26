import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";
import { storeTransfer, Transfer } from "~/wrappers/NftItem";

export interface NftItemTransferArgs extends MessageArgs {
  body: Transfer;
}

export default function transfer(src: NftItemTransferArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: Transfer): Cell {
  return beginCell().store(storeTransfer(src)).endCell();
}