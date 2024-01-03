import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
  /** Msg type URL for which an autorization is granted */
  msgTypeUrl: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventGrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.EventGrant";
  value: Uint8Array;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantAmino {
  /** Msg type URL for which an autorization is granted */
  msg_type_url?: string;
  /** Granter account address */
  granter?: string;
  /** Grantee account address */
  grantee?: string;
}
export interface EventGrantAminoMsg {
  type: "cosmos-sdk/EventGrant";
  value: EventGrantAmino;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
  msg_type_url: string;
  granter: string;
  grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
  /** Msg type URL for which an autorization is revoked */
  msgTypeUrl: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventRevokeProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.EventRevoke";
  value: Uint8Array;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeAmino {
  /** Msg type URL for which an autorization is revoked */
  msg_type_url?: string;
  /** Granter account address */
  granter?: string;
  /** Grantee account address */
  grantee?: string;
}
export interface EventRevokeAminoMsg {
  type: "cosmos-sdk/EventRevoke";
  value: EventRevokeAmino;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
  msg_type_url: string;
  granter: string;
  grantee: string;
}
function createBaseEventGrant(): EventGrant {
  return {
    msgTypeUrl: "",
    granter: "",
    grantee: ""
  };
}
export const EventGrant = {
  typeUrl: "/cosmos.authz.v1beta1.EventGrant",
  aminoType: "cosmos-sdk/EventGrant",
  is(o: any): o is EventGrant {
    return o && (o.$typeUrl === EventGrant.typeUrl || typeof o.msgTypeUrl === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is EventGrantSDKType {
    return o && (o.$typeUrl === EventGrant.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is EventGrantAmino {
    return o && (o.$typeUrl === EventGrant.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: EventGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventGrant {
    return {
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: EventGrant): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<EventGrant>): EventGrant {
    const message = createBaseEventGrant();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: EventGrantAmino): EventGrant {
    const message = createBaseEventGrant();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: EventGrant, useInterfaces: boolean = true): EventGrantAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: EventGrantAminoMsg): EventGrant {
    return EventGrant.fromAmino(object.value);
  },
  toAminoMsg(message: EventGrant, useInterfaces: boolean = true): EventGrantAminoMsg {
    return {
      type: "cosmos-sdk/EventGrant",
      value: EventGrant.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: EventGrantProtoMsg, useInterfaces: boolean = true): EventGrant {
    return EventGrant.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventGrant): Uint8Array {
    return EventGrant.encode(message).finish();
  },
  toProtoMsg(message: EventGrant): EventGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventGrant",
      value: EventGrant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventGrant.typeUrl, EventGrant);
GlobalDecoderRegistry.registerAminoProtoMapping(EventGrant.aminoType, EventGrant.typeUrl);
function createBaseEventRevoke(): EventRevoke {
  return {
    msgTypeUrl: "",
    granter: "",
    grantee: ""
  };
}
export const EventRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
  aminoType: "cosmos-sdk/EventRevoke",
  is(o: any): o is EventRevoke {
    return o && (o.$typeUrl === EventRevoke.typeUrl || typeof o.msgTypeUrl === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is EventRevokeSDKType {
    return o && (o.$typeUrl === EventRevoke.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is EventRevokeAmino {
    return o && (o.$typeUrl === EventRevoke.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: EventRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRevoke {
    return {
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: EventRevoke): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<EventRevoke>): EventRevoke {
    const message = createBaseEventRevoke();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: EventRevokeAmino): EventRevoke {
    const message = createBaseEventRevoke();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: EventRevoke, useInterfaces: boolean = true): EventRevokeAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: EventRevokeAminoMsg): EventRevoke {
    return EventRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: EventRevoke, useInterfaces: boolean = true): EventRevokeAminoMsg {
    return {
      type: "cosmos-sdk/EventRevoke",
      value: EventRevoke.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: EventRevokeProtoMsg, useInterfaces: boolean = true): EventRevoke {
    return EventRevoke.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRevoke): Uint8Array {
    return EventRevoke.encode(message).finish();
  },
  toProtoMsg(message: EventRevoke): EventRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
      value: EventRevoke.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRevoke.typeUrl, EventRevoke);
GlobalDecoderRegistry.registerAminoProtoMapping(EventRevoke.aminoType, EventRevoke.typeUrl);