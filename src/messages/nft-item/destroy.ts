import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";
import { Destroy, storeDestroy } from "~/wrappers/NftItem";

export interface NftItemDestroyArgs extends MessageArgs {
  body: Destroy;
}

export default function destroy(src: NftItemDestroyArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: Destroy): Cell {
  return beginCell().store(storeDestroy(src)).endCell();
}