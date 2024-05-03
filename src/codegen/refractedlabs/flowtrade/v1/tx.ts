import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FlowCreationRequest, FlowCreationRequestAmino, FlowCreationRequestSDKType, Flow, FlowAmino, FlowSDKType } from "./flow";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "refracted/flowtrade/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateFlow {
  creator: string;
  request: FlowCreationRequest;
}
export interface MsgCreateFlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow";
  value: Uint8Array;
}
export interface MsgCreateFlowAmino {
  creator?: string;
  request: FlowCreationRequestAmino;
}
export interface MsgCreateFlowAminoMsg {
  type: "refracted/flowtrade/v1/CreateFlow";
  value: MsgCreateFlowAmino;
}
export interface MsgCreateFlowSDKType {
  creator: string;
  request: FlowCreationRequestSDKType;
}
export interface MsgCreateFlowResponse {
  flow: Flow;
}
export interface MsgCreateFlowResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlowResponse";
  value: Uint8Array;
}
export interface MsgCreateFlowResponseAmino {
  flow?: FlowAmino;
}
export interface MsgCreateFlowResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgCreateFlowResponse";
  value: MsgCreateFlowResponseAmino;
}
export interface MsgCreateFlowResponseSDKType {
  flow: FlowSDKType;
}
export interface MsgJoinFlow {
  flow: bigint;
  address: string;
  amount: Coin;
  signer: string;
}
export interface MsgJoinFlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow";
  value: Uint8Array;
}
export interface MsgJoinFlowAmino {
  flow: string;
  address?: string;
  amount: CoinAmino;
  signer?: string;
}
export interface MsgJoinFlowAminoMsg {
  type: "refracted/flowtrade/v1/JoinFlow";
  value: MsgJoinFlowAmino;
}
export interface MsgJoinFlowSDKType {
  flow: bigint;
  address: string;
  amount: CoinSDKType;
  signer: string;
}
export interface MsgJoinFlowResponse {
  position: Position;
}
export interface MsgJoinFlowResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlowResponse";
  value: Uint8Array;
}
export interface MsgJoinFlowResponseAmino {
  position?: PositionAmino;
}
export interface MsgJoinFlowResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgJoinFlowResponse";
  value: MsgJoinFlowResponseAmino;
}
export interface MsgJoinFlowResponseSDKType {
  position: PositionSDKType;
}
export interface MsgExitFlow {
  flow: bigint;
  address: string;
  amount: Coin;
  signer: string;
}
export interface MsgExitFlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow";
  value: Uint8Array;
}
export interface MsgExitFlowAmino {
  flow: string;
  address?: string;
  amount: CoinAmino;
  signer?: string;
}
export interface MsgExitFlowAminoMsg {
  type: "refracted/flowtrade/v1/ExitFlow";
  value: MsgExitFlowAmino;
}
export interface MsgExitFlowSDKType {
  flow: bigint;
  address: string;
  amount: CoinSDKType;
  signer: string;
}
export interface MsgExitFlowResponse {
  position: Position;
}
export interface MsgExitFlowResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlowResponse";
  value: Uint8Array;
}
export interface MsgExitFlowResponseAmino {
  position?: PositionAmino;
}
export interface MsgExitFlowResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgExitFlowResponse";
  value: MsgExitFlowResponseAmino;
}
export interface MsgExitFlowResponseSDKType {
  position: PositionSDKType;
}
export interface MsgSetOperator {
  flow: bigint;
  owner: string;
  operator: string;
}
export interface MsgSetOperatorProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator";
  value: Uint8Array;
}
export interface MsgSetOperatorAmino {
  flow: string;
  owner?: string;
  operator?: string;
}
export interface MsgSetOperatorAminoMsg {
  type: "refracted/flowtrade/v1/SetOperator";
  value: MsgSetOperatorAmino;
}
export interface MsgSetOperatorSDKType {
  flow: bigint;
  owner: string;
  operator: string;
}
export interface MsgSetOperatorResponse {}
export interface MsgSetOperatorResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperatorResponse";
  value: Uint8Array;
}
export interface MsgSetOperatorResponseAmino {}
export interface MsgSetOperatorResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgSetOperatorResponse";
  value: MsgSetOperatorResponseAmino;
}
export interface MsgSetOperatorResponseSDKType {}
export interface MsgClaimTokenIn {
  creator: string;
  flow: bigint;
  treasuryAddress: string;
}
export interface MsgClaimTokenInProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn";
  value: Uint8Array;
}
export interface MsgClaimTokenInAmino {
  creator?: string;
  flow: string;
  treasury_address?: string;
}
export interface MsgClaimTokenInAminoMsg {
  type: "refracted/flowtrade/v1/ClaimTokenIn";
  value: MsgClaimTokenInAmino;
}
export interface MsgClaimTokenInSDKType {
  creator: string;
  flow: bigint;
  treasury_address: string;
}
export interface MsgClaimTokenInResponse {
  claimed: Coin;
  fee: Coin;
}
export interface MsgClaimTokenInResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenInResponse";
  value: Uint8Array;
}
export interface MsgClaimTokenInResponseAmino {
  claimed?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgClaimTokenInResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgClaimTokenInResponse";
  value: MsgClaimTokenInResponseAmino;
}
export interface MsgClaimTokenInResponseSDKType {
  claimed: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgClaimTokenOut {
  flow: bigint;
  address: string;
  signer: string;
}
export interface MsgClaimTokenOutProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut";
  value: Uint8Array;
}
export interface MsgClaimTokenOutAmino {
  flow: string;
  address?: string;
  signer?: string;
}
export interface MsgClaimTokenOutAminoMsg {
  type: "refracted/flowtrade/v1/ClaimTokenOut";
  value: MsgClaimTokenOutAmino;
}
export interface MsgClaimTokenOutSDKType {
  flow: bigint;
  address: string;
  signer: string;
}
export interface MsgClaimTokenOutResponse {
  claimed: Coin;
  fee: Coin;
}
export interface MsgClaimTokenOutResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOutResponse";
  value: Uint8Array;
}
export interface MsgClaimTokenOutResponseAmino {
  claimed?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgClaimTokenOutResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgClaimTokenOutResponse";
  value: MsgClaimTokenOutResponseAmino;
}
export interface MsgClaimTokenOutResponseSDKType {
  claimed: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgStopFlow {
  flowId: bigint;
  creator: string;
}
export interface MsgStopFlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow";
  value: Uint8Array;
}
export interface MsgStopFlowAmino {
  flow_id: string;
  creator?: string;
}
export interface MsgStopFlowAminoMsg {
  type: "refracted/flowtrade/v1/StopFlow";
  value: MsgStopFlowAmino;
}
export interface MsgStopFlowSDKType {
  flow_id: bigint;
  creator: string;
}
export interface MsgStopFlowResponse {}
export interface MsgStopFlowResponseProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlowResponse";
  value: Uint8Array;
}
export interface MsgStopFlowResponseAmino {}
export interface MsgStopFlowResponseAminoMsg {
  type: "/refractedlabs.flowtrade.v1.MsgStopFlowResponse";
  value: MsgStopFlowResponseAmino;
}
export interface MsgStopFlowResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams",
  aminoType: "refracted/flowtrade/v1/UpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAminoMsg {
    return {
      type: "refracted/flowtrade/v1/UpdateParams",
      value: MsgUpdateParams.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg, useInterfaces: boolean = true): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse, useInterfaces: boolean = true): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgCreateFlow(): MsgCreateFlow {
  return {
    creator: "",
    request: FlowCreationRequest.fromPartial({})
  };
}
export const MsgCreateFlow = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow",
  aminoType: "refracted/flowtrade/v1/CreateFlow",
  is(o: any): o is MsgCreateFlow {
    return o && (o.$typeUrl === MsgCreateFlow.typeUrl || typeof o.creator === "string" && FlowCreationRequest.is(o.request));
  },
  isSDK(o: any): o is MsgCreateFlowSDKType {
    return o && (o.$typeUrl === MsgCreateFlow.typeUrl || typeof o.creator === "string" && FlowCreationRequest.isSDK(o.request));
  },
  isAmino(o: any): o is MsgCreateFlowAmino {
    return o && (o.$typeUrl === MsgCreateFlow.typeUrl || typeof o.creator === "string" && FlowCreationRequest.isAmino(o.request));
  },
  encode(message: MsgCreateFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.request !== undefined) {
      FlowCreationRequest.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.request = FlowCreationRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateFlow {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      request: isSet(object.request) ? FlowCreationRequest.fromJSON(object.request) : undefined
    };
  },
  toJSON(message: MsgCreateFlow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.request !== undefined && (obj.request = message.request ? FlowCreationRequest.toJSON(message.request) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateFlow>): MsgCreateFlow {
    const message = createBaseMsgCreateFlow();
    message.creator = object.creator ?? "";
    message.request = object.request !== undefined && object.request !== null ? FlowCreationRequest.fromPartial(object.request) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateFlowAmino): MsgCreateFlow {
    const message = createBaseMsgCreateFlow();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = FlowCreationRequest.fromAmino(object.request);
    }
    return message;
  },
  toAmino(message: MsgCreateFlow, useInterfaces: boolean = true): MsgCreateFlowAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.request = message.request ? FlowCreationRequest.toAmino(message.request, useInterfaces) : FlowCreationRequest.toAmino(FlowCreationRequest.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateFlowAminoMsg): MsgCreateFlow {
    return MsgCreateFlow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateFlow, useInterfaces: boolean = true): MsgCreateFlowAminoMsg {
    return {
      type: "refracted/flowtrade/v1/CreateFlow",
      value: MsgCreateFlow.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCreateFlowProtoMsg, useInterfaces: boolean = true): MsgCreateFlow {
    return MsgCreateFlow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateFlow): Uint8Array {
    return MsgCreateFlow.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFlow): MsgCreateFlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow",
      value: MsgCreateFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateFlow.typeUrl, MsgCreateFlow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateFlow.aminoType, MsgCreateFlow.typeUrl);
