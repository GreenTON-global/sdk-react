import { ChangeTree, storeChangeTree } from "~/wrappers/NftCollection";
import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";

export interface ChangeTreeArgs extends MessageArgs {
  body: ChangeTree;
}

export default function changeTree(src: ChangeTreeArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: ChangeTree): Cell {
  return beginCell().store(storeChangeTree(src)).endCell();
}