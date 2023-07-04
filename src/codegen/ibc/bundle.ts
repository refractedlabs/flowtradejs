import * as _116 from "./applications/fee/v1/ack";
import * as _117 from "./applications/fee/v1/fee";
import * as _118 from "./applications/fee/v1/genesis";
import * as _119 from "./applications/fee/v1/metadata";
import * as _120 from "./applications/fee/v1/query";
import * as _121 from "./applications/fee/v1/tx";
import * as _122 from "./applications/interchain_accounts/controller/v1/controller";
import * as _123 from "./applications/interchain_accounts/controller/v1/query";
import * as _124 from "./applications/interchain_accounts/controller/v1/tx";
import * as _125 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _126 from "./applications/interchain_accounts/host/v1/host";
import * as _127 from "./applications/interchain_accounts/host/v1/query";
import * as _128 from "./applications/interchain_accounts/v1/account";
import * as _129 from "./applications/interchain_accounts/v1/metadata";
import * as _130 from "./applications/interchain_accounts/v1/packet";
import * as _131 from "./applications/transfer/v1/authz";
import * as _132 from "./applications/transfer/v1/genesis";
import * as _133 from "./applications/transfer/v1/query";
import * as _134 from "./applications/transfer/v1/transfer";
import * as _135 from "./applications/transfer/v1/tx";
import * as _136 from "./applications/transfer/v2/packet";
import * as _137 from "./core/channel/v1/channel";
import * as _138 from "./core/channel/v1/genesis";
import * as _139 from "./core/channel/v1/query";
import * as _140 from "./core/channel/v1/tx";
import * as _141 from "./core/client/v1/client";
import * as _142 from "./core/client/v1/genesis";
import * as _143 from "./core/client/v1/query";
import * as _144 from "./core/client/v1/tx";
import * as _145 from "./core/commitment/v1/commitment";
import * as _146 from "./core/connection/v1/connection";
import * as _147 from "./core/connection/v1/genesis";
import * as _148 from "./core/connection/v1/query";
import * as _149 from "./core/connection/v1/tx";
import * as _150 from "./core/types/v1/genesis";
import * as _151 from "./lightclients/solomachine/v2/solomachine";
import * as _152 from "./lightclients/solomachine/v3/solomachine";
import * as _153 from "./lightclients/tendermint/v1/tendermint";
import * as _264 from "./applications/fee/v1/tx.amino";
import * as _265 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _266 from "./applications/transfer/v1/tx.amino";
import * as _267 from "./core/channel/v1/tx.amino";
import * as _268 from "./core/client/v1/tx.amino";
import * as _269 from "./core/connection/v1/tx.amino";
import * as _270 from "./applications/fee/v1/tx.registry";
import * as _271 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _272 from "./applications/transfer/v1/tx.registry";
import * as _273 from "./core/channel/v1/tx.registry";
import * as _274 from "./core/client/v1/tx.registry";
import * as _275 from "./core/connection/v1/tx.registry";
import * as _276 from "./applications/fee/v1/query.lcd";
import * as _277 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _278 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _279 from "./applications/transfer/v1/query.lcd";
import * as _280 from "./core/channel/v1/query.lcd";
import * as _281 from "./core/client/v1/query.lcd";
import * as _282 from "./core/connection/v1/query.lcd";
import * as _283 from "./applications/fee/v1/query.rpc.Query";
import * as _284 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _285 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _286 from "./applications/transfer/v1/query.rpc.Query";
import * as _287 from "./core/channel/v1/query.rpc.Query";
import * as _288 from "./core/client/v1/query.rpc.Query";
import * as _289 from "./core/connection/v1/query.rpc.Query";
import * as _290 from "./applications/fee/v1/tx.rpc.msg";
import * as _291 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _292 from "./applications/transfer/v1/tx.rpc.msg";
import * as _293 from "./core/channel/v1/tx.rpc.msg";
import * as _294 from "./core/client/v1/tx.rpc.msg";
import * as _295 from "./core/connection/v1/tx.rpc.msg";
import * as _304 from "./lcd";
import * as _305 from "./rpc.query";
import * as _306 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._264,
        ..._270,
        ..._276,
        ..._283,
        ..._290
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._122,
          ..._123,
          ..._124,
          ..._265,
          ..._271,
          ..._277,
          ..._284,
          ..._291
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._125
        };
      }
      export namespace host {
        export const v1 = {
          ..._126,
          ..._127,
          ..._278,
          ..._285
        };
      }
      export const v1 = {
        ..._128,
        ..._129,
        ..._130
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._135,
        ..._266,
        ..._272,
        ..._279,
        ..._286,
        ..._292
      };
      export const v2 = {
        ..._136
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._267,
        ..._273,
        ..._280,
        ..._287,
        ..._293
      };
    }
    export namespace client {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._268,
        ..._274,
        ..._281,
        ..._288,
        ..._294
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._145
      };
    }
    export namespace connection {
      export const v1 = {
        ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._269,
        ..._275,
        ..._282,
        ..._289,
        ..._295
      };
    }
    export namespace types {
      export const v1 = {
        ..._150
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._151
      };
      export const v3 = {
        ..._152
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._153
      };
    }
  }
  export const ClientFactory = {
    ..._304,
    ..._305,
    ..._306
  };
}