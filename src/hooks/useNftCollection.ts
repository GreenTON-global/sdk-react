import { useTonConnectUI } from '@tonconnect/ui-react';
import messages, {
  NftCollectionAdminWithdrawArgs,
  NftCollectionChangeTreeArgs,
  NftCollectionLockArgs,
  NftCollectionMintArgs,
  NftCollectionTransferCollectionArgs,
  NftCollectionUnlockArgs,
  NftCollectionWithdrawArgs,
} from '~/messages';
import { TransactionArgs } from '~/types/TransactionArgs';

export default function useNftCollection() {
  const [tonConnectUI] = useTonConnectUI();

  return {
    adminWithdraw: (args: TransactionArgs<NftCollectionAdminWithdrawArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftCollection.adminWithdraw(args.message)],
      }),
    changeTree: (args: TransactionArgs<NftCollectionChangeTreeArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftCollection.changeTree(args.message)],
      }),
    lock: (args: TransactionArgs<NftCollectionLockArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftCollection.lock(args.message)],
      }),
    mint: (args: TransactionArgs<NftCollectionMintArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftCollection.mint(args.message)],
      }),
    transferCollection: (args: TransactionArgs<NftCollectionTransferCollectionArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftCollection.transferCollection(args.message)],
      }),
    unlock: (args: TransactionArgs<NftCollectionUnlockArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftCollection.unlock(args.message)],
      }),
    withdraw: (args: TransactionArgs<NftCollectionWithdrawArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.nftCollection.withdraw(args.message)],
      }),
  };
}
