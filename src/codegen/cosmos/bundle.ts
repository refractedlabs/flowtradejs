import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./auth/v1beta1/tx";
import * as _7 from "./authz/v1beta1/authz";
import * as _8 from "./authz/v1beta1/event";
import * as _9 from "./authz/v1beta1/genesis";
import * as _10 from "./authz/v1beta1/query";
import * as _11 from "./authz/v1beta1/tx";
import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/node/v1beta1/query";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/v1beta1/coin";
import * as _22 from "./consensus/v1/query";
import * as _23 from "./consensus/v1/tx";
import * as _24 from "./crypto/ed25519/keys";
import * as _25 from "./crypto/hd/v1/hd";
import * as _26 from "./crypto/keyring/v1/record";
import * as _27 from "./crypto/multisig/keys";
import * as _28 from "./crypto/secp256k1/keys";
import * as _29 from "./crypto/secp256r1/keys";
import * as _30 from "./distribution/v1beta1/distribution";
import * as _31 from "./distribution/v1beta1/genesis";
import * as _32 from "./distribution/v1beta1/query";
import * as _33 from "./distribution/v1beta1/tx";
import * as _34 from "./feegrant/v1beta1/feegrant";
import * as _35 from "./feegrant/v1beta1/genesis";
import * as _36 from "./feegrant/v1beta1/query";
import * as _37 from "./feegrant/v1beta1/tx";
import * as _38 from "./gov/v1/genesis";
import * as _39 from "./gov/v1/gov";
import * as _40 from "./gov/v1/query";
import * as _41 from "./gov/v1/tx";
import * as _42 from "./gov/v1beta1/genesis";
import * as _43 from "./gov/v1beta1/gov";
import * as _44 from "./gov/v1beta1/query";
import * as _45 from "./gov/v1beta1/tx";
import * as _46 from "./group/v1/events";
import * as _47 from "./group/v1/genesis";
import * as _48 from "./group/v1/query";
import * as _49 from "./group/v1/tx";
import * as _50 from "./group/v1/types";
import * as _51 from "./ics23/v1/proofs";
import * as _52 from "./mint/v1beta1/genesis";
import * as _53 from "./mint/v1beta1/mint";
import * as _54 from "./mint/v1beta1/query";
import * as _55 from "./mint/v1beta1/tx";
import * as _56 from "./orm/query/v1alpha1/query";
import * as _57 from "./params/v1beta1/params";
import * as _58 from "./params/v1beta1/query";
import * as _59 from "./query/v1/query";
import * as _60 from "./reflection/v1/reflection";
import * as _61 from "./staking/v1beta1/authz";
import * as _62 from "./staking/v1beta1/genesis";
import * as _63 from "./staking/v1beta1/query";
import * as _64 from "./staking/v1beta1/staking";
import * as _65 from "./staking/v1beta1/tx";
import * as _66 from "./tx/config/v1/config";
import * as _67 from "./tx/signing/v1beta1/signing";
import * as _68 from "./tx/v1beta1/service";
import * as _69 from "./tx/v1beta1/tx";
import * as _70 from "./upgrade/v1beta1/query";
import * as _71 from "./upgrade/v1beta1/tx";
import * as _72 from "./upgrade/v1beta1/upgrade";
import * as _73 from "./vesting/v1beta1/tx";
import * as _74 from "./vesting/v1beta1/vesting";
import * as _132 from "./auth/v1beta1/tx.amino";
import * as _133 from "./authz/v1beta1/tx.amino";
import * as _134 from "./bank/v1beta1/tx.amino";
import * as _135 from "./consensus/v1/tx.amino";
import * as _136 from "./distribution/v1beta1/tx.amino";
import * as _137 from "./feegrant/v1beta1/tx.amino";
import * as _138 from "./gov/v1/tx.amino";
import * as _139 from "./gov/v1beta1/tx.amino";
import * as _140 from "./group/v1/tx.amino";
import * as _141 from "./mint/v1beta1/tx.amino";
import * as _142 from "./staking/v1beta1/tx.amino";
import * as _143 from "./upgrade/v1beta1/tx.amino";
import * as _144 from "./vesting/v1beta1/tx.amino";
import * as _145 from "./auth/v1beta1/tx.registry";
import * as _146 from "./authz/v1beta1/tx.registry";
import * as _147 from "./bank/v1beta1/tx.registry";
import * as _148 from "./consensus/v1/tx.registry";
import * as _149 from "./distribution/v1beta1/tx.registry";
import * as _150 from "./feegrant/v1beta1/tx.registry";
import * as _151 from "./gov/v1/tx.registry";
import * as _152 from "./gov/v1beta1/tx.registry";
import * as _153 from "./group/v1/tx.registry";
import * as _154 from "./mint/v1beta1/tx.registry";
import * as _155 from "./staking/v1beta1/tx.registry";
import * as _156 from "./upgrade/v1beta1/tx.registry";
import * as _157 from "./vesting/v1beta1/tx.registry";
import * as _158 from "./auth/v1beta1/query.rpc.Query";
import * as _159 from "./authz/v1beta1/query.rpc.Query";
import * as _160 from "./bank/v1beta1/query.rpc.Query";
import * as _161 from "./base/node/v1beta1/query.rpc.Service";
import * as _162 from "./consensus/v1/query.rpc.Query";
import * as _163 from "./distribution/v1beta1/query.rpc.Query";
import * as _164 from "./feegrant/v1beta1/query.rpc.Query";
import * as _165 from "./gov/v1/query.rpc.Query";
import * as _166 from "./gov/v1beta1/query.rpc.Query";
import * as _167 from "./group/v1/query.rpc.Query";
import * as _168 from "./mint/v1beta1/query.rpc.Query";
import * as _169 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _170 from "./params/v1beta1/query.rpc.Query";
import * as _171 from "./staking/v1beta1/query.rpc.Query";
import * as _172 from "./tx/v1beta1/service.rpc.Service";
import * as _173 from "./upgrade/v1beta1/query.rpc.Query";
import * as _174 from "./auth/v1beta1/tx.rpc.msg";
import * as _175 from "./authz/v1beta1/tx.rpc.msg";
import * as _176 from "./bank/v1beta1/tx.rpc.msg";
import * as _177 from "./consensus/v1/tx.rpc.msg";
import * as _178 from "./distribution/v1beta1/tx.rpc.msg";
import * as _179 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _180 from "./gov/v1/tx.rpc.msg";
import * as _181 from "./gov/v1beta1/tx.rpc.msg";
import * as _182 from "./group/v1/tx.rpc.msg";
import * as _183 from "./mint/v1beta1/tx.rpc.msg";
import * as _184 from "./staking/v1beta1/tx.rpc.msg";
import * as _185 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _186 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._132,
      ..._145,
      ..._158,
      ..._174
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._133,
      ..._146,
      ..._159,
      ..._175
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._134,
      ..._147,
      ..._160,
      ..._176
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._18,
        ..._161
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._20
      };
    }
    export const v1beta1 = {
      ..._21
    };
  }
  export namespace consensus {
    export const v1 = {
      ..._22,
      ..._23,
      ..._135,
      ..._148,
      ..._162,
      ..._177
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._24
    };
    export namespace hd {
      export const v1 = {
        ..._25
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._26
      };
    }
    export const multisig = {
      ..._27
    };
    export const secp256k1 = {
      ..._28
    };
    export const secp256r1 = {
      ..._29
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._136,
      ..._149,
      ..._163,
      ..._178
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._137,
      ..._150,
      ..._164,
      ..._179
    };
  }
  export namespace gov {
    export const v1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._138,
      ..._151,
      ..._165,
      ..._180
    };
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._139,
      ..._152,
      ..._166,
      ..._181
    };
  }
  export namespace group {
    export const v1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._140,
      ..._153,
      ..._167,
      ..._182
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._51
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._141,
      ..._154,
      ..._168,
      ..._183
    };
  }
  export namespace orm {
    export namespace query {
      export const v1alpha1 = {
        ..._56,
        ..._169
      };
    }
  }
  export namespace params {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._170
    };
  }
  export namespace query {
    export const v1 = {
      ..._59
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._60
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._142,
      ..._155,
      ..._171,
      ..._184
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._66
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._172
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._143,
      ..._156,
      ..._173,
      ..._185
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._144,
      ..._157,
      ..._186
    };
  }
}