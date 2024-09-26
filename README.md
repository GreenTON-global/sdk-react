# @greenton/sdk-react 🌳

This is official NPM package of GreenTON. It contains messages for our contracts. Also here you can find pretty React hooks for sending transaction using TONConnect.

# Usage 🛠️

```tsx
import { Address, toNano } from '@ton/core';
import { useNftCollection } from '@greenton/sdk-react';

const MyComponent: React.FC = () => {
  const { mint } = useNftCollection();

  return (
    <button
      onClick={() =>
        mint({
          validUntil: Math.floor(Date.now() / 1000) + 360,
          message: {
            body: {
              $$type: 'Mint',
              tree: {
                $$type: 'Tree',
                name: 'Oak',
                type: 'basic',
                region: 'Africa',
                location: 'Forest',
              },
              destination: Address.parse('0QDasdGa9ZX8dhsF9qOJexH4-V4nh5Bg3Nwv45DA7f0ieoiM'),
              order_id: null,
            },
            address: 'kQA4PYQ9k12KTIMq4HziIoBZefo-ZJNID0s0Du0M-M6Fi7WG',
            amount: toNano('1'),
          },
        })
      }
    >
      Mint!
    </button>
  );
};
```

You are also open to directly use messages. For example to create your custom hook:

```tsx
import { useTonConnectUI } from '@tonconnect/ui-react';
import { GREENTON_MESSAGES, NftCollectionMintArgs } from '@greenton/sdk-react';
import { TransactionArgs } from '~/types/TransactionArgs';

export default function usePerfectNftCollection() {
  const [tonConnectUI] = useTonConnectUI();

  return {
    mint: (args: TransactionArgs<NftCollectionMintArgs>) =>
      tonConnectUI.sendTransaction({
        validUntil: args.validUntil,
        messages: [GREENTON_MESSAGES.nftCollection.mint(args.message)],
      }),
  };
}
```

# Bug reports 👾
