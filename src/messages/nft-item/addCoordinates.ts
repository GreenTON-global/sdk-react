import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";
import { AddCoordinates, storeAddCoordinates } from "~/wrappers/NftItem";

export interface NftItemAddCoordinatesArgs extends MessageArgs {
  body: AddCoordinates;
}

export default function addCoordinates(src: NftItemAddCoordinatesArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: AddCoordinates): Cell {
  return beginCell().store(storeAddCoordinates(src)).endCell();
}