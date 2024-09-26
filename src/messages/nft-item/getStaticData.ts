import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";
import { GetStaticData, storeGetStaticData } from "~/wrappers/NftItem";

export interface NftItemGetStaticDataArgs extends MessageArgs {
  body: GetStaticData;
}

export default function getStaticData(src: NftItemGetStaticDataArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: GetStaticData): Cell {
  return beginCell().store(storeGetStaticData(src)).endCell();
}