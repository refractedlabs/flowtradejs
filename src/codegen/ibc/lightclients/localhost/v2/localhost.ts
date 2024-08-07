import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** ClientState defines the 09-localhost client state */
export interface ClientState {
  /** the latest block height */
  latestHeight: Height;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.localhost.v2.ClientState";
  value: Uint8Array;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateAmino {
  /** the latest block height */
  latest_height?: HeightAmino;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateSDKType {
  latest_height: HeightSDKType;
}
function createBaseClientState(): ClientState {
  return {
    latestHeight: Height.fromPartial({})
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  is(o: any): o is ClientState {
    return o && (o.$typeUrl === ClientState.typeUrl || Height.is(o.latestHeight));
  },
  isSDK(o: any): o is ClientStateSDKType {
    return o && (o.$typeUrl === ClientState.typeUrl || Height.isSDK(o.latest_height));
  },
  isAmino(o: any): o is ClientStateAmino {
    return o && (o.$typeUrl === ClientState.typeUrl || Height.isAmino(o.latest_height));
  },
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestHeight = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    return {
      latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined
    };
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latestHeight = Height.fromAmino(object.latest_height);
    }
    return message;
  },
  toAmino(message: ClientState, useInterfaces: boolean = true): ClientStateAmino {
    const obj: any = {};
    obj.latest_height = message.latestHeight ? Height.toAmino(message.latestHeight, useInterfaces) : {};
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState, useInterfaces: boolean = true): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg, useInterfaces: boolean = true): ClientState {
    return ClientState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClientState.typeUrl, ClientState);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientState.aminoType, ClientState.typeUrl);