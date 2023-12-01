//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateFlow, MsgJoinFlow, MsgExitFlow, MsgSetOperator, MsgClaimTokenIn, MsgClaimTokenOut, MsgStopFlow } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/refractedlabs.flowtrade.v1.MsgUpdateParams", MsgUpdateParams], ["/refractedlabs.flowtrade.v1.MsgCreateFlow", MsgCreateFlow], ["/refractedlabs.flowtrade.v1.MsgJoinFlow", MsgJoinFlow], ["/refractedlabs.flowtrade.v1.MsgExitFlow", MsgExitFlow], ["/refractedlabs.flowtrade.v1.MsgSetOperator", MsgSetOperator], ["/refractedlabs.flowtrade.v1.MsgClaimTokenIn", MsgClaimTokenIn], ["/refractedlabs.flowtrade.v1.MsgClaimTokenOut", MsgClaimTokenOut], ["/refractedlabs.flowtrade.v1.MsgStopFlow", MsgStopFlow]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow",
        value: MsgCreateFlow.encode(value).finish()
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow",
        value: MsgJoinFlow.encode(value).finish()
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow",
        value: MsgExitFlow.encode(value).finish()
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator",
        value: MsgSetOperator.encode(value).finish()
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn",
        value: MsgClaimTokenIn.encode(value).finish()
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut",
        value: MsgClaimTokenOut.encode(value).finish()
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow",
        value: MsgStopFlow.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams",
        value
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow",
        value
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow",
        value
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow",
        value
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator",
        value
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn",
        value
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut",
        value
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow",
        value: MsgCreateFlow.toJSON(value)
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow",
        value: MsgJoinFlow.toJSON(value)
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow",
        value: MsgExitFlow.toJSON(value)
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator",
        value: MsgSetOperator.toJSON(value)
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn",
        value: MsgClaimTokenIn.toJSON(value)
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut",
        value: MsgClaimTokenOut.toJSON(value)
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow",
        value: MsgStopFlow.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow",
        value: MsgCreateFlow.fromJSON(value)
      };
    },
    joinFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow",
        value: MsgJoinFlow.fromJSON(value)
      };
    },
    exitFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow",
        value: MsgExitFlow.fromJSON(value)
      };
    },
    setOperator(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator",
        value: MsgSetOperator.fromJSON(value)
      };
    },
    claimTokenIn(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn",
        value: MsgClaimTokenIn.fromJSON(value)
      };
    },
    claimTokenOut(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut",
        value: MsgClaimTokenOut.fromJSON(value)
      };
    },
    stopFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow",
        value: MsgStopFlow.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgCreateFlow",
        value: MsgCreateFlow.fromPartial(value)
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgJoinFlow",
        value: MsgJoinFlow.fromPartial(value)
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgExitFlow",
        value: MsgExitFlow.fromPartial(value)
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgSetOperator",
        value: MsgSetOperator.fromPartial(value)
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenIn",
        value: MsgClaimTokenIn.fromPartial(value)
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgClaimTokenOut",
        value: MsgClaimTokenOut.fromPartial(value)
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.v1.MsgStopFlow",
        value: MsgStopFlow.fromPartial(value)
      };
    }
  }
};