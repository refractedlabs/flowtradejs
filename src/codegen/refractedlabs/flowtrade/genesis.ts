import { Params, ParamsSDKType } from "./params";
import { Flow, FlowSDKType } from "./flow";
import { Position, PositionSDKType } from "./position";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the flowtrade module's genesis state. */
export interface GenesisState {
  params?: Params;
  flowList: Flow[];
  flowCount: Long;
  positionList: Position[];
}
/** GenesisState defines the flowtrade module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  flow_list: FlowSDKType[];
  flow_count: Long;
  position_list: PositionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    flowList: [],
    flowCount: Long.UZERO,
    positionList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flowList) {
      Flow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.flowCount.isZero()) {
      writer.uint32(24).uint64(message.flowCount);
    }
    for (const v of message.positionList) {
      Position.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowList.push(Flow.decode(reader, reader.uint32()));
          break;
        case 3:
          message.flowCount = (reader.uint64() as Long);
          break;
        case 4:
          message.positionList.push(Position.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      flowList: Array.isArray(object?.flowList) ? object.flowList.map((e: any) => Flow.fromJSON(e)) : [],
      flowCount: isSet(object.flowCount) ? Long.fromValue(object.flowCount) : Long.UZERO,
      positionList: Array.isArray(object?.positionList) ? object.positionList.map((e: any) => Position.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.flowList) {
      obj.flowList = message.flowList.map(e => e ? Flow.toJSON(e) : undefined);
    } else {
      obj.flowList = [];
    }
    message.flowCount !== undefined && (obj.flowCount = (message.flowCount || Long.UZERO).toString());
    if (message.positionList) {
      obj.positionList = message.positionList.map(e => e ? Position.toJSON(e) : undefined);
    } else {
      obj.positionList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.flowList = object.flowList?.map(e => Flow.fromPartial(e)) || [];
    message.flowCount = object.flowCount !== undefined && object.flowCount !== null ? Long.fromValue(object.flowCount) : Long.UZERO;
    message.positionList = object.positionList?.map(e => Position.fromPartial(e)) || [];
    return message;
  }
};