function createBaseMsgCreateFlowResponse(): MsgCreateFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const MsgCreateFlowResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlowResponse",
  is(o: any): o is MsgCreateFlowResponse {
    return o && (o.$typeUrl === MsgCreateFlowResponse.typeUrl || Flow.is(o.flow));
  },
  isSDK(o: any): o is MsgCreateFlowResponseSDKType {
    return o && (o.$typeUrl === MsgCreateFlowResponse.typeUrl || Flow.isSDK(o.flow));
  },
  isAmino(o: any): o is MsgCreateFlowResponseAmino {
    return o && (o.$typeUrl === MsgCreateFlowResponse.typeUrl || Flow.isAmino(o.flow));
  },
  encode(message: MsgCreateFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateFlowResponse {
    return {
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined
    };
  },
  toJSON(message: MsgCreateFlowResponse): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateFlowResponse>): MsgCreateFlowResponse {
    const message = createBaseMsgCreateFlowResponse();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateFlowResponseAmino): MsgCreateFlowResponse {
    const message = createBaseMsgCreateFlowResponse();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: MsgCreateFlowResponse, useInterfaces: boolean = true): MsgCreateFlowResponseAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateFlowResponseAminoMsg): MsgCreateFlowResponse {
    return MsgCreateFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateFlowResponseProtoMsg, useInterfaces: boolean = true): MsgCreateFlowResponse {
    return MsgCreateFlowResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateFlowResponse): Uint8Array {
    return MsgCreateFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFlowResponse): MsgCreateFlowResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlowResponse",
      value: MsgCreateFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateFlowResponse.typeUrl, MsgCreateFlowResponse);
