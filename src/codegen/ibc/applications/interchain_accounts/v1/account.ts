import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
  $typeUrl?: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  baseAccount?: BaseAccount;
  accountOwner: string;
}
export interface InterchainAccountProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  value: Uint8Array;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountAmino {
  base_account?: BaseAccountAmino;
  account_owner?: string;
}
export interface InterchainAccountAminoMsg {
  type: "cosmos-sdk/InterchainAccount";
  value: InterchainAccountAmino;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountSDKType {
  $typeUrl?: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  base_account?: BaseAccountSDKType;
  account_owner: string;
}
function createBaseInterchainAccount(): InterchainAccount {
  return {
    $typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
    baseAccount: undefined,
    accountOwner: ""
  };
}
export const InterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
  aminoType: "cosmos-sdk/InterchainAccount",
  is(o: any): o is InterchainAccount {
    return o && (o.$typeUrl === InterchainAccount.typeUrl || typeof o.accountOwner === "string");
  },
  isSDK(o: any): o is InterchainAccountSDKType {
    return o && (o.$typeUrl === InterchainAccount.typeUrl || typeof o.account_owner === "string");
  },
  isAmino(o: any): o is InterchainAccountAmino {
    return o && (o.$typeUrl === InterchainAccount.typeUrl || typeof o.account_owner === "string");
  },
  encode(message: InterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountOwner !== "") {
      writer.uint32(18).string(message.accountOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): InterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.accountOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterchainAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : ""
    };
  },
  toJSON(message: InterchainAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
    return obj;
  },
  fromPartial(object: Partial<InterchainAccount>): InterchainAccount {
    const message = createBaseInterchainAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.accountOwner = object.accountOwner ?? "";
    return message;
  },
  fromAmino(object: InterchainAccountAmino): InterchainAccount {
    const message = createBaseInterchainAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    if (object.account_owner !== undefined && object.account_owner !== null) {
      message.accountOwner = object.account_owner;
    }
    return message;
  },
  toAmino(message: InterchainAccount, useInterfaces: boolean = true): InterchainAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount, useInterfaces) : undefined;
    obj.account_owner = message.accountOwner === "" ? undefined : message.accountOwner;
    return obj;
  },
  fromAminoMsg(object: InterchainAccountAminoMsg): InterchainAccount {
    return InterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: InterchainAccount, useInterfaces: boolean = true): InterchainAccountAminoMsg {
    return {
      type: "cosmos-sdk/InterchainAccount",
      value: InterchainAccount.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: InterchainAccountProtoMsg, useInterfaces: boolean = true): InterchainAccount {
    return InterchainAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: InterchainAccount): Uint8Array {
    return InterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: InterchainAccount): InterchainAccountProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
      value: InterchainAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InterchainAccount.typeUrl, InterchainAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(InterchainAccount.aminoType, InterchainAccount.typeUrl);