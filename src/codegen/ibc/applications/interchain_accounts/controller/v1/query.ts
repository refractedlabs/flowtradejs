import { Params, ParamsAmino, ParamsSDKType } from "./controller";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../../registry";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequest {
  owner: string;
  connectionId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest";
  value: Uint8Array;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequestAmino {
  owner?: string;
  connection_id?: string;
}
export interface QueryInterchainAccountRequestAminoMsg {
  type: "cosmos-sdk/QueryInterchainAccountRequest";
  value: QueryInterchainAccountRequestAmino;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequestSDKType {
  owner: string;
  connection_id: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponse {
  address: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse";
  value: Uint8Array;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponseAmino {
  address?: string;
}
export interface QueryInterchainAccountResponseAminoMsg {
  type: "cosmos-sdk/QueryInterchainAccountResponse";
  value: QueryInterchainAccountResponseAmino;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponseSDKType {
  address: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
  aminoType: "cosmos-sdk/QueryInterchainAccountRequest",
  is(o: any): o is QueryInterchainAccountRequest {
    return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string");
  },
  isSDK(o: any): o is QueryInterchainAccountRequestSDKType {
    return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string");
  },
  isAmino(o: any): o is QueryInterchainAccountRequestAmino {
    return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string");
  },
  encode(message: QueryInterchainAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryInterchainAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  toJSON(message: QueryInterchainAccountRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountRequestAmino): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountRequest, useInterfaces: boolean = true): QueryInterchainAccountRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountRequestAminoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInterchainAccountRequest, useInterfaces: boolean = true): QueryInterchainAccountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg, useInterfaces: boolean = true): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryInterchainAccountRequest): Uint8Array {
    return QueryInterchainAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInterchainAccountRequest.typeUrl, QueryInterchainAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryInterchainAccountRequest.aminoType, QueryInterchainAccountRequest.typeUrl);
function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    address: ""
  };
}
export const QueryInterchainAccountResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
  aminoType: "cosmos-sdk/QueryInterchainAccountResponse",
  is(o: any): o is QueryInterchainAccountResponse {
    return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryInterchainAccountResponseSDKType {
    return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryInterchainAccountResponseAmino {
    return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryInterchainAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryInterchainAccountResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountResponseAmino): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountResponse, useInterfaces: boolean = true): QueryInterchainAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountResponseAminoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInterchainAccountResponse, useInterfaces: boolean = true): QueryInterchainAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg, useInterfaces: boolean = true): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryInterchainAccountResponse): Uint8Array {
    return QueryInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInterchainAccountResponse.typeUrl, QueryInterchainAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryInterchainAccountResponse.aminoType, QueryInterchainAccountResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
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
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
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
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);