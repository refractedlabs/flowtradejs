import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Position {
  /** the flow for which this position is created */
  flow: Long;
  /** the address of the position's owner */
  owner: string;
  /**
   * the address that the owner has delegated position management to.
   * the operator is allowed to manage the position
   */
  operator: string;
  /** an index for the amount of purchase that has already been applied */
  distIndex: string;
  /** the current amount of token-in provided to buy token-out */
  tokenInBalance: string;
  /** the amount of already spent in tokens */
  spentTokenIn: string;
  /** the shares of this position from the flow */
  shares: string;
  /** the amount of out tokens that has purchased by user */
  purchasedTokenOut: string;
  /** the amount of purchased token that are paid for, but not calculated in purchased_token_out because of rounding errors */
  pendingPurchase: string;
  /** the amount of purchase that has been claimed by user and already transferred to their account */
  claimedAmount: string;
}
export interface PositionSDKType {
  flow: Long;
  owner: string;
  operator: string;
  dist_index: string;
  token_in_balance: string;
  spent_token_in: string;
  shares: string;
  purchased_token_out: string;
  pending_purchase: string;
  claimed_amount: string;
}
function createBasePosition(): Position {
  return {
    flow: Long.UZERO,
    owner: "",
    operator: "",
    distIndex: "",
    tokenInBalance: "",
    spentTokenIn: "",
    shares: "",
    purchasedTokenOut: "",
    pendingPurchase: "",
    claimedAmount: ""
  };
}
export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.flow.isZero()) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    if (message.distIndex !== "") {
      writer.uint32(34).string(message.distIndex);
    }
    if (message.tokenInBalance !== "") {
      writer.uint32(42).string(message.tokenInBalance);
    }
    if (message.spentTokenIn !== "") {
      writer.uint32(50).string(message.spentTokenIn);
    }
    if (message.shares !== "") {
      writer.uint32(58).string(message.shares);
    }
    if (message.purchasedTokenOut !== "") {
      writer.uint32(66).string(message.purchasedTokenOut);
    }
    if (message.pendingPurchase !== "") {
      writer.uint32(74).string(message.pendingPurchase);
    }
    if (message.claimedAmount !== "") {
      writer.uint32(82).string(message.claimedAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = (reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        case 4:
          message.distIndex = reader.string();
          break;
        case 5:
          message.tokenInBalance = reader.string();
          break;
        case 6:
          message.spentTokenIn = reader.string();
          break;
        case 7:
          message.shares = reader.string();
          break;
        case 8:
          message.purchasedTokenOut = reader.string();
          break;
        case 9:
          message.pendingPurchase = reader.string();
          break;
        case 10:
          message.claimedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Position {
    return {
      flow: isSet(object.flow) ? Long.fromValue(object.flow) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      distIndex: isSet(object.distIndex) ? String(object.distIndex) : "",
      tokenInBalance: isSet(object.tokenInBalance) ? String(object.tokenInBalance) : "",
      spentTokenIn: isSet(object.spentTokenIn) ? String(object.spentTokenIn) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
      purchasedTokenOut: isSet(object.purchasedTokenOut) ? String(object.purchasedTokenOut) : "",
      pendingPurchase: isSet(object.pendingPurchase) ? String(object.pendingPurchase) : "",
      claimedAmount: isSet(object.claimedAmount) ? String(object.claimedAmount) : ""
    };
  },
  toJSON(message: Position): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.operator !== undefined && (obj.operator = message.operator);
    message.distIndex !== undefined && (obj.distIndex = message.distIndex);
    message.tokenInBalance !== undefined && (obj.tokenInBalance = message.tokenInBalance);
    message.spentTokenIn !== undefined && (obj.spentTokenIn = message.spentTokenIn);
    message.shares !== undefined && (obj.shares = message.shares);
    message.purchasedTokenOut !== undefined && (obj.purchasedTokenOut = message.purchasedTokenOut);
    message.pendingPurchase !== undefined && (obj.pendingPurchase = message.pendingPurchase);
    message.claimedAmount !== undefined && (obj.claimedAmount = message.claimedAmount);
    return obj;
  },
  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.flow = object.flow !== undefined && object.flow !== null ? Long.fromValue(object.flow) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.operator = object.operator ?? "";
    message.distIndex = object.distIndex ?? "";
    message.tokenInBalance = object.tokenInBalance ?? "";
    message.spentTokenIn = object.spentTokenIn ?? "";
    message.shares = object.shares ?? "";
    message.purchasedTokenOut = object.purchasedTokenOut ?? "";
    message.pendingPurchase = object.pendingPurchase ?? "";
    message.claimedAmount = object.claimedAmount ?? "";
    return message;
  }
};