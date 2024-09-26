# Contribute to Messages

1. Contribute only to specific contract. There are only 3 of them: Master, NftCollection, NftItem.
2. Add message file into `./`. Place only one message.
3. In `message.ts` file add **Args** interface\* and 2 functions `mint(src: MintArgs): Message` **(EXAMPLE)** and `body(src: Mint): Cell` **(EXAMPLE)**. Use `export default` for message function.
4. Add new message into `index.ts` file.

\* \- **Args** intrface should be extended with **MessageArgs** from `~/types/MessageArgs.ts`
