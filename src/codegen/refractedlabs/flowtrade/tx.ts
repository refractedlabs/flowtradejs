import { Params, ParamsSDKType } from "./params";
import { FlowCreationRequest, FlowCreationRequestSDKType, Flow, FlowSDKType } from "./flow";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Position, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateFlow {
  creator: string;
  request: FlowCreationRequest;
}
export interface MsgCreateFlowSDKType {
  creator: string;
  request: FlowCreationRequestSDKType;
}
export interface MsgCreateFlowResponse {
  flow: Flow;
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
export interface MsgJoinFlowSDKType {
  flow: bigint;
  address: string;
  amount: CoinSDKType;
  signer: string;
}
export interface MsgJoinFlowResponse {
  position: Position;
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
export interface MsgExitFlowSDKType {
  flow: bigint;
  address: string;
  amount: CoinSDKType;
  signer: string;
}
export interface MsgExitFlowResponse {
  position: Position;
}
export interface MsgExitFlowResponseSDKType {
  position: PositionSDKType;
}
export interface MsgSetOperator {
  flow: bigint;
  owner: string;
  operator: string;
}
export interface MsgSetOperatorSDKType {
  flow: bigint;
  owner: string;
  operator: string;
}
export interface MsgSetOperatorResponse {}
export interface MsgSetOperatorResponseSDKType {}
export interface MsgClaimTokenIn {
  creator: string;
  flow: bigint;
  treasuryAddress: string;
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
export interface MsgClaimTokenInResponseSDKType {
  claimed: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgClaimTokenOut {
  flow: bigint;
  address: string;
  signer: string;
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
export interface MsgClaimTokenOutResponseSDKType {
  claimed: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgStopFlow {
  flowId: bigint;
  creator: string;
}
export interface MsgStopFlowSDKType {
  flow_id: bigint;
  creator: string;
}
export interface MsgStopFlowResponse {}
export interface MsgStopFlowResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
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
          message.params = Params.decode(reader, reader.uint32());
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
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
  }
};
function createBaseMsgCreateFlow(): MsgCreateFlow {
  return {
    creator: "",
    request: FlowCreationRequest.fromPartial({})
  };
}
export const MsgCreateFlow = {
  encode(message: MsgCreateFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.request !== undefined) {
      FlowCreationRequest.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFlow {
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
          message.request = FlowCreationRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseMsgCreateFlowResponse(): MsgCreateFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const MsgCreateFlowResponse = {
  encode(message: MsgCreateFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFlowResponse();
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
  }
};
function createBaseMsgJoinFlow(): MsgJoinFlow {
  return {
    flow: BigInt(0),
    address: "",
    amount: Coin.fromPartial({}),
    signer: ""
  };
}
export const MsgJoinFlow = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinFlow {
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
          message.amount = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseMsgJoinFlowResponse(): MsgJoinFlowResponse {
  return {
    position: Position.fromPartial({})
  };
}
export const MsgJoinFlowResponse = {
  encode(message: MsgJoinFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinFlowResponse();
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
  }
};
function createBaseMsgExitFlow(): MsgExitFlow {
  return {
    flow: BigInt(0),
    address: "",
    amount: Coin.fromPartial({}),
    signer: ""
  };
}
export const MsgExitFlow = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitFlow {
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
          message.amount = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseMsgExitFlowResponse(): MsgExitFlowResponse {
  return {
    position: Position.fromPartial({})
  };
}
export const MsgExitFlowResponse = {
  encode(message: MsgExitFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitFlowResponse();
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
  }
};
function createBaseMsgSetOperator(): MsgSetOperator {
  return {
    flow: BigInt(0),
    owner: "",
    operator: ""
  };
}
export const MsgSetOperator = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperator {
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
  }
};
function createBaseMsgSetOperatorResponse(): MsgSetOperatorResponse {
  return {};
}
export const MsgSetOperatorResponse = {
  encode(_: MsgSetOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorResponse {
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
  }
};
function createBaseMsgClaimTokenIn(): MsgClaimTokenIn {
  return {
    creator: "",
    flow: BigInt(0),
    treasuryAddress: ""
  };
}
export const MsgClaimTokenIn = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimTokenIn {
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
  }
};
function createBaseMsgClaimTokenInResponse(): MsgClaimTokenInResponse {
  return {
    claimed: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgClaimTokenInResponse = {
  encode(message: MsgClaimTokenInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimed !== undefined) {
      Coin.encode(message.claimed, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimTokenInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimTokenInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimed = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseMsgClaimTokenOut(): MsgClaimTokenOut {
  return {
    flow: BigInt(0),
    address: "",
    signer: ""
  };
}
export const MsgClaimTokenOut = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimTokenOut {
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
  }
};
function createBaseMsgClaimTokenOutResponse(): MsgClaimTokenOutResponse {
  return {
    claimed: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgClaimTokenOutResponse = {
  encode(message: MsgClaimTokenOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimed !== undefined) {
      Coin.encode(message.claimed, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimTokenOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimTokenOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimed = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseMsgStopFlow(): MsgStopFlow {
  return {
    flowId: BigInt(0),
    creator: ""
  };
}
export const MsgStopFlow = {
  encode(message: MsgStopFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStopFlow {
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
  }
};
function createBaseMsgStopFlowResponse(): MsgStopFlowResponse {
  return {};
}
export const MsgStopFlowResponse = {
  encode(_: MsgStopFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStopFlowResponse {
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
  }
};