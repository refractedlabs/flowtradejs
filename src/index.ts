import { getSigningRefractedlabsClientOptions } from "./codegen"
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { createGrpcWebClient } from "./codegen/refractedlabs/rpc.query";
import { PageRequest } from "./codegen/cosmos/base/query/v1beta1/pagination";

export type FlowtradeGrpcWebClient = Awaited<ReturnType<typeof createGrpcWebClient>>
export { createGrpcWebClient }

export * from './codegen';

export function defaultPageRequestProvider(): PageRequest {
    return {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 50n
    }
}

/**
 * ```ts
 * example:
 *     const balances = await grpcFetchAll(grpcClient, async (client, pageRequest) => {
 *         const result = await client.cosmos.bank.v1beta1.allBalances({
 *             address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
 *             pagination: pageRequest
 *         })
 *         return [result.pagination.nextKey, result.balances]
 *     })
 * ```
 */
export async function grpcFetchAll<Type>(client: FlowtradeGrpcWebClient, fetch: (client: FlowtradeGrpcWebClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        result.push(...r)
        pageRequest.key = nextKey
    } while (pageRequest.key && pageRequest.key.length != 0)
    return result;
}

export async function connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, broadcastTimeoutMs?: number, gasPrice?: GasPrice, broadcastPollIntervalMs?: number): Promise<SigningStargateClient> {
    const { registry, aminoTypes } = getSigningRefractedlabsClientOptions();

    return SigningStargateClient.connectWithSigner(endpoint, signer, {
        registry,
        aminoTypes,
        broadcastTimeoutMs,
        gasPrice,
        broadcastPollIntervalMs,
    });
}
