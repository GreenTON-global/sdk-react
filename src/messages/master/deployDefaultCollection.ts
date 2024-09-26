import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";
import { DeployDefaultCollection, storeDeployDefaultCollection } from "~/wrappers/MasterContract";

export interface MasterDeployDefaultCollectionArgs extends MessageArgs {
  body: DeployDefaultCollection;
}

export default function deployDefaultCollection(src: MasterDeployDefaultCollectionArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: DeployDefaultCollection): Cell {
  return beginCell().store(storeDeployDefaultCollection(src)).endCell();
}