function createBaseMsgJoinFlow(): MsgJoinFlow {
  return {
    flow: BigInt(0),
    address: "",
    amount: Coin.fromPartial({}),
    signer: ""
  };
}
export const MsgJoinFlow = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow",
  aminoType: "refracted/flowtrade/v1/JoinFlow",
  is(o: any): o is MsgJoinFlow {
    return o && (o.$typeUrl === MsgJoinFlow.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && Coin.is(o.amount) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgJoinFlowSDKType {
    return o && (o.$typeUrl === MsgJoinFlow.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && Coin.isSDK(o.amount) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgJoinFlowAmino {
    return o && (o.$typeUrl === MsgJoinFlow.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && Coin.isAmino(o.amount) && typeof o.signer === "string");
  },
  encode(message: MsgJoinFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== BigInt(0)) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinFlow {
    return {
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgJoinFlow): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinFlow>): MsgJoinFlow {
    const message = createBaseMsgJoinFlow();
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgJoinFlowAmino): MsgJoinFlow {
    const message = createBaseMsgJoinFlow();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgJoinFlow, useInterfaces: boolean = true): MsgJoinFlowAmino {
    const obj: any = {};
    obj.flow = message.flow ? message.flow.toString() : "0";
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : Coin.toAmino(Coin.fromPartial({}));
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgJoinFlowAminoMsg): MsgJoinFlow {
    return MsgJoinFlow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinFlow, useInterfaces: boolean = true): MsgJoinFlowAminoMsg {
    return {
      type: "refracted/flowtrade/v1/JoinFlow",
      value: MsgJoinFlow.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgJoinFlowProtoMsg, useInterfaces: boolean = true): MsgJoinFlow {
    return MsgJoinFlow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinFlow): Uint8Array {
    return MsgJoinFlow.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinFlow): MsgJoinFlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow",
      value: MsgJoinFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinFlow.typeUrl, MsgJoinFlow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgJoinFlow.aminoType, MsgJoinFlow.typeUrl);
function createBaseMsgJoinFlowResponse(): MsgJoinFlowResponse {
  return {
    position: Position.fromPartial({})
  };
}
export const MsgJoinFlowResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlowResponse",
  is(o: any): o is MsgJoinFlowResponse {
    return o && (o.$typeUrl === MsgJoinFlowResponse.typeUrl || Position.is(o.position));
  },
  isSDK(o: any): o is MsgJoinFlowResponseSDKType {
    return o && (o.$typeUrl === MsgJoinFlowResponse.typeUrl || Position.isSDK(o.position));
  },
  isAmino(o: any): o is MsgJoinFlowResponseAmino {
    return o && (o.$typeUrl === MsgJoinFlowResponse.typeUrl || Position.isAmino(o.position));
  },
  encode(message: MsgJoinFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinFlowResponse {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined
    };
  },
  toJSON(message: MsgJoinFlowResponse): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinFlowResponse>): MsgJoinFlowResponse {
    const message = createBaseMsgJoinFlowResponse();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: MsgJoinFlowResponseAmino): MsgJoinFlowResponse {
    const message = createBaseMsgJoinFlowResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: MsgJoinFlowResponse, useInterfaces: boolean = true): MsgJoinFlowResponseAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgJoinFlowResponseAminoMsg): MsgJoinFlowResponse {
    return MsgJoinFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinFlowResponseProtoMsg, useInterfaces: boolean = true): MsgJoinFlowResponse {
    return MsgJoinFlowResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinFlowResponse): Uint8Array {
    return MsgJoinFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinFlowResponse): MsgJoinFlowResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlowResponse",
      value: MsgJoinFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinFlowResponse.typeUrl, MsgJoinFlowResponse);
function createBaseMsgExitFlow(): MsgExitFlow {
  return {
    flow: BigInt(0),
    address: "",
    amount: Coin.fromPartial({}),
    signer: ""
  };
}
export const MsgExitFlow = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow",
  aminoType: "refracted/flowtrade/v1/ExitFlow",
  is(o: any): o is MsgExitFlow {
    return o && (o.$typeUrl === MsgExitFlow.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && Coin.is(o.amount) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgExitFlowSDKType {
    return o && (o.$typeUrl === MsgExitFlow.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && Coin.isSDK(o.amount) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgExitFlowAmino {
    return o && (o.$typeUrl === MsgExitFlow.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && Coin.isAmino(o.amount) && typeof o.signer === "string");
  },
  encode(message: MsgExitFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== BigInt(0)) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitFlow {
    return {
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgExitFlow): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgExitFlow>): MsgExitFlow {
    const message = createBaseMsgExitFlow();
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgExitFlowAmino): MsgExitFlow {
    const message = createBaseMsgExitFlow();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgExitFlow, useInterfaces: boolean = true): MsgExitFlowAmino {
    const obj: any = {};
    obj.flow = message.flow ? message.flow.toString() : "0";
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : Coin.toAmino(Coin.fromPartial({}));
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgExitFlowAminoMsg): MsgExitFlow {
    return MsgExitFlow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitFlow, useInterfaces: boolean = true): MsgExitFlowAminoMsg {
    return {
      type: "refracted/flowtrade/v1/ExitFlow",
      value: MsgExitFlow.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgExitFlowProtoMsg, useInterfaces: boolean = true): MsgExitFlow {
    return MsgExitFlow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitFlow): Uint8Array {
    return MsgExitFlow.encode(message).finish();
  },
  toProtoMsg(message: MsgExitFlow): MsgExitFlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow",
      value: MsgExitFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitFlow.typeUrl, MsgExitFlow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExitFlow.aminoType, MsgExitFlow.typeUrl);
function createBaseMsgExitFlowResponse(): MsgExitFlowResponse {
  return {
    position: Position.fromPartial({})
  };
}
export const MsgExitFlowResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlowResponse",
  is(o: any): o is MsgExitFlowResponse {
    return o && (o.$typeUrl === MsgExitFlowResponse.typeUrl || Position.is(o.position));
  },
  isSDK(o: any): o is MsgExitFlowResponseSDKType {
    return o && (o.$typeUrl === MsgExitFlowResponse.typeUrl || Position.isSDK(o.position));
  },
  isAmino(o: any): o is MsgExitFlowResponseAmino {
    return o && (o.$typeUrl === MsgExitFlowResponse.typeUrl || Position.isAmino(o.position));
  },
  encode(message: MsgExitFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitFlowResponse {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined
    };
  },
  toJSON(message: MsgExitFlowResponse): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgExitFlowResponse>): MsgExitFlowResponse {
    const message = createBaseMsgExitFlowResponse();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: MsgExitFlowResponseAmino): MsgExitFlowResponse {
    const message = createBaseMsgExitFlowResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: MsgExitFlowResponse, useInterfaces: boolean = true): MsgExitFlowResponseAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExitFlowResponseAminoMsg): MsgExitFlowResponse {
    return MsgExitFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitFlowResponseProtoMsg, useInterfaces: boolean = true): MsgExitFlowResponse {
    return MsgExitFlowResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitFlowResponse): Uint8Array {
    return MsgExitFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitFlowResponse): MsgExitFlowResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlowResponse",
      value: MsgExitFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitFlowResponse.typeUrl, MsgExitFlowResponse);
function createBaseMsgSetOperator(): MsgSetOperator {
  return {
    flow: BigInt(0),
    owner: "",
    operator: ""
  };
}
export const MsgSetOperator = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator",
  aminoType: "refracted/flowtrade/v1/SetOperator",
  is(o: any): o is MsgSetOperator {
    return o && (o.$typeUrl === MsgSetOperator.typeUrl || typeof o.flow === "bigint" && typeof o.owner === "string" && typeof o.operator === "string");
  },
  isSDK(o: any): o is MsgSetOperatorSDKType {
    return o && (o.$typeUrl === MsgSetOperator.typeUrl || typeof o.flow === "bigint" && typeof o.owner === "string" && typeof o.operator === "string");
  },
  isAmino(o: any): o is MsgSetOperatorAmino {
    return o && (o.$typeUrl === MsgSetOperator.typeUrl || typeof o.flow === "bigint" && typeof o.owner === "string" && typeof o.operator === "string");
  },
  encode(message: MsgSetOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== BigInt(0)) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetOperator {
    return {
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      operator: isSet(object.operator) ? String(object.operator) : ""
    };
  },
  toJSON(message: MsgSetOperator): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },
  fromPartial(object: Partial<MsgSetOperator>): MsgSetOperator {
    const message = createBaseMsgSetOperator();
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgSetOperatorAmino): MsgSetOperator {
    const message = createBaseMsgSetOperator();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgSetOperator, useInterfaces: boolean = true): MsgSetOperatorAmino {
    const obj: any = {};
    obj.flow = message.flow ? message.flow.toString() : "0";
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgSetOperatorAminoMsg): MsgSetOperator {
    return MsgSetOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetOperator, useInterfaces: boolean = true): MsgSetOperatorAminoMsg {
    return {
      type: "refracted/flowtrade/v1/SetOperator",
      value: MsgSetOperator.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetOperatorProtoMsg, useInterfaces: boolean = true): MsgSetOperator {
    return MsgSetOperator.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetOperator): Uint8Array {
    return MsgSetOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOperator): MsgSetOperatorProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator",
      value: MsgSetOperator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetOperator.typeUrl, MsgSetOperator);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetOperator.aminoType, MsgSetOperator.typeUrl);
