import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { cosmosProtoRegistry as defaultRegistryTypes, cosmosAminoConverters } from "../cosmos/client";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as refractedlabsFlowtradeV1TxRegistry from "./flowtrade/v1/tx.registry";
import * as refractedlabsFlowtradeV1TxAmino from "./flowtrade/v1/tx.amino";
export const refractedlabsAminoConverters = {
  ...refractedlabsFlowtradeV1TxAmino.AminoConverter
};
export const refractedlabsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...refractedlabsFlowtradeV1TxRegistry.registry];
export const getSigningRefractedlabsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...refractedlabsProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cosmosAminoConverters,
    ...refractedlabsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningRefractedlabsClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningRefractedlabsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};