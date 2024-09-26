import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";
import { Deploy, storeDeploy } from "~/wrappers/MasterContract";

export interface DeployArgs extends MessageArgs {
  body: Deploy;
}

export default function deploy(src: DeployArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: Deploy): Cell {
  return beginCell().store(storeDeploy(src)).endCell();
}