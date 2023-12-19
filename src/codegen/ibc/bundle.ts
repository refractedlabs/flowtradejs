import * as _101 from "./applications/interchain_accounts/controller/v1/controller";
import * as _102 from "./applications/interchain_accounts/controller/v1/query";
import * as _103 from "./applications/interchain_accounts/controller/v1/tx";
import * as _104 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _105 from "./applications/interchain_accounts/host/v1/host";
import * as _106 from "./applications/interchain_accounts/host/v1/query";
import * as _107 from "./applications/interchain_accounts/v1/account";
import * as _108 from "./applications/interchain_accounts/v1/metadata";
import * as _109 from "./applications/interchain_accounts/v1/packet";
import * as _110 from "./applications/transfer/v1/authz";
import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _120 from "./core/client/v1/client";
import * as _121 from "./core/client/v1/genesis";
import * as _122 from "./core/client/v1/query";
import * as _123 from "./core/client/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _125 from "./core/connection/v1/connection";
import * as _126 from "./core/connection/v1/genesis";
import * as _127 from "./core/connection/v1/query";
import * as _128 from "./core/connection/v1/tx";
import * as _129 from "./lightclients/localhost/v2/localhost";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/solomachine/v3/solomachine";
import * as _132 from "./lightclients/tendermint/v1/tendermint";
import * as _207 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _208 from "./applications/transfer/v1/tx.amino";
import * as _209 from "./core/channel/v1/tx.amino";
import * as _210 from "./core/client/v1/tx.amino";
import * as _211 from "./core/connection/v1/tx.amino";
import * as _212 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _213 from "./applications/transfer/v1/tx.registry";
import * as _214 from "./core/channel/v1/tx.registry";
import * as _215 from "./core/client/v1/tx.registry";
import * as _216 from "./core/connection/v1/tx.registry";
import * as _217 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _218 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _219 from "./applications/transfer/v1/query.rpc.Query";
import * as _220 from "./core/channel/v1/query.rpc.Query";
import * as _221 from "./core/client/v1/query.rpc.Query";
import * as _222 from "./core/connection/v1/query.rpc.Query";
import * as _223 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _224 from "./applications/transfer/v1/tx.rpc.msg";
import * as _225 from "./core/channel/v1/tx.rpc.msg";
import * as _226 from "./core/client/v1/tx.rpc.msg";
import * as _227 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._101,
          ..._102,
          ..._103,
          ..._207,
          ..._212,
          ..._217,
          ..._223
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._104
        };
      }
      export namespace host {
        export const v1 = {
          ..._105,
          ..._106,
          ..._218
        };
      }
      export const v1 = {
        ..._107,
        ..._108,
        ..._109
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._208,
        ..._213,
        ..._219,
        ..._224
      };
      export const v2 = {
        ..._115
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._209,
        ..._214,
        ..._220,
        ..._225
      };
    }
    export namespace client {
      export const v1 = {
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._210,
        ..._215,
        ..._221,
        ..._226
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._124
      };
    }
    export namespace connection {
      export const v1 = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._211,
        ..._216,
        ..._222,
        ..._227
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._129
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._130
      };
      export const v3 = {
        ..._131
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._132
      };
    }
  }
}