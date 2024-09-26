import { Mint, storeMint } from "~/wrappers/NftCollection";
import { Message } from "~/types/Message";
import { beginCell, Cell } from "@ton/core";
import { MessageArgs } from "~/types/MessageArgs";

export interface NftCollectionMintArgs extends MessageArgs {
  body: Mint
}

export default function mint(src: NftCollectionMintArgs): Message {
  return {
    address: src.address,
    amount: src.amount.toString(),
    payload: body(src.body).toBoc().toString()
  }
}

function body(src: Mint): Cell {
  return beginCell().store(storeMint(src)).endCell();
}