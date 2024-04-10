import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/module/v1/module";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./auth/v1beta1/tx";
import * as _8 from "./authz/module/v1/module";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/module/v1/module";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./capability/module/v1/module";
import * as _26 from "./consensus/module/v1/module";
import * as _27 from "./consensus/v1/query";
import * as _28 from "./consensus/v1/tx";
import * as _29 from "./crisis/module/v1/module";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/hd/v1/hd";
import * as _32 from "./crypto/keyring/v1/record";
import * as _33 from "./crypto/multisig/keys";
import * as _34 from "./crypto/secp256k1/keys";
import * as _35 from "./crypto/secp256r1/keys";
import * as _36 from "./distribution/module/v1/module";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./evidence/module/v1/module";
import * as _42 from "./feegrant/module/v1/module";
import * as _43 from "./feegrant/v1beta1/feegrant";
import * as _44 from "./feegrant/v1beta1/genesis";
import * as _45 from "./feegrant/v1beta1/query";
import * as _46 from "./feegrant/v1beta1/tx";
import * as _47 from "./genutil/module/v1/module";
import * as _48 from "./gov/module/v1/module";
import * as _49 from "./gov/v1/genesis";
import * as _50 from "./gov/v1/gov";
import * as _51 from "./gov/v1/query";
import * as _52 from "./gov/v1/tx";
import * as _53 from "./gov/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/gov";
import * as _55 from "./gov/v1beta1/query";
import * as _56 from "./gov/v1beta1/tx";
import * as _57 from "./group/module/v1/module";
import * as _58 from "./group/v1/events";
import * as _59 from "./group/v1/genesis";
import * as _60 from "./group/v1/query";
import * as _61 from "./group/v1/tx";
import * as _62 from "./group/v1/types";
import * as _63 from "./ics23/v1/proofs";
import * as _64 from "./mint/module/v1/module";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _68 from "./mint/v1beta1/tx";
import * as _69 from "./nft/module/v1/module";
import * as _70 from "./orm/module/v1alpha1/module";
import * as _71 from "./orm/query/v1alpha1/query";
import * as _72 from "./params/module/v1/module";
import * as _73 from "./params/v1beta1/params";
import * as _74 from "./params/v1beta1/query";
import * as _75 from "./query/v1/query";
import * as _76 from "./reflection/v1/reflection";
import * as _77 from "./slashing/module/v1/module";
import * as _78 from "./staking/module/v1/module";
import * as _79 from "./staking/v1beta1/authz";
import * as _80 from "./staking/v1beta1/genesis";
import * as _81 from "./staking/v1beta1/query";
import * as _82 from "./staking/v1beta1/staking";
import * as _83 from "./staking/v1beta1/tx";
import * as _84 from "./tx/config/v1/config";
import * as _85 from "./tx/signing/v1beta1/signing";
import * as _86 from "./tx/v1beta1/service";
import * as _87 from "./tx/v1beta1/tx";
import * as _88 from "./upgrade/module/v1/module";
import * as _89 from "./upgrade/v1beta1/query";
import * as _90 from "./upgrade/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/module/v1/module";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _158 from "./auth/v1beta1/tx.amino";
import * as _159 from "./authz/v1beta1/tx.amino";
import * as _160 from "./bank/v1beta1/tx.amino";
import * as _161 from "./consensus/v1/tx.amino";
import * as _162 from "./distribution/v1beta1/tx.amino";
import * as _163 from "./feegrant/v1beta1/tx.amino";
import * as _164 from "./gov/v1/tx.amino";
import * as _165 from "./gov/v1beta1/tx.amino";
import * as _166 from "./group/v1/tx.amino";
import * as _167 from "./mint/v1beta1/tx.amino";
import * as _168 from "./staking/v1beta1/tx.amino";
import * as _169 from "./upgrade/v1beta1/tx.amino";
import * as _170 from "./vesting/v1beta1/tx.amino";
import * as _171 from "./auth/v1beta1/tx.registry";
import * as _172 from "./authz/v1beta1/tx.registry";
import * as _173 from "./bank/v1beta1/tx.registry";
import * as _174 from "./consensus/v1/tx.registry";
import * as _175 from "./distribution/v1beta1/tx.registry";
import * as _176 from "./feegrant/v1beta1/tx.registry";
import * as _177 from "./gov/v1/tx.registry";
import * as _178 from "./gov/v1beta1/tx.registry";
import * as _179 from "./group/v1/tx.registry";
import * as _180 from "./mint/v1beta1/tx.registry";
import * as _181 from "./staking/v1beta1/tx.registry";
import * as _182 from "./upgrade/v1beta1/tx.registry";
import * as _183 from "./vesting/v1beta1/tx.registry";
import * as _184 from "./auth/v1beta1/query.rpc.Query";
import * as _185 from "./authz/v1beta1/query.rpc.Query";
import * as _186 from "./bank/v1beta1/query.rpc.Query";
import * as _187 from "./base/node/v1beta1/query.rpc.Service";
import * as _188 from "./consensus/v1/query.rpc.Query";
import * as _189 from "./distribution/v1beta1/query.rpc.Query";
import * as _190 from "./feegrant/v1beta1/query.rpc.Query";
import * as _191 from "./gov/v1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./group/v1/query.rpc.Query";
import * as _194 from "./mint/v1beta1/query.rpc.Query";
import * as _195 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _196 from "./params/v1beta1/query.rpc.Query";
import * as _197 from "./staking/v1beta1/query.rpc.Query";
import * as _198 from "./tx/v1beta1/service.rpc.Service";
import * as _199 from "./upgrade/v1beta1/query.rpc.Query";
import * as _200 from "./auth/v1beta1/tx.rpc.msg";
import * as _201 from "./authz/v1beta1/tx.rpc.msg";
import * as _202 from "./bank/v1beta1/tx.rpc.msg";
import * as _203 from "./consensus/v1/tx.rpc.msg";
import * as _204 from "./distribution/v1beta1/tx.rpc.msg";
import * as _205 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _206 from "./gov/v1/tx.rpc.msg";
import * as _207 from "./gov/v1beta1/tx.rpc.msg";
import * as _208 from "./group/v1/tx.rpc.msg";
import * as _209 from "./mint/v1beta1/tx.rpc.msg";
import * as _210 from "./staking/v1beta1/tx.rpc.msg";
import * as _211 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _212 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._158,
      ..._171,
      ..._184,
      ..._200
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._159,
      ..._172,
      ..._185,
      ..._201
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._160,
      ..._173,
      ..._186,
      ..._202
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._187
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._26
      };
    }
    export const v1 = {
      ..._27,
      ..._28,
      ..._161,
      ..._174,
      ..._188,
      ..._203
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._29
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._30
    };
    export namespace hd {
      export const v1 = {
        ..._31
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._32
      };
    }
    export const multisig = {
      ..._33
    };
    export const secp256k1 = {
      ..._34
    };
    export const secp256r1 = {
      ..._35
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._36
      };
    }
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._162,
      ..._175,
      ..._189,
      ..._204
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._41
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._163,
      ..._176,
      ..._190,
      ..._205
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._47
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
    export const v1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._164,
      ..._177,
      ..._191,
      ..._206
    };
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._165,
      ..._178,
      ..._192,
      ..._207
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._166,
      ..._179,
      ..._193,
      ..._208
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._63
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._64
      };
    }
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._167,
      ..._180,
      ..._194,
      ..._209
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._70
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._71,
        ..._195
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._196
    };
  }
  export namespace query {
    export const v1 = {
      ..._75
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._76
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._77
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._168,
      ..._181,
      ..._197,
      ..._210
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._84
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._85
      };
    }
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._198
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._88
      };
    }
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._169,
      ..._182,
      ..._199,
      ..._211
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._92
      };
    }
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._170,
      ..._183,
      ..._212
    };
  }
}