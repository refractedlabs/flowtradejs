//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetFlowRequest, QueryGetFlowResponseSDKType, QueryAllFlowRequest, QueryAllFlowResponseSDKType, QueryGetPositionRequest, QueryGetPositionResponseSDKType, QueryGetFlowPositionsRequest, QueryGetFlowPositionsResponseSDKType, QueryGetUserPositionsRequest, QueryGetUserPositionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.flow = this.flow.bind(this);
    this.flowAll = this.flowAll.bind(this);
    this.position = this.position.bind(this);
    this.flowPositions = this.flowPositions.bind(this);
    this.userPositions = this.userPositions.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `flowtrade/flowtrade/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Flow */
  async flow(params: QueryGetFlowRequest): Promise<QueryGetFlowResponseSDKType> {
    const endpoint = `refractedlabs/flowtrade/flowtrade/flow/${params.id}`;
    return await this.req.get<QueryGetFlowResponseSDKType>(endpoint);
  }
  /* FlowAll */
  async flowAll(params: QueryAllFlowRequest = {
    pagination: undefined
  }): Promise<QueryAllFlowResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `refractedlabs/flowtrade/flowtrade/flow`;
    return await this.req.get<QueryAllFlowResponseSDKType>(endpoint, options);
  }
  /* Position */
  async position(params: QueryGetPositionRequest): Promise<QueryGetPositionResponseSDKType> {
    const endpoint = `refractedlabs/flowtrade/flowtrade/position/${params.flow}/${params.owner}`;
    return await this.req.get<QueryGetPositionResponseSDKType>(endpoint);
  }
  /* FlowPositions */
  async flowPositions(params: QueryGetFlowPositionsRequest): Promise<QueryGetFlowPositionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `refractedlabs/flowtrade/flowtrade/flow-positions/${params.flow}`;
    return await this.req.get<QueryGetFlowPositionsResponseSDKType>(endpoint, options);
  }
  /* UserPositions */
  async userPositions(params: QueryGetUserPositionsRequest): Promise<QueryGetUserPositionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `refractedlabs/flowtrade/flowtrade/user-positions/${params.owner}`;
    return await this.req.get<QueryGetUserPositionsResponseSDKType>(endpoint, options);
  }
}