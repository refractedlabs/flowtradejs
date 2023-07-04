//@ts-nocheck
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateFlow, MsgCreateFlowResponse, MsgJoinFlow, MsgJoinFlowResponse, MsgExitFlow, MsgExitFlowResponse, MsgSetOperator, MsgSetOperatorResponse, MsgClaimTokenIn, MsgClaimTokenInResponse, MsgClaimTokenOut, MsgClaimTokenOutResponse, MsgStopFlow, MsgStopFlowResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  createFlow(request: DeepPartial<MsgCreateFlow>, metadata?: grpc.Metadata): Promise<MsgCreateFlowResponse>;
  joinFlow(request: DeepPartial<MsgJoinFlow>, metadata?: grpc.Metadata): Promise<MsgJoinFlowResponse>;
  exitFlow(request: DeepPartial<MsgExitFlow>, metadata?: grpc.Metadata): Promise<MsgExitFlowResponse>;
  setOperator(request: DeepPartial<MsgSetOperator>, metadata?: grpc.Metadata): Promise<MsgSetOperatorResponse>;
  claimTokenIn(request: DeepPartial<MsgClaimTokenIn>, metadata?: grpc.Metadata): Promise<MsgClaimTokenInResponse>;
  claimTokenOut(request: DeepPartial<MsgClaimTokenOut>, metadata?: grpc.Metadata): Promise<MsgClaimTokenOutResponse>;
  stopFlow(request: DeepPartial<MsgStopFlow>, metadata?: grpc.Metadata): Promise<MsgStopFlowResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createFlow = this.createFlow.bind(this);
    this.joinFlow = this.joinFlow.bind(this);
    this.exitFlow = this.exitFlow.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.claimTokenIn = this.claimTokenIn.bind(this);
    this.claimTokenOut = this.claimTokenOut.bind(this);
    this.stopFlow = this.stopFlow.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }
  createFlow(request: DeepPartial<MsgCreateFlow>, metadata?: grpc.Metadata): Promise<MsgCreateFlowResponse> {
    return this.rpc.unary(MsgCreateFlowDesc, MsgCreateFlow.fromPartial(request), metadata);
  }
  joinFlow(request: DeepPartial<MsgJoinFlow>, metadata?: grpc.Metadata): Promise<MsgJoinFlowResponse> {
    return this.rpc.unary(MsgJoinFlowDesc, MsgJoinFlow.fromPartial(request), metadata);
  }
  exitFlow(request: DeepPartial<MsgExitFlow>, metadata?: grpc.Metadata): Promise<MsgExitFlowResponse> {
    return this.rpc.unary(MsgExitFlowDesc, MsgExitFlow.fromPartial(request), metadata);
  }
  setOperator(request: DeepPartial<MsgSetOperator>, metadata?: grpc.Metadata): Promise<MsgSetOperatorResponse> {
    return this.rpc.unary(MsgSetOperatorDesc, MsgSetOperator.fromPartial(request), metadata);
  }
  claimTokenIn(request: DeepPartial<MsgClaimTokenIn>, metadata?: grpc.Metadata): Promise<MsgClaimTokenInResponse> {
    return this.rpc.unary(MsgClaimTokenInDesc, MsgClaimTokenIn.fromPartial(request), metadata);
  }
  claimTokenOut(request: DeepPartial<MsgClaimTokenOut>, metadata?: grpc.Metadata): Promise<MsgClaimTokenOutResponse> {
    return this.rpc.unary(MsgClaimTokenOutDesc, MsgClaimTokenOut.fromPartial(request), metadata);
  }
  stopFlow(request: DeepPartial<MsgStopFlow>, metadata?: grpc.Metadata): Promise<MsgStopFlowResponse> {
    return this.rpc.unary(MsgStopFlowDesc, MsgStopFlow.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "refractedlabs.flowtrade.Msg"
};
export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCreateFlowDesc: UnaryMethodDefinitionish = {
  methodName: "CreateFlow",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateFlow.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateFlowResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgJoinFlowDesc: UnaryMethodDefinitionish = {
  methodName: "JoinFlow",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgJoinFlow.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgJoinFlowResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgExitFlowDesc: UnaryMethodDefinitionish = {
  methodName: "ExitFlow",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExitFlow.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitFlowResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSetOperatorDesc: UnaryMethodDefinitionish = {
  methodName: "SetOperator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSetOperator.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetOperatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgClaimTokenInDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimTokenIn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgClaimTokenIn.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimTokenInResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgClaimTokenOutDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimTokenOut",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgClaimTokenOut.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimTokenOutResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgStopFlowDesc: UnaryMethodDefinitionish = {
  methodName: "StopFlow",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgStopFlow.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgStopFlowResponse.decode(data),
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