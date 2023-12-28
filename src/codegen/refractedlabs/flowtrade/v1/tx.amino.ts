//@ts-nocheck
import { MsgUpdateParams, MsgCreateFlow, MsgJoinFlow, MsgExitFlow, MsgSetOperator, MsgClaimTokenIn, MsgClaimTokenOut, MsgStopFlow } from "./tx";
export const AminoConverter = {
  "/refractedlabs.flowtrade.v1.MsgUpdateParams": {
    aminoType: "refracted/flowtrade/v1/UpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgCreateFlow": {
    aminoType: "refracted/flowtrade/v1/CreateFlow",
    toAmino: MsgCreateFlow.toAmino,
    fromAmino: MsgCreateFlow.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgJoinFlow": {
    aminoType: "refracted/flowtrade/v1/JoinFlow",
    toAmino: MsgJoinFlow.toAmino,
    fromAmino: MsgJoinFlow.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgExitFlow": {
    aminoType: "refracted/flowtrade/v1/ExitFlow",
    toAmino: MsgExitFlow.toAmino,
    fromAmino: MsgExitFlow.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgSetOperator": {
    aminoType: "refracted/flowtrade/v1/SetOperator",
    toAmino: MsgSetOperator.toAmino,
    fromAmino: MsgSetOperator.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgClaimTokenIn": {
    aminoType: "refracted/flowtrade/v1/ClaimTokenIn",
    toAmino: MsgClaimTokenIn.toAmino,
    fromAmino: MsgClaimTokenIn.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgClaimTokenOut": {
    aminoType: "refracted/flowtrade/v1/ClaimTokenOut",
    toAmino: MsgClaimTokenOut.toAmino,
    fromAmino: MsgClaimTokenOut.fromAmino
  },
  "/refractedlabs.flowtrade.v1.MsgStopFlow": {
    aminoType: "refracted/flowtrade/v1/StopFlow",
    toAmino: MsgStopFlow.toAmino,
    fromAmino: MsgStopFlow.fromAmino
  }
};