function createBaseMsgSetOperatorResponse(): MsgSetOperatorResponse {
  return {};
}
export const MsgSetOperatorResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperatorResponse",
  is(o: any): o is MsgSetOperatorResponse {
    return o && o.$typeUrl === MsgSetOperatorResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetOperatorResponseSDKType {
    return o && o.$typeUrl === MsgSetOperatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetOperatorResponseAmino {
    return o && o.$typeUrl === MsgSetOperatorResponse.typeUrl;
  },
  encode(_: MsgSetOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorResponse();
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
  fromJSON(_: any): MsgSetOperatorResponse {
    return {};
  },
  toJSON(_: MsgSetOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetOperatorResponse>): MsgSetOperatorResponse {
    const message = createBaseMsgSetOperatorResponse();
    return message;
  },
  fromAmino(_: MsgSetOperatorResponseAmino): MsgSetOperatorResponse {
    const message = createBaseMsgSetOperatorResponse();
    return message;
  },
  toAmino(_: MsgSetOperatorResponse, useInterfaces: boolean = true): MsgSetOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOperatorResponseAminoMsg): MsgSetOperatorResponse {
    return MsgSetOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOperatorResponseProtoMsg, useInterfaces: boolean = true): MsgSetOperatorResponse {
    return MsgSetOperatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetOperatorResponse): Uint8Array {
    return MsgSetOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOperatorResponse): MsgSetOperatorResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperatorResponse",
      value: MsgSetOperatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetOperatorResponse.typeUrl, MsgSetOperatorResponse);
function createBaseMsgClaimTokenIn(): MsgClaimTokenIn {
  return {
    creator: "",
    flow: BigInt(0),
    treasuryAddress: ""
  };
}
export const MsgClaimTokenIn = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn",
  aminoType: "refracted/flowtrade/v1/ClaimTokenIn",
  is(o: any): o is MsgClaimTokenIn {
    return o && (o.$typeUrl === MsgClaimTokenIn.typeUrl || typeof o.creator === "string" && typeof o.flow === "bigint" && typeof o.treasuryAddress === "string");
  },
  isSDK(o: any): o is MsgClaimTokenInSDKType {
    return o && (o.$typeUrl === MsgClaimTokenIn.typeUrl || typeof o.creator === "string" && typeof o.flow === "bigint" && typeof o.treasury_address === "string");
  },
  isAmino(o: any): o is MsgClaimTokenInAmino {
    return o && (o.$typeUrl === MsgClaimTokenIn.typeUrl || typeof o.creator === "string" && typeof o.flow === "bigint" && typeof o.treasury_address === "string");
  },
  encode(message: MsgClaimTokenIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.flow !== BigInt(0)) {
      writer.uint32(16).uint64(message.flow);
    }
    if (message.treasuryAddress !== "") {
      writer.uint32(26).string(message.treasuryAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimTokenIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimTokenIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.flow = reader.uint64();
          break;
        case 3:
          message.treasuryAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimTokenIn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      treasuryAddress: isSet(object.treasuryAddress) ? String(object.treasuryAddress) : ""
    };
  },
  toJSON(message: MsgClaimTokenIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimTokenIn>): MsgClaimTokenIn {
    const message = createBaseMsgClaimTokenIn();
    message.creator = object.creator ?? "";
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.treasuryAddress = object.treasuryAddress ?? "";
    return message;
  },
  fromAmino(object: MsgClaimTokenInAmino): MsgClaimTokenIn {
    const message = createBaseMsgClaimTokenIn();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.treasury_address !== undefined && object.treasury_address !== null) {
      message.treasuryAddress = object.treasury_address;
    }
    return message;
  },
  toAmino(message: MsgClaimTokenIn, useInterfaces: boolean = true): MsgClaimTokenInAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.flow = message.flow ? message.flow.toString() : "0";
    obj.treasury_address = message.treasuryAddress === "" ? undefined : message.treasuryAddress;
    return obj;
  },
  fromAminoMsg(object: MsgClaimTokenInAminoMsg): MsgClaimTokenIn {
    return MsgClaimTokenIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimTokenIn, useInterfaces: boolean = true): MsgClaimTokenInAminoMsg {
    return {
      type: "refracted/flowtrade/v1/ClaimTokenIn",
      value: MsgClaimTokenIn.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgClaimTokenInProtoMsg, useInterfaces: boolean = true): MsgClaimTokenIn {
    return MsgClaimTokenIn.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimTokenIn): Uint8Array {
    return MsgClaimTokenIn.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimTokenIn): MsgClaimTokenInProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn",
      value: MsgClaimTokenIn.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimTokenIn.typeUrl, MsgClaimTokenIn);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimTokenIn.aminoType, MsgClaimTokenIn.typeUrl);
