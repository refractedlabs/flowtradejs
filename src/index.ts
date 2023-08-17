import { getSigningRefractedlabsClientOptions, refractedlabs } from "./codegen"
import { PageRequest } from "./codegen/helpers";
import { BrowserHeaders } from "browser-headers";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { GasPrice } from "@cosmjs/stargate/build/fee";

export type FlowtradeLCDClient = Awaited<ReturnType<typeof refractedlabs.ClientFactory.createLCDClient>>
export type FlowtradeGrpcWebClient = Awaited<ReturnType<typeof refractedlabs.ClientFactory.createGrpcWebClient>>

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
 * example:
 * ```ts
 *    const balances = await lcdFetchAll(lcdClient, async (client, pageRequest) => {
 *         const result = await client.cosmos.bank.v1beta1.allBalances({
 *             address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
 *             pagination: pageRequest
 *         })
 *         return [result.pagination.next_key, result.balances]
 *     })
 * ```
 */
export async function lcdFetchAll<Type>(client: FlowtradeLCDClient, fetch: (client: FlowtradeLCDClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        if (r) result.push(...r)
        pageRequest.key = nextKey ? new Uint8Array(Buffer.from(nextKey as any, 'base64')) : null
    } while (pageRequest.key)
    return result;
}

/**
 * ```ts
 * example:
 *     const balances = await grpcFetchAll(grpcClient, async (client, pageRequest) => {
 *         const result = await client.cosmos.bank.v1beta1.allBalances({
 *             address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
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
        if (r) result.push(...r)
        pageRequest.key = nextKey
    } while (pageRequest.key && pageRequest.key.length != 0)
    return result;
}

export function getBrowsersHeadersForBlockHeight(height: number): BrowserHeaders {
    const headers = new BrowserHeaders()
    headers.set("x-cosmos-block-height", `${height}`)
    return headers
}

export async function connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, broadcastTimeoutMs?: number, gasPrice?: GasPrice, broadcastPollIntervalMs?: number): Promise<SigningStargateClient> {
    const {
        registry,
        aminoTypes
    } = getSigningRefractedlabsClientOptions();

    return SigningStargateClient.connectWithSigner(endpoint, signer, {
        registry,
        aminoTypes,
        broadcastTimeoutMs,
        gasPrice,
        broadcastPollIntervalMs,
    });
}