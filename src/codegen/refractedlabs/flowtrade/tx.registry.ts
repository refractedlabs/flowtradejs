import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateFlow, MsgJoinFlow, MsgExitFlow, MsgSetOperator, MsgClaimTokenIn, MsgClaimTokenOut, MsgStopFlow } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/refractedlabs.flowtrade.MsgUpdateParams", MsgUpdateParams], ["/refractedlabs.flowtrade.MsgCreateFlow", MsgCreateFlow], ["/refractedlabs.flowtrade.MsgJoinFlow", MsgJoinFlow], ["/refractedlabs.flowtrade.MsgExitFlow", MsgExitFlow], ["/refractedlabs.flowtrade.MsgSetOperator", MsgSetOperator], ["/refractedlabs.flowtrade.MsgClaimTokenIn", MsgClaimTokenIn], ["/refractedlabs.flowtrade.MsgClaimTokenOut", MsgClaimTokenOut], ["/refractedlabs.flowtrade.MsgStopFlow", MsgStopFlow]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgCreateFlow",
        value: MsgCreateFlow.encode(value).finish()
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgJoinFlow",
        value: MsgJoinFlow.encode(value).finish()
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgExitFlow",
        value: MsgExitFlow.encode(value).finish()
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgSetOperator",
        value: MsgSetOperator.encode(value).finish()
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenIn",
        value: MsgClaimTokenIn.encode(value).finish()
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenOut",
        value: MsgClaimTokenOut.encode(value).finish()
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgStopFlow",
        value: MsgStopFlow.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgUpdateParams",
        value
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgCreateFlow",
        value
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgJoinFlow",
        value
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgExitFlow",
        value
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgSetOperator",
        value
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenIn",
        value
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenOut",
        value
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgStopFlow",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgCreateFlow",
        value: MsgCreateFlow.toJSON(value)
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgJoinFlow",
        value: MsgJoinFlow.toJSON(value)
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgExitFlow",
        value: MsgExitFlow.toJSON(value)
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgSetOperator",
        value: MsgSetOperator.toJSON(value)
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenIn",
        value: MsgClaimTokenIn.toJSON(value)
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenOut",
        value: MsgClaimTokenOut.toJSON(value)
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgStopFlow",
        value: MsgStopFlow.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgCreateFlow",
        value: MsgCreateFlow.fromJSON(value)
      };
    },
    joinFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgJoinFlow",
        value: MsgJoinFlow.fromJSON(value)
      };
    },
    exitFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgExitFlow",
        value: MsgExitFlow.fromJSON(value)
      };
    },
    setOperator(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgSetOperator",
        value: MsgSetOperator.fromJSON(value)
      };
    },
    claimTokenIn(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenIn",
        value: MsgClaimTokenIn.fromJSON(value)
      };
    },
    claimTokenOut(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenOut",
        value: MsgClaimTokenOut.fromJSON(value)
      };
    },
    stopFlow(value: any) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgStopFlow",
        value: MsgStopFlow.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createFlow(value: MsgCreateFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgCreateFlow",
        value: MsgCreateFlow.fromPartial(value)
      };
    },
    joinFlow(value: MsgJoinFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgJoinFlow",
        value: MsgJoinFlow.fromPartial(value)
      };
    },
    exitFlow(value: MsgExitFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgExitFlow",
        value: MsgExitFlow.fromPartial(value)
      };
    },
    setOperator(value: MsgSetOperator) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgSetOperator",
        value: MsgSetOperator.fromPartial(value)
      };
    },
    claimTokenIn(value: MsgClaimTokenIn) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenIn",
        value: MsgClaimTokenIn.fromPartial(value)
      };
    },
    claimTokenOut(value: MsgClaimTokenOut) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgClaimTokenOut",
        value: MsgClaimTokenOut.fromPartial(value)
      };
    },
    stopFlow(value: MsgStopFlow) {
      return {
        typeUrl: "/refractedlabs.flowtrade.MsgStopFlow",
        value: MsgStopFlow.fromPartial(value)
      };
    }
  }
};