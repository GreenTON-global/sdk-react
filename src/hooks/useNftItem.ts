import { useTonConnectUI } from '@tonconnect/ui-react';
import messages, {
  NftItemAddCoordinatesArgs,
  NftItemDestroyArgs,
  NftItemGetStaticDataArgs,
  NftItemReassignSBTArgs,
  NftItemRevokeArgs,
  NftItemTransferArgs,
} from '~/messages';
import { TransactionArgs } from '~/types/TransactionArgs';

export default function useNftItem() {
  const [tonConnectUI] = useTonConnectUI();

  return {
    addCoordinates: (args: TransactionArgs<NftItemAddCoordinatesArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftItem.addCoordinates(args.message)],
      }),
    destroy: (args: TransactionArgs<NftItemDestroyArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftItem.destroy(args.message)],
      }),
    getStaticData: (args: TransactionArgs<NftItemGetStaticDataArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftItem.getStaticData(args.message)],
      }),
    reassignSBT: (args: TransactionArgs<NftItemReassignSBTArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftItem.reassignSBT(args.message)],
      }),
    revoke: (args: TransactionArgs<NftItemRevokeArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftItem.revoke(args.message)],
      }),
    transfer: (args: TransactionArgs<NftItemTransferArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftItem.transfer(args.message)],
      }),
  };
}
