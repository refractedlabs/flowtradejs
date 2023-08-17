//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgCreateFlow, MsgJoinFlow, MsgExitFlow, MsgSetOperator, MsgClaimTokenIn, MsgClaimTokenOut, MsgStopFlow } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      flow_creation_deposit: {
        denom: string;
        amount: string;
      };
      min_flow_duration: {
        seconds: string;
        nanos: number;
      };
      min_duration_to_flow_start: {
        seconds: string;
        nanos: number;
      };
      token_out_fee_ratio: string;
      token_in_fee_ratio: string;
    };
  };
}
export interface MsgCreateFlowAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgCreateFlow";
  value: {
    creator: string;
    request: {
      flow_info: {
        name: string;
        description: string;
        url: string;
      };
      start_time: {
        seconds: string;
        nanos: number;
      };
      end_time: {
        seconds: string;
        nanos: number;
      };
      dist_interval: {
        seconds: string;
        nanos: number;
      };
      treasury_address: string;
      tokens_out: {
        denom: string;
        amount: string;
      };
      token_in_denom: string;
      token_out_claimable_after: {
        seconds: string;
        nanos: number;
      };
      token_in_claimable_after: {
        seconds: string;
        nanos: number;
      };
      stoppable: boolean;
      allow_immediate_token_out_claim_if_stopped: boolean;
      allow_immediate_token_in_claim_if_stopped: boolean;
    };
  };
}
export interface MsgJoinFlowAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgJoinFlow";
  value: {
    flow: string;
    address: string;
    amount: {
      denom: string;
      amount: string;
    };
    signer: string;
  };
}
export interface MsgExitFlowAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgExitFlow";
  value: {
    flow: string;
    address: string;
    amount: {
      denom: string;
      amount: string;
    };
    signer: string;
  };
}
export interface MsgSetOperatorAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgSetOperator";
  value: {
    flow: string;
    owner: string;
    operator: string;
  };
}
export interface MsgClaimTokenInAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgClaimTokenIn";
  value: {
    creator: string;
    flow: string;
    treasury_address: string;
  };
}
export interface MsgClaimTokenOutAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgClaimTokenOut";
  value: {
    flow: string;
    address: string;
    signer: string;
  };
}
export interface MsgStopFlowAminoType extends AminoMsg {
  type: "/refractedlabs.flowtrade.MsgStopFlow";
  value: {
    flow_id: string;
    creator: string;
  };
}
export const AminoConverter = {
  "/refractedlabs.flowtrade.MsgUpdateParams": {
    aminoType: "/refractedlabs.flowtrade.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          flow_creation_deposit: {
            denom: params.flowCreationDeposit.denom,
            amount: params.flowCreationDeposit.amount
          },
          min_flow_duration: (params.minFlowDuration * 1_000_000_000).toString(),
          min_duration_to_flow_start: (params.minDurationToFlowStart * 1_000_000_000).toString(),
          token_out_fee_ratio: params.tokenOutFeeRatio,
          token_in_fee_ratio: params.tokenInFeeRatio
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          flowCreationDeposit: {
            denom: params.flow_creation_deposit.denom,
            amount: params.flow_creation_deposit.amount
          },
          minFlowDuration: {
            seconds: BigInt(Math.floor(parseInt(params.min_flow_duration) / 1_000_000_000)),
            nanos: parseInt(params.min_flow_duration) % 1_000_000_000
          },
          minDurationToFlowStart: {
            seconds: BigInt(Math.floor(parseInt(params.min_duration_to_flow_start) / 1_000_000_000)),
            nanos: parseInt(params.min_duration_to_flow_start) % 1_000_000_000
          },
          tokenOutFeeRatio: params.token_out_fee_ratio,
          tokenInFeeRatio: params.token_in_fee_ratio
        }
      };
    }
  },
  "/refractedlabs.flowtrade.MsgCreateFlow": {
    aminoType: "/refractedlabs.flowtrade.MsgCreateFlow",
    toAmino: ({
      creator,
      request
    }: MsgCreateFlow): MsgCreateFlowAminoType["value"] => {
      return {
        creator,
        request: {
          flow_info: {
            name: request.flowInfo.name,
            description: request.flowInfo.description,
            url: request.flowInfo.url
          },
          start_time: request.startTime,
          end_time: request.endTime,
          dist_interval: (request.distInterval * 1_000_000_000).toString(),
          treasury_address: request.treasuryAddress,
          tokens_out: {
            denom: request.tokensOut.denom,
            amount: request.tokensOut.amount
          },
          token_in_denom: request.tokenInDenom,
          token_out_claimable_after: request.tokenOutClaimableAfter,
          token_in_claimable_after: request.tokenInClaimableAfter,
          stoppable: request.stoppable,
          allow_immediate_token_out_claim_if_stopped: request.allowImmediateTokenOutClaimIfStopped,
          allow_immediate_token_in_claim_if_stopped: request.allowImmediateTokenInClaimIfStopped
        }
      };
    },
    fromAmino: ({
      creator,
      request
    }: MsgCreateFlowAminoType["value"]): MsgCreateFlow => {
      return {
        creator,
        request: {
          flowInfo: {
            name: request.flow_info.name,
            description: request.flow_info.description,
            url: request.flow_info.url
          },
          startTime: request.start_time,
          endTime: request.end_time,
          distInterval: {
            seconds: BigInt(Math.floor(parseInt(request.dist_interval) / 1_000_000_000)),
            nanos: parseInt(request.dist_interval) % 1_000_000_000
          },
          treasuryAddress: request.treasury_address,
          tokensOut: {
            denom: request.tokens_out.denom,
            amount: request.tokens_out.amount
          },
          tokenInDenom: request.token_in_denom,
          tokenOutClaimableAfter: request.token_out_claimable_after,
          tokenInClaimableAfter: request.token_in_claimable_after,
          stoppable: request.stoppable,
          allowImmediateTokenOutClaimIfStopped: request.allow_immediate_token_out_claim_if_stopped,
          allowImmediateTokenInClaimIfStopped: request.allow_immediate_token_in_claim_if_stopped
        }
      };
    }
  },
  "/refractedlabs.flowtrade.MsgJoinFlow": {
    aminoType: "/refractedlabs.flowtrade.MsgJoinFlow",
    toAmino: ({
      flow,
      address,
      amount,
      signer
    }: MsgJoinFlow): MsgJoinFlowAminoType["value"] => {
      return {
        flow: flow.toString(),
        address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        signer
      };
    },
    fromAmino: ({
      flow,
      address,
      amount,
      signer
    }: MsgJoinFlowAminoType["value"]): MsgJoinFlow => {
      return {
        flow: BigInt(flow),
        address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        signer
      };
    }
  },
  "/refractedlabs.flowtrade.MsgExitFlow": {
    aminoType: "/refractedlabs.flowtrade.MsgExitFlow",
    toAmino: ({
      flow,
      address,
      amount,
      signer
    }: MsgExitFlow): MsgExitFlowAminoType["value"] => {
      return {
        flow: flow.toString(),
        address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        signer
      };
    },
    fromAmino: ({
      flow,
      address,
      amount,
      signer
    }: MsgExitFlowAminoType["value"]): MsgExitFlow => {
      return {
        flow: BigInt(flow),
        address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        signer
      };
    }
  },
  "/refractedlabs.flowtrade.MsgSetOperator": {
    aminoType: "/refractedlabs.flowtrade.MsgSetOperator",
    toAmino: ({
      flow,
      owner,
      operator
    }: MsgSetOperator): MsgSetOperatorAminoType["value"] => {
      return {
        flow: flow.toString(),
        owner,
        operator
      };
    },
    fromAmino: ({
      flow,
      owner,
      operator
    }: MsgSetOperatorAminoType["value"]): MsgSetOperator => {
      return {
        flow: BigInt(flow),
        owner,
        operator
      };
    }
  },
  "/refractedlabs.flowtrade.MsgClaimTokenIn": {
    aminoType: "/refractedlabs.flowtrade.MsgClaimTokenIn",
    toAmino: ({
      creator,
      flow,
      treasuryAddress
    }: MsgClaimTokenIn): MsgClaimTokenInAminoType["value"] => {
      return {
        creator,
        flow: flow.toString(),
        treasury_address: treasuryAddress
      };
    },
    fromAmino: ({
      creator,
      flow,
      treasury_address
    }: MsgClaimTokenInAminoType["value"]): MsgClaimTokenIn => {
      return {
        creator,
        flow: BigInt(flow),
        treasuryAddress: treasury_address
      };
    }
  },
  "/refractedlabs.flowtrade.MsgClaimTokenOut": {
    aminoType: "/refractedlabs.flowtrade.MsgClaimTokenOut",
    toAmino: ({
      flow,
      address,
      signer
    }: MsgClaimTokenOut): MsgClaimTokenOutAminoType["value"] => {
      return {
        flow: flow.toString(),
        address,
        signer
      };
    },
    fromAmino: ({
      flow,
      address,
      signer
    }: MsgClaimTokenOutAminoType["value"]): MsgClaimTokenOut => {
      return {
        flow: BigInt(flow),
        address,
        signer
      };
    }
  },
  "/refractedlabs.flowtrade.MsgStopFlow": {
    aminoType: "/refractedlabs.flowtrade.MsgStopFlow",
    toAmino: ({
      flowId,
      creator
    }: MsgStopFlow): MsgStopFlowAminoType["value"] => {
      return {
        flow_id: flowId.toString(),
        creator
      };
    },
    fromAmino: ({
      flow_id,
      creator
    }: MsgStopFlowAminoType["value"]): MsgStopFlow => {
      return {
        flowId: BigInt(flow_id),
        creator
      };
    }
  }
};