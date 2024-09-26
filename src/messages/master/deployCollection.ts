import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";
import { DeployCollection, storeDeployCollection } from "~/wrappers/MasterContract";

export interface DeployCollectionArgs extends MessageArgs {
  body: DeployCollection;
}

export default function deployCollection(src: DeployCollectionArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: DeployCollection): Cell {
  return beginCell().store(storeDeployCollection(src)).endCell();
}