function createBaseMsgClaimTokenInResponse(): MsgClaimTokenInResponse {
  return {
    claimed: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgClaimTokenInResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenInResponse",
  is(o: any): o is MsgClaimTokenInResponse {
    return o && (o.$typeUrl === MsgClaimTokenInResponse.typeUrl || Coin.is(o.claimed) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgClaimTokenInResponseSDKType {
    return o && (o.$typeUrl === MsgClaimTokenInResponse.typeUrl || Coin.isSDK(o.claimed) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgClaimTokenInResponseAmino {
    return o && (o.$typeUrl === MsgClaimTokenInResponse.typeUrl || Coin.isAmino(o.claimed) && Coin.isAmino(o.fee));
  },
  encode(message: MsgClaimTokenInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimed !== undefined) {
      Coin.encode(message.claimed, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimTokenInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimTokenInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimed = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimTokenInResponse {
    return {
      claimed: isSet(object.claimed) ? Coin.fromJSON(object.claimed) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgClaimTokenInResponse): unknown {
    const obj: any = {};
    message.claimed !== undefined && (obj.claimed = message.claimed ? Coin.toJSON(message.claimed) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimTokenInResponse>): MsgClaimTokenInResponse {
    const message = createBaseMsgClaimTokenInResponse();
    message.claimed = object.claimed !== undefined && object.claimed !== null ? Coin.fromPartial(object.claimed) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimTokenInResponseAmino): MsgClaimTokenInResponse {
    const message = createBaseMsgClaimTokenInResponse();
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = Coin.fromAmino(object.claimed);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgClaimTokenInResponse, useInterfaces: boolean = true): MsgClaimTokenInResponseAmino {
    const obj: any = {};
    obj.claimed = message.claimed ? Coin.toAmino(message.claimed, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimTokenInResponseAminoMsg): MsgClaimTokenInResponse {
    return MsgClaimTokenInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimTokenInResponseProtoMsg, useInterfaces: boolean = true): MsgClaimTokenInResponse {
    return MsgClaimTokenInResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimTokenInResponse): Uint8Array {
    return MsgClaimTokenInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimTokenInResponse): MsgClaimTokenInResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenInResponse",
      value: MsgClaimTokenInResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimTokenInResponse.typeUrl, MsgClaimTokenInResponse);
function createBaseMsgClaimTokenOut(): MsgClaimTokenOut {
  return {
    flow: BigInt(0),
    address: "",
    signer: ""
  };
}
export const MsgClaimTokenOut = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut",
  aminoType: "refracted/flowtrade/v1/ClaimTokenOut",
  is(o: any): o is MsgClaimTokenOut {
    return o && (o.$typeUrl === MsgClaimTokenOut.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgClaimTokenOutSDKType {
    return o && (o.$typeUrl === MsgClaimTokenOut.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgClaimTokenOutAmino {
    return o && (o.$typeUrl === MsgClaimTokenOut.typeUrl || typeof o.flow === "bigint" && typeof o.address === "string" && typeof o.signer === "string");
  },
  encode(message: MsgClaimTokenOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== BigInt(0)) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimTokenOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimTokenOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimTokenOut {
    return {
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgClaimTokenOut): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimTokenOut>): MsgClaimTokenOut {
    const message = createBaseMsgClaimTokenOut();
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgClaimTokenOutAmino): MsgClaimTokenOut {
    const message = createBaseMsgClaimTokenOut();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgClaimTokenOut, useInterfaces: boolean = true): MsgClaimTokenOutAmino {
    const obj: any = {};
    obj.flow = message.flow ? message.flow.toString() : "0";
    obj.address = message.address === "" ? undefined : message.address;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgClaimTokenOutAminoMsg): MsgClaimTokenOut {
    return MsgClaimTokenOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimTokenOut, useInterfaces: boolean = true): MsgClaimTokenOutAminoMsg {
    return {
      type: "refracted/flowtrade/v1/ClaimTokenOut",
      value: MsgClaimTokenOut.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgClaimTokenOutProtoMsg, useInterfaces: boolean = true): MsgClaimTokenOut {
    return MsgClaimTokenOut.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimTokenOut): Uint8Array {
    return MsgClaimTokenOut.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimTokenOut): MsgClaimTokenOutProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut",
      value: MsgClaimTokenOut.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimTokenOut.typeUrl, MsgClaimTokenOut);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimTokenOut.aminoType, MsgClaimTokenOut.typeUrl);
function createBaseMsgClaimTokenOutResponse(): MsgClaimTokenOutResponse {
  return {
    claimed: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgClaimTokenOutResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOutResponse",
  is(o: any): o is MsgClaimTokenOutResponse {
    return o && (o.$typeUrl === MsgClaimTokenOutResponse.typeUrl || Coin.is(o.claimed) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgClaimTokenOutResponseSDKType {
    return o && (o.$typeUrl === MsgClaimTokenOutResponse.typeUrl || Coin.isSDK(o.claimed) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgClaimTokenOutResponseAmino {
    return o && (o.$typeUrl === MsgClaimTokenOutResponse.typeUrl || Coin.isAmino(o.claimed) && Coin.isAmino(o.fee));
  },
  encode(message: MsgClaimTokenOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimed !== undefined) {
      Coin.encode(message.claimed, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimTokenOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimTokenOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimed = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimTokenOutResponse {
    return {
      claimed: isSet(object.claimed) ? Coin.fromJSON(object.claimed) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgClaimTokenOutResponse): unknown {
    const obj: any = {};
    message.claimed !== undefined && (obj.claimed = message.claimed ? Coin.toJSON(message.claimed) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimTokenOutResponse>): MsgClaimTokenOutResponse {
    const message = createBaseMsgClaimTokenOutResponse();
    message.claimed = object.claimed !== undefined && object.claimed !== null ? Coin.fromPartial(object.claimed) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimTokenOutResponseAmino): MsgClaimTokenOutResponse {
    const message = createBaseMsgClaimTokenOutResponse();
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = Coin.fromAmino(object.claimed);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgClaimTokenOutResponse, useInterfaces: boolean = true): MsgClaimTokenOutResponseAmino {
    const obj: any = {};
    obj.claimed = message.claimed ? Coin.toAmino(message.claimed, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimTokenOutResponseAminoMsg): MsgClaimTokenOutResponse {
    return MsgClaimTokenOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimTokenOutResponseProtoMsg, useInterfaces: boolean = true): MsgClaimTokenOutResponse {
    return MsgClaimTokenOutResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimTokenOutResponse): Uint8Array {
    return MsgClaimTokenOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimTokenOutResponse): MsgClaimTokenOutResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOutResponse",
      value: MsgClaimTokenOutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimTokenOutResponse.typeUrl, MsgClaimTokenOutResponse);
function createBaseMsgStopFlow(): MsgStopFlow {
  return {
    flowId: BigInt(0),
    creator: ""
  };
}
export const MsgStopFlow = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow",
  aminoType: "refracted/flowtrade/v1/StopFlow",
  is(o: any): o is MsgStopFlow {
    return o && (o.$typeUrl === MsgStopFlow.typeUrl || typeof o.flowId === "bigint" && typeof o.creator === "string");
  },
  isSDK(o: any): o is MsgStopFlowSDKType {
    return o && (o.$typeUrl === MsgStopFlow.typeUrl || typeof o.flow_id === "bigint" && typeof o.creator === "string");
  },
  isAmino(o: any): o is MsgStopFlowAmino {
    return o && (o.$typeUrl === MsgStopFlow.typeUrl || typeof o.flow_id === "bigint" && typeof o.creator === "string");
  },
  encode(message: MsgStopFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStopFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStopFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStopFlow {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message: MsgStopFlow): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object: Partial<MsgStopFlow>): MsgStopFlow {
    const message = createBaseMsgStopFlow();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgStopFlowAmino): MsgStopFlow {
    const message = createBaseMsgStopFlow();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgStopFlow, useInterfaces: boolean = true): MsgStopFlowAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : "0";
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgStopFlowAminoMsg): MsgStopFlow {
    return MsgStopFlow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStopFlow, useInterfaces: boolean = true): MsgStopFlowAminoMsg {
    return {
      type: "refracted/flowtrade/v1/StopFlow",
      value: MsgStopFlow.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgStopFlowProtoMsg, useInterfaces: boolean = true): MsgStopFlow {
    return MsgStopFlow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStopFlow): Uint8Array {
    return MsgStopFlow.encode(message).finish();
  },
  toProtoMsg(message: MsgStopFlow): MsgStopFlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow",
      value: MsgStopFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStopFlow.typeUrl, MsgStopFlow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStopFlow.aminoType, MsgStopFlow.typeUrl);
function createBaseMsgStopFlowResponse(): MsgStopFlowResponse {
  return {};
}
export const MsgStopFlowResponse = {
  typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlowResponse",
  is(o: any): o is MsgStopFlowResponse {
    return o && o.$typeUrl === MsgStopFlowResponse.typeUrl;
  },
  isSDK(o: any): o is MsgStopFlowResponseSDKType {
    return o && o.$typeUrl === MsgStopFlowResponse.typeUrl;
  },
  isAmino(o: any): o is MsgStopFlowResponseAmino {
    return o && o.$typeUrl === MsgStopFlowResponse.typeUrl;
  },
  encode(_: MsgStopFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStopFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStopFlowResponse();
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
  fromJSON(_: any): MsgStopFlowResponse {
    return {};
  },
  toJSON(_: MsgStopFlowResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgStopFlowResponse>): MsgStopFlowResponse {
    const message = createBaseMsgStopFlowResponse();
    return message;
  },
  fromAmino(_: MsgStopFlowResponseAmino): MsgStopFlowResponse {
    const message = createBaseMsgStopFlowResponse();
    return message;
  },
  toAmino(_: MsgStopFlowResponse, useInterfaces: boolean = true): MsgStopFlowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStopFlowResponseAminoMsg): MsgStopFlowResponse {
    return MsgStopFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStopFlowResponseProtoMsg, useInterfaces: boolean = true): MsgStopFlowResponse {
    return MsgStopFlowResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStopFlowResponse): Uint8Array {
    return MsgStopFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStopFlowResponse): MsgStopFlowResponseProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlowResponse",
      value: MsgStopFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStopFlowResponse.typeUrl, MsgStopFlowResponse);