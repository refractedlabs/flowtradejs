//@ts-nocheck
import { MsgUpdateParams, MsgCreateFlow, MsgJoinFlow, MsgExitFlow, MsgSetOperator, MsgClaimTokenIn, MsgClaimTokenOut, MsgStopFlow } from "./tx";
export const AminoConverter = {
  "/refractedlabs.flowtrade.v1.MsgUpdateParams": {
    aminoType: "refractedlabs/flowtrade/v1/UpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgCreateFlow": {
    aminoType: "refractedlabs/flowtrade/v1/CreateFlow",
    toAmino: MsgCreateFlow.toAmino,
    fromAmino: MsgCreateFlow.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgJoinFlow": {
    aminoType: "refractedlabs/flowtrade/v1/JoinFlow",
    toAmino: MsgJoinFlow.toAmino,
    fromAmino: MsgJoinFlow.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgExitFlow": {
    aminoType: "refractedlabs/flowtrade/v1/ExitFlow",
    toAmino: MsgExitFlow.toAmino,
    fromAmino: MsgExitFlow.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgSetOperator": {
    aminoType: "refractedlabs/flowtrade/v1/SetOperator",
    toAmino: MsgSetOperator.toAmino,
    fromAmino: MsgSetOperator.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgClaimTokenIn": {
    aminoType: "refractedlabs/flowtrade/v1/ClaimTokenIn",
    toAmino: MsgClaimTokenIn.toAmino,
    fromAmino: MsgClaimTokenIn.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgClaimTokenOut": {
    aminoType: "refractedlabs/flowtrade/v1/ClaimTokenOut",
    toAmino: MsgClaimTokenOut.toAmino,
    fromAmino: MsgClaimTokenOut.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgStopFlow": {
    aminoType: "refractedlabs/flowtrade/v1/StopFlow",
    toAmino: MsgStopFlow.toAmino,
    fromAmino: MsgStopFlow.fromAmino
  }
};