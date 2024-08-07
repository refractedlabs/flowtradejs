import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
/** Query is the cosmos.group.v1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  groupInfo(request: DeepPartial<QueryGroupInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupInfoResponse>;
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  groupPolicyInfo(request: DeepPartial<QueryGroupPolicyInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPolicyInfoResponse>;
  /** GroupMembers queries members of a group by group id. */
  groupMembers(request: DeepPartial<QueryGroupMembersRequest>, metadata?: grpc.Metadata): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  groupsByAdmin(request: DeepPartial<QueryGroupsByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByAdminResponse>;
  /** GroupPoliciesByGroup queries group policies by group id. */
  groupPoliciesByGroup(request: DeepPartial<QueryGroupPoliciesByGroupRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByGroupResponse>;
  /** GroupPoliciesByAdmin queries group policies by admin address. */
  groupPoliciesByAdmin(request: DeepPartial<QueryGroupPoliciesByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  proposalsByGroupPolicy(request: DeepPartial<QueryProposalsByGroupPolicyRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsByGroupPolicyResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter(request: DeepPartial<QueryVoteByProposalVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal id. */
  votesByProposal(request: DeepPartial<QueryVotesByProposalRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  votesByVoter(request: DeepPartial<QueryVotesByVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByVoterResponse>;
  /** GroupsByMember queries groups by member address. */
  groupsByMember(request: DeepPartial<QueryGroupsByMemberRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByMemberResponse>;
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
  /**
   * Groups queries all groups in state.
   * 
   * Since: cosmos-sdk 0.47.1
   */
  groups(request?: DeepPartial<QueryGroupsRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
    this.groups = this.groups.bind(this);
  }
  groupInfo(request: DeepPartial<QueryGroupInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupInfoResponse> {
    return this.rpc.unary(QueryGroupInfoDesc, QueryGroupInfoRequest.fromPartial(request as any), metadata);
  }
  groupPolicyInfo(request: DeepPartial<QueryGroupPolicyInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPolicyInfoResponse> {
    return this.rpc.unary(QueryGroupPolicyInfoDesc, QueryGroupPolicyInfoRequest.fromPartial(request as any), metadata);
  }
  groupMembers(request: DeepPartial<QueryGroupMembersRequest>, metadata?: grpc.Metadata): Promise<QueryGroupMembersResponse> {
    return this.rpc.unary(QueryGroupMembersDesc, QueryGroupMembersRequest.fromPartial(request as any), metadata);
  }
  groupsByAdmin(request: DeepPartial<QueryGroupsByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByAdminResponse> {
    return this.rpc.unary(QueryGroupsByAdminDesc, QueryGroupsByAdminRequest.fromPartial(request as any), metadata);
  }
  groupPoliciesByGroup(request: DeepPartial<QueryGroupPoliciesByGroupRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByGroupResponse> {
    return this.rpc.unary(QueryGroupPoliciesByGroupDesc, QueryGroupPoliciesByGroupRequest.fromPartial(request as any), metadata);
  }
  groupPoliciesByAdmin(request: DeepPartial<QueryGroupPoliciesByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByAdminResponse> {
    return this.rpc.unary(QueryGroupPoliciesByAdminDesc, QueryGroupPoliciesByAdminRequest.fromPartial(request as any), metadata);
  }
  proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse> {
    return this.rpc.unary(QueryProposalDesc, QueryProposalRequest.fromPartial(request as any), metadata);
  }
  proposalsByGroupPolicy(request: DeepPartial<QueryProposalsByGroupPolicyRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsByGroupPolicyResponse> {
    return this.rpc.unary(QueryProposalsByGroupPolicyDesc, QueryProposalsByGroupPolicyRequest.fromPartial(request as any), metadata);
  }
  voteByProposalVoter(request: DeepPartial<QueryVoteByProposalVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVoteByProposalVoterResponse> {
    return this.rpc.unary(QueryVoteByProposalVoterDesc, QueryVoteByProposalVoterRequest.fromPartial(request as any), metadata);
  }
  votesByProposal(request: DeepPartial<QueryVotesByProposalRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByProposalResponse> {
    return this.rpc.unary(QueryVotesByProposalDesc, QueryVotesByProposalRequest.fromPartial(request as any), metadata);
  }
  votesByVoter(request: DeepPartial<QueryVotesByVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByVoterResponse> {
    return this.rpc.unary(QueryVotesByVoterDesc, QueryVotesByVoterRequest.fromPartial(request as any), metadata);
  }
  groupsByMember(request: DeepPartial<QueryGroupsByMemberRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByMemberResponse> {
    return this.rpc.unary(QueryGroupsByMemberDesc, QueryGroupsByMemberRequest.fromPartial(request as any), metadata);
  }
  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse> {
    return this.rpc.unary(QueryTallyResultDesc, QueryTallyResultRequest.fromPartial(request as any), metadata);
  }
  groups(request: DeepPartial<QueryGroupsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryGroupsResponse> {
    return this.rpc.unary(QueryGroupsDesc, QueryGroupsRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.group.v1.Query"
};
export const QueryGroupInfoDesc: UnaryMethodDefinitionish = {
  methodName: "GroupInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGroupPolicyInfoDesc: UnaryMethodDefinitionish = {
  methodName: "GroupPolicyInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupPolicyInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupPolicyInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGroupMembersDesc: UnaryMethodDefinitionish = {
  methodName: "GroupMembers",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupMembersRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupMembersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGroupsByAdminDesc: UnaryMethodDefinitionish = {
  methodName: "GroupsByAdmin",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupsByAdminRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupsByAdminResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGroupPoliciesByGroupDesc: UnaryMethodDefinitionish = {
  methodName: "GroupPoliciesByGroup",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupPoliciesByGroupRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupPoliciesByGroupResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGroupPoliciesByAdminDesc: UnaryMethodDefinitionish = {
  methodName: "GroupPoliciesByAdmin",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupPoliciesByAdminRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupPoliciesByAdminResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryProposalDesc: UnaryMethodDefinitionish = {
  methodName: "Proposal",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryProposalRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryProposalsByGroupPolicyDesc: UnaryMethodDefinitionish = {
  methodName: "ProposalsByGroupPolicy",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryProposalsByGroupPolicyRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProposalsByGroupPolicyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryVoteByProposalVoterDesc: UnaryMethodDefinitionish = {
  methodName: "VoteByProposalVoter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryVoteByProposalVoterRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryVoteByProposalVoterResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryVotesByProposalDesc: UnaryMethodDefinitionish = {
  methodName: "VotesByProposal",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryVotesByProposalRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryVotesByProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryVotesByVoterDesc: UnaryMethodDefinitionish = {
  methodName: "VotesByVoter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryVotesByVoterRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryVotesByVoterResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGroupsByMemberDesc: UnaryMethodDefinitionish = {
  methodName: "GroupsByMember",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupsByMemberRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupsByMemberResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTallyResultDesc: UnaryMethodDefinitionish = {
  methodName: "TallyResult",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTallyResultRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTallyResultResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGroupsDesc: UnaryMethodDefinitionish = {
  methodName: "Groups",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGroupsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGroupsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}