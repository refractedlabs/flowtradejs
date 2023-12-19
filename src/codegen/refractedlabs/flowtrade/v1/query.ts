import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Flow, FlowAmino, FlowSDKType } from "./flow";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetFlowRequest {
  id: bigint;
}
export interface QueryGetFlowRequestProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowRequest";
  value: Uint8Array;
}
export interface QueryGetFlowRequestAmino {
  id?: string;
}
export interface QueryGetFlowRequestAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetFlowRequest";
  value: QueryGetFlowRequestAmino;
}
export interface QueryGetFlowRequestSDKType {
  id: bigint;
}
export interface QueryGetFlowResponse {
  flow: Flow;
}
export interface QueryGetFlowResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowResponse";
  value: Uint8Array;
}
export interface QueryGetFlowResponseAmino {
  flow?: FlowAmino;
}
export interface QueryGetFlowResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetFlowResponse";
  value: QueryGetFlowResponseAmino;
}
export interface QueryGetFlowResponseSDKType {
  flow: FlowSDKType;
}
export interface QueryAllFlowRequest {
  pagination?: PageRequest;
}
export interface QueryAllFlowRequestProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryAllFlowRequest";
  value: Uint8Array;
}
export interface QueryAllFlowRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllFlowRequestAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryAllFlowRequest";
  value: QueryAllFlowRequestAmino;
}
export interface QueryAllFlowRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllFlowResponse {
  flow: Flow[];
  pagination?: PageResponse;
}
export interface QueryAllFlowResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryAllFlowResponse";
  value: Uint8Array;
}
export interface QueryAllFlowResponseAmino {
  flow?: FlowAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllFlowResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryAllFlowResponse";
  value: QueryAllFlowResponseAmino;
}
export interface QueryAllFlowResponseSDKType {
  flow: FlowSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPositionRequest {
  flow: bigint;
  owner: string;
}
export interface QueryGetPositionRequestProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetPositionRequest";
  value: Uint8Array;
}
export interface QueryGetPositionRequestAmino {
  flow?: string;
  owner?: string;
}
export interface QueryGetPositionRequestAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetPositionRequest";
  value: QueryGetPositionRequestAmino;
}
export interface QueryGetPositionRequestSDKType {
  flow: bigint;
  owner: string;
}
export interface QueryGetPositionResponse {
  position: Position;
}
export interface QueryGetPositionResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetPositionResponse";
  value: Uint8Array;
}
export interface QueryGetPositionResponseAmino {
  position?: PositionAmino;
}
export interface QueryGetPositionResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetPositionResponse";
  value: QueryGetPositionResponseAmino;
}
export interface QueryGetPositionResponseSDKType {
  position: PositionSDKType;
}
export interface QueryGetFlowPositionsRequest {
  flow: bigint;
  pagination?: PageRequest;
}
export interface QueryGetFlowPositionsRequestProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsRequest";
  value: Uint8Array;
}
export interface QueryGetFlowPositionsRequestAmino {
  flow?: string;
  pagination?: PageRequestAmino;
}
export interface QueryGetFlowPositionsRequestAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsRequest";
  value: QueryGetFlowPositionsRequestAmino;
}
export interface QueryGetFlowPositionsRequestSDKType {
  flow: bigint;
  pagination?: PageRequestSDKType;
}
export interface QueryGetFlowPositionsResponse {
  position: Position[];
  pagination?: PageResponse;
}
export interface QueryGetFlowPositionsResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsResponse";
  value: Uint8Array;
}
export interface QueryGetFlowPositionsResponseAmino {
  position?: PositionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGetFlowPositionsResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsResponse";
  value: QueryGetFlowPositionsResponseAmino;
}
export interface QueryGetFlowPositionsResponseSDKType {
  position: PositionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetUserPositionsRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryGetUserPositionsRequestProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsRequest";
  value: Uint8Array;
}
export interface QueryGetUserPositionsRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryGetUserPositionsRequestAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsRequest";
  value: QueryGetUserPositionsRequestAmino;
}
export interface QueryGetUserPositionsRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
export interface QueryGetUserPositionsResponse {
  position: Position[];
  pagination?: PageResponse;
}
export interface QueryGetUserPositionsResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsResponse";
  value: Uint8Array;
}
export interface QueryGetUserPositionsResponseAmino {
  position?: PositionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGetUserPositionsResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsResponse";
  value: QueryGetUserPositionsResponseAmino;
}
export interface QueryGetUserPositionsResponseSDKType {
  position: PositionSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetFlowRequest(): QueryGetFlowRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetFlowRequest = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowRequest",
  encode(message: QueryGetFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFlowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetFlowRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowRequest>): QueryGetFlowRequest {
    const message = createBaseQueryGetFlowRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetFlowRequestAmino): QueryGetFlowRequest {
    const message = createBaseQueryGetFlowRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetFlowRequest): QueryGetFlowRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFlowRequestAminoMsg): QueryGetFlowRequest {
    return QueryGetFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFlowRequestProtoMsg): QueryGetFlowRequest {
    return QueryGetFlowRequest.decode(message.value);
  },
  toProto(message: QueryGetFlowRequest): Uint8Array {
    return QueryGetFlowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFlowRequest): QueryGetFlowRequestProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowRequest",
      value: QueryGetFlowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetFlowResponse(): QueryGetFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const QueryGetFlowResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowResponse",
  encode(message: QueryGetFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowResponse {
    return {
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined
    };
  },
  toJSON(message: QueryGetFlowResponse): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowResponse>): QueryGetFlowResponse {
    const message = createBaseQueryGetFlowResponse();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFlowResponseAmino): QueryGetFlowResponse {
    const message = createBaseQueryGetFlowResponse();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: QueryGetFlowResponse): QueryGetFlowResponseAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFlowResponseAminoMsg): QueryGetFlowResponse {
    return QueryGetFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFlowResponseProtoMsg): QueryGetFlowResponse {
    return QueryGetFlowResponse.decode(message.value);
  },
  toProto(message: QueryGetFlowResponse): Uint8Array {
    return QueryGetFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFlowResponse): QueryGetFlowResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowResponse",
      value: QueryGetFlowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllFlowRequest(): QueryAllFlowRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllFlowRequest = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryAllFlowRequest",
  encode(message: QueryAllFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFlowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllFlowRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowRequest>): QueryAllFlowRequest {
    const message = createBaseQueryAllFlowRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFlowRequestAmino): QueryAllFlowRequest {
    const message = createBaseQueryAllFlowRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFlowRequest): QueryAllFlowRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowRequestAminoMsg): QueryAllFlowRequest {
    return QueryAllFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowRequestProtoMsg): QueryAllFlowRequest {
    return QueryAllFlowRequest.decode(message.value);
  },
  toProto(message: QueryAllFlowRequest): Uint8Array {
    return QueryAllFlowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFlowRequest): QueryAllFlowRequestProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryAllFlowRequest",
      value: QueryAllFlowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllFlowResponse(): QueryAllFlowResponse {
  return {
    flow: [],
    pagination: undefined
  };
}
export const QueryAllFlowResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryAllFlowResponse",
  encode(message: QueryAllFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flow) {
      Flow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow.push(Flow.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllFlowResponse {
    return {
      flow: Array.isArray(object?.flow) ? object.flow.map((e: any) => Flow.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowResponse): unknown {
    const obj: any = {};
    if (message.flow) {
      obj.flow = message.flow.map(e => e ? Flow.toJSON(e) : undefined);
    } else {
      obj.flow = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowResponse>): QueryAllFlowResponse {
    const message = createBaseQueryAllFlowResponse();
    message.flow = object.flow?.map(e => Flow.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFlowResponseAmino): QueryAllFlowResponse {
    const message = createBaseQueryAllFlowResponse();
    message.flow = object.flow?.map(e => Flow.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFlowResponse): QueryAllFlowResponseAmino {
    const obj: any = {};
    if (message.flow) {
      obj.flow = message.flow.map(e => e ? Flow.toAmino(e) : undefined);
    } else {
      obj.flow = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowResponseAminoMsg): QueryAllFlowResponse {
    return QueryAllFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowResponseProtoMsg): QueryAllFlowResponse {
    return QueryAllFlowResponse.decode(message.value);
  },
  toProto(message: QueryAllFlowResponse): Uint8Array {
    return QueryAllFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFlowResponse): QueryAllFlowResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryAllFlowResponse",
      value: QueryAllFlowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPositionRequest(): QueryGetPositionRequest {
  return {
    flow: BigInt(0),
    owner: ""
  };
}
export const QueryGetPositionRequest = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetPositionRequest",
  encode(message: QueryGetPositionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== BigInt(0)) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPositionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPositionRequest {
    return {
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryGetPositionRequest): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPositionRequest>): QueryGetPositionRequest {
    const message = createBaseQueryGetPositionRequest();
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryGetPositionRequestAmino): QueryGetPositionRequest {
    const message = createBaseQueryGetPositionRequest();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryGetPositionRequest): QueryGetPositionRequestAmino {
    const obj: any = {};
    obj.flow = message.flow ? message.flow.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryGetPositionRequestAminoMsg): QueryGetPositionRequest {
    return QueryGetPositionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPositionRequestProtoMsg): QueryGetPositionRequest {
    return QueryGetPositionRequest.decode(message.value);
  },
  toProto(message: QueryGetPositionRequest): Uint8Array {
    return QueryGetPositionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPositionRequest): QueryGetPositionRequestProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetPositionRequest",
      value: QueryGetPositionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPositionResponse(): QueryGetPositionResponse {
  return {
    position: Position.fromPartial({})
  };
}
export const QueryGetPositionResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetPositionResponse",
  encode(message: QueryGetPositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPositionResponse {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined
    };
  },
  toJSON(message: QueryGetPositionResponse): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPositionResponse>): QueryGetPositionResponse {
    const message = createBaseQueryGetPositionResponse();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPositionResponseAmino): QueryGetPositionResponse {
    const message = createBaseQueryGetPositionResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: QueryGetPositionResponse): QueryGetPositionResponseAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPositionResponseAminoMsg): QueryGetPositionResponse {
    return QueryGetPositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPositionResponseProtoMsg): QueryGetPositionResponse {
    return QueryGetPositionResponse.decode(message.value);
  },
  toProto(message: QueryGetPositionResponse): Uint8Array {
    return QueryGetPositionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPositionResponse): QueryGetPositionResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetPositionResponse",
      value: QueryGetPositionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetFlowPositionsRequest(): QueryGetFlowPositionsRequest {
  return {
    flow: BigInt(0),
    pagination: undefined
  };
}
export const QueryGetFlowPositionsRequest = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsRequest",
  encode(message: QueryGetFlowPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== BigInt(0)) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFlowPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowPositionsRequest {
    return {
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGetFlowPositionsRequest): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowPositionsRequest>): QueryGetFlowPositionsRequest {
    const message = createBaseQueryGetFlowPositionsRequest();
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFlowPositionsRequestAmino): QueryGetFlowPositionsRequest {
    const message = createBaseQueryGetFlowPositionsRequest();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetFlowPositionsRequest): QueryGetFlowPositionsRequestAmino {
    const obj: any = {};
    obj.flow = message.flow ? message.flow.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFlowPositionsRequestAminoMsg): QueryGetFlowPositionsRequest {
    return QueryGetFlowPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFlowPositionsRequestProtoMsg): QueryGetFlowPositionsRequest {
    return QueryGetFlowPositionsRequest.decode(message.value);
  },
  toProto(message: QueryGetFlowPositionsRequest): Uint8Array {
    return QueryGetFlowPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFlowPositionsRequest): QueryGetFlowPositionsRequestProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsRequest",
      value: QueryGetFlowPositionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetFlowPositionsResponse(): QueryGetFlowPositionsResponse {
  return {
    position: [],
    pagination: undefined
  };
}
export const QueryGetFlowPositionsResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsResponse",
  encode(message: QueryGetFlowPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.position) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFlowPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position.push(Position.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowPositionsResponse {
    return {
      position: Array.isArray(object?.position) ? object.position.map((e: any) => Position.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGetFlowPositionsResponse): unknown {
    const obj: any = {};
    if (message.position) {
      obj.position = message.position.map(e => e ? Position.toJSON(e) : undefined);
    } else {
      obj.position = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowPositionsResponse>): QueryGetFlowPositionsResponse {
    const message = createBaseQueryGetFlowPositionsResponse();
    message.position = object.position?.map(e => Position.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFlowPositionsResponseAmino): QueryGetFlowPositionsResponse {
    const message = createBaseQueryGetFlowPositionsResponse();
    message.position = object.position?.map(e => Position.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetFlowPositionsResponse): QueryGetFlowPositionsResponseAmino {
    const obj: any = {};
    if (message.position) {
      obj.position = message.position.map(e => e ? Position.toAmino(e) : undefined);
    } else {
      obj.position = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFlowPositionsResponseAminoMsg): QueryGetFlowPositionsResponse {
    return QueryGetFlowPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFlowPositionsResponseProtoMsg): QueryGetFlowPositionsResponse {
    return QueryGetFlowPositionsResponse.decode(message.value);
  },
  toProto(message: QueryGetFlowPositionsResponse): Uint8Array {
    return QueryGetFlowPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFlowPositionsResponse): QueryGetFlowPositionsResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetFlowPositionsResponse",
      value: QueryGetFlowPositionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserPositionsRequest(): QueryGetUserPositionsRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryGetUserPositionsRequest = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsRequest",
  encode(message: QueryGetUserPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUserPositionsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGetUserPositionsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUserPositionsRequest>): QueryGetUserPositionsRequest {
    const message = createBaseQueryGetUserPositionsRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserPositionsRequestAmino): QueryGetUserPositionsRequest {
    const message = createBaseQueryGetUserPositionsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetUserPositionsRequest): QueryGetUserPositionsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserPositionsRequestAminoMsg): QueryGetUserPositionsRequest {
    return QueryGetUserPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserPositionsRequestProtoMsg): QueryGetUserPositionsRequest {
    return QueryGetUserPositionsRequest.decode(message.value);
  },
  toProto(message: QueryGetUserPositionsRequest): Uint8Array {
    return QueryGetUserPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserPositionsRequest): QueryGetUserPositionsRequestProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsRequest",
      value: QueryGetUserPositionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserPositionsResponse(): QueryGetUserPositionsResponse {
  return {
    position: [],
    pagination: undefined
  };
}
export const QueryGetUserPositionsResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsResponse",
  encode(message: QueryGetUserPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.position) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position.push(Position.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUserPositionsResponse {
    return {
      position: Array.isArray(object?.position) ? object.position.map((e: any) => Position.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGetUserPositionsResponse): unknown {
    const obj: any = {};
    if (message.position) {
      obj.position = message.position.map(e => e ? Position.toJSON(e) : undefined);
    } else {
      obj.position = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUserPositionsResponse>): QueryGetUserPositionsResponse {
    const message = createBaseQueryGetUserPositionsResponse();
    message.position = object.position?.map(e => Position.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserPositionsResponseAmino): QueryGetUserPositionsResponse {
    const message = createBaseQueryGetUserPositionsResponse();
    message.position = object.position?.map(e => Position.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetUserPositionsResponse): QueryGetUserPositionsResponseAmino {
    const obj: any = {};
    if (message.position) {
      obj.position = message.position.map(e => e ? Position.toAmino(e) : undefined);
    } else {
      obj.position = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserPositionsResponseAminoMsg): QueryGetUserPositionsResponse {
    return QueryGetUserPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserPositionsResponseProtoMsg): QueryGetUserPositionsResponse {
    return QueryGetUserPositionsResponse.decode(message.value);
  },
  toProto(message: QueryGetUserPositionsResponse): Uint8Array {
    return QueryGetUserPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserPositionsResponse): QueryGetUserPositionsResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.QueryGetUserPositionsResponse",
      value: QueryGetUserPositionsResponse.encode(message).finish()
    };
  }
};