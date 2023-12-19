import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetFlowRequest, QueryGetFlowResponse, QueryAllFlowRequest, QueryAllFlowResponse, QueryGetPositionRequest, QueryGetPositionResponse, QueryGetFlowPositionsRequest, QueryGetFlowPositionsResponse, QueryGetUserPositionsRequest, QueryGetUserPositionsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  flow(request: DeepPartial<QueryGetFlowRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowResponse>;
  flowAll(request?: DeepPartial<QueryAllFlowRequest>, metadata?: grpc.Metadata): Promise<QueryAllFlowResponse>;
  position(request: DeepPartial<QueryGetPositionRequest>, metadata?: grpc.Metadata): Promise<QueryGetPositionResponse>;
  flowPositions(request: DeepPartial<QueryGetFlowPositionsRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowPositionsResponse>;
  userPositions(request: DeepPartial<QueryGetUserPositionsRequest>, metadata?: grpc.Metadata): Promise<QueryGetUserPositionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.flow = this.flow.bind(this);
    this.flowAll = this.flowAll.bind(this);
    this.position = this.position.bind(this);
    this.flowPositions = this.flowPositions.bind(this);
    this.userPositions = this.userPositions.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  flow(request: DeepPartial<QueryGetFlowRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowResponse> {
    return this.rpc.unary(QueryFlowDesc, QueryGetFlowRequest.fromPartial(request as any), metadata);
  }
  flowAll(request: DeepPartial<QueryAllFlowRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllFlowResponse> {
    return this.rpc.unary(QueryFlowAllDesc, QueryAllFlowRequest.fromPartial(request as any), metadata);
  }
  position(request: DeepPartial<QueryGetPositionRequest>, metadata?: grpc.Metadata): Promise<QueryGetPositionResponse> {
    return this.rpc.unary(QueryPositionDesc, QueryGetPositionRequest.fromPartial(request as any), metadata);
  }
  flowPositions(request: DeepPartial<QueryGetFlowPositionsRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowPositionsResponse> {
    return this.rpc.unary(QueryFlowPositionsDesc, QueryGetFlowPositionsRequest.fromPartial(request as any), metadata);
  }
  userPositions(request: DeepPartial<QueryGetUserPositionsRequest>, metadata?: grpc.Metadata): Promise<QueryGetUserPositionsResponse> {
    return this.rpc.unary(QueryUserPositionsDesc, QueryGetUserPositionsRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "refractedlabs.flowtrade.v1.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryFlowDesc: UnaryMethodDefinitionish = {
  methodName: "Flow",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetFlowRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetFlowResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryFlowAllDesc: UnaryMethodDefinitionish = {
  methodName: "FlowAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllFlowRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllFlowResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPositionDesc: UnaryMethodDefinitionish = {
  methodName: "Position",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetPositionRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPositionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryFlowPositionsDesc: UnaryMethodDefinitionish = {
  methodName: "FlowPositions",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetFlowPositionsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetFlowPositionsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUserPositionsDesc: UnaryMethodDefinitionish = {
  methodName: "UserPositions",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetUserPositionsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetUserPositionsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}