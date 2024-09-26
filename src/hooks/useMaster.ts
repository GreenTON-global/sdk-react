import { useTonConnectUI } from '@tonconnect/ui-react';
import messages, {
  MasterDeployArgs,
  MasterDeployCollectionArgs,
  MasterDeployDefaultCollectionArgs,
  MasterWithdrawArgs,
} from '~/messages';
import { TransactionArgs } from '~/types/TransactionArgs';

export default function useMaster() {
  const [tonConnectUI] = useTonConnectUI();

  return {
    deployCollection: (args: TransactionArgs<MasterDeployCollectionArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.master.deployCollection(args.message)],
      }),
    deploy: (args: TransactionArgs<MasterDeployArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.master.deploy(args.message)],
      }),
    deployDefaultCollection: (args: TransactionArgs<MasterDeployDefaultCollectionArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.master.deployDefaultCollection(args.message)],
      }),
    withdraw: (args: TransactionArgs<MasterWithdrawArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [messages.master.withdraw(args.message)],
      }),
  };
}
