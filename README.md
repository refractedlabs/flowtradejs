# FlowtradeJS: Javascript SDK for refractedlabs/flowtrade

# Install

```bash
pnpm install @refractedlabs/flowtradejs
```

# Usage

## gRPC-web Clients

Import the `refractedlabs` object from `@refractedlabs/flowtradejs`.

```tsx
import { refractedlabs } from '@refractedlabs/flowtradejs';

const client = await refractedlabs.ClientFactory.createGrpcWebClient({endpoint: GRPC_ENDPOINT});

// now you can query the flowtrade module
const params = await client.refractedlabs.flowtrade.v1.params();

// you can also query the cosmos modules
const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'refractedlabs1addresshere' });
```

## Composing Messages

```tsx
import { refractedlabs } from '@refractedlabs/flowtradejs';

// flowtrade messages
const {
    updateParams,
    createFlow,
    joinFlow,
    exitFlow,
    setOperator,
    claimTokenIn,
    claimTokenOut,
    stopFlow
} = refractedlabs.flowtrade.v1.MessageComposer.withTypeUrl;

```

### Example Project

[example](https://github.com/refractedlabs/flowtradejs/tree/main/example) is a sample project that depends on `@refractedlabs/flowtradejs` and contains example on how to query data or sign and send messages.

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningRefractedlabsClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```tsx
import { getSigningRefractedlabsClient } from '@refractedlabs/flowtradejs';

const stargateClient = await getSigningRefractedlabsClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

**Amino Signer**

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```tsx
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```

**Proto Signer**

```tsx
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```tsx
import { chains } from 'chain-registry';

const mnemonic = 'unfold client turtle either pilot stock floor glow toward bullet car science';
const chain = chains.find(({ chain_name }) => chain_name === 'refractedlabs');
const signer = await getOfflineSigner({
  mnemonic,
  chain
});
```

### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```tsx
const { createFlow } = refractedlabs.flowtrade.v1.MessageComposer.withTypeUrl;

const msg = createFlow({
    creator: "creator",
    request: { ... }
})

const fee: StdFee = {
  amount: [
      {
          denom: 'coin',
          amount: '864'
      }
  ],
  gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### Advanced Usage

If you want to manually construct a stargate client

```tsx
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    refractedlabsAminoConverters,
    refractedlabsProtoRegistry
} from '@refractedlabs/flowtradejs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = '<https://rpc.cosmos.directory/refractedlabs>'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...refractedlabsProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...refractedlabsAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});

```

# Developing

When first cloning the repo:

```bash
pnpm install
```

## Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `@refractedlabs/flowtradejs`:

```bash
pnpm codegen
```

## Publishing

Build the types and then publish:

```
pnpm compile
pnpm publish
```

# Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️