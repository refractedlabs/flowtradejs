import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Flow, FlowSDKType } from "./flow";
import { Position, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetFlowRequest {
  id: bigint;
}
export interface QueryGetFlowRequestSDKType {
  id: bigint;
}
export interface QueryGetFlowResponse {
  flow: Flow;
}
export interface QueryGetFlowResponseSDKType {
  flow: FlowSDKType;
}
export interface QueryAllFlowRequest {
  pagination: PageRequest;
}
export interface QueryAllFlowRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllFlowResponse {
  flow: Flow[];
  pagination: PageResponse;
}
export interface QueryAllFlowResponseSDKType {
  flow: FlowSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetPositionRequest {
  flow: bigint;
  owner: string;
}
export interface QueryGetPositionRequestSDKType {
  flow: bigint;
  owner: string;
}
export interface QueryGetPositionResponse {
  position: Position;
}
export interface QueryGetPositionResponseSDKType {
  position: PositionSDKType;
}
export interface QueryGetFlowPositionsRequest {
  flow: bigint;
  pagination: PageRequest;
}
export interface QueryGetFlowPositionsRequestSDKType {
  flow: bigint;
  pagination: PageRequestSDKType;
}
export interface QueryGetFlowPositionsResponse {
  position: Position[];
  pagination: PageResponse;
}
export interface QueryGetFlowPositionsResponseSDKType {
  position: PositionSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetUserPositionsRequest {
  owner: string;
  pagination: PageRequest;
}
export interface QueryGetUserPositionsRequestSDKType {
  owner: string;
  pagination: PageRequestSDKType;
}
export interface QueryGetUserPositionsResponse {
  position: Position[];
  pagination: PageResponse;
}
export interface QueryGetUserPositionsResponseSDKType {
  position: PositionSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
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
  }
};
function createBaseQueryGetFlowRequest(): QueryGetFlowRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetFlowRequest = {
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
  }
};
function createBaseQueryGetFlowResponse(): QueryGetFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const QueryGetFlowResponse = {
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
  }
};
function createBaseQueryAllFlowRequest(): QueryAllFlowRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllFlowRequest = {
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
  }
};
function createBaseQueryAllFlowResponse(): QueryAllFlowResponse {
  return {
    flow: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllFlowResponse = {
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
  }
};
function createBaseQueryGetPositionRequest(): QueryGetPositionRequest {
  return {
    flow: BigInt(0),
    owner: ""
  };
}
export const QueryGetPositionRequest = {
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
  }
};
function createBaseQueryGetPositionResponse(): QueryGetPositionResponse {
  return {
    position: Position.fromPartial({})
  };
}
export const QueryGetPositionResponse = {
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
  }
};
function createBaseQueryGetFlowPositionsRequest(): QueryGetFlowPositionsRequest {
  return {
    flow: BigInt(0),
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGetFlowPositionsRequest = {
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
  }
};
function createBaseQueryGetFlowPositionsResponse(): QueryGetFlowPositionsResponse {
  return {
    position: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGetFlowPositionsResponse = {
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
  }
};
function createBaseQueryGetUserPositionsRequest(): QueryGetUserPositionsRequest {
  return {
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGetUserPositionsRequest = {
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
  }
};
function createBaseQueryGetUserPositionsResponse(): QueryGetUserPositionsResponse {
  return {
    position: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGetUserPositionsResponse = {
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
  }
};