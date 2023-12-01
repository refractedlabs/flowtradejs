import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as refractedlabsFlowtradeTxRegistry from "./flowtrade/v1/tx.registry";
import * as refractedlabsFlowtradeTxAmino from "./flowtrade/v1/tx.amino";
import { cosmosAminoConverters, cosmosProtoRegistry } from "../cosmos/client";
export const refractedlabsAminoConverters = {
  ...refractedlabsFlowtradeTxAmino.AminoConverter
};
export const refractedlabsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...refractedlabsFlowtradeTxRegistry.registry];
export const getSigningRefractedlabsClientOptions = ({
  defaultTypes = cosmosProtoRegistry
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...refractedlabsProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...refractedlabsAminoConverters,
    ...cosmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningRefractedlabsClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = cosmosProtoRegistry
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