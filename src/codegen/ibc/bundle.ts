import * as _81 from "./applications/interchain_accounts/controller/v1/controller";
import * as _82 from "./applications/interchain_accounts/controller/v1/query";
import * as _83 from "./applications/interchain_accounts/controller/v1/tx";
import * as _84 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _85 from "./applications/interchain_accounts/host/v1/host";
import * as _86 from "./applications/interchain_accounts/host/v1/query";
import * as _87 from "./applications/interchain_accounts/v1/account";
import * as _88 from "./applications/interchain_accounts/v1/metadata";
import * as _89 from "./applications/interchain_accounts/v1/packet";
import * as _90 from "./applications/transfer/v1/authz";
import * as _91 from "./applications/transfer/v1/genesis";
import * as _92 from "./applications/transfer/v1/query";
import * as _93 from "./applications/transfer/v1/transfer";
import * as _94 from "./applications/transfer/v1/tx";
import * as _95 from "./applications/transfer/v2/packet";
import * as _96 from "./core/channel/v1/channel";
import * as _97 from "./core/channel/v1/genesis";
import * as _98 from "./core/channel/v1/query";
import * as _99 from "./core/channel/v1/tx";
import * as _100 from "./core/client/v1/client";
import * as _101 from "./core/client/v1/genesis";
import * as _102 from "./core/client/v1/query";
import * as _103 from "./core/client/v1/tx";
import * as _104 from "./core/commitment/v1/commitment";
import * as _105 from "./core/connection/v1/connection";
import * as _106 from "./core/connection/v1/genesis";
import * as _107 from "./core/connection/v1/query";
import * as _108 from "./core/connection/v1/tx";
import * as _109 from "./lightclients/localhost/v2/localhost";
import * as _110 from "./lightclients/solomachine/v2/solomachine";
import * as _111 from "./lightclients/solomachine/v3/solomachine";
import * as _112 from "./lightclients/tendermint/v1/tendermint";
import * as _187 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _188 from "./applications/transfer/v1/tx.amino";
import * as _189 from "./core/channel/v1/tx.amino";
import * as _190 from "./core/client/v1/tx.amino";
import * as _191 from "./core/connection/v1/tx.amino";
import * as _192 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _193 from "./applications/transfer/v1/tx.registry";
import * as _194 from "./core/channel/v1/tx.registry";
import * as _195 from "./core/client/v1/tx.registry";
import * as _196 from "./core/connection/v1/tx.registry";
import * as _197 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _198 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _199 from "./applications/transfer/v1/query.rpc.Query";
import * as _200 from "./core/channel/v1/query.rpc.Query";
import * as _201 from "./core/client/v1/query.rpc.Query";
import * as _202 from "./core/connection/v1/query.rpc.Query";
import * as _203 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _204 from "./applications/transfer/v1/tx.rpc.msg";
import * as _205 from "./core/channel/v1/tx.rpc.msg";
import * as _206 from "./core/client/v1/tx.rpc.msg";
import * as _207 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._81,
          ..._82,
          ..._83,
          ..._187,
          ..._192,
          ..._197,
          ..._203
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._84
        };
      }
      export namespace host {
        export const v1 = {
          ..._85,
          ..._86,
          ..._198
        };
      }
      export const v1 = {
        ..._87,
        ..._88,
        ..._89
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._90,
        ..._91,
        ..._92,
        ..._93,
        ..._94,
        ..._188,
        ..._193,
        ..._199,
        ..._204
      };
      export const v2 = {
        ..._95
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._96,
        ..._97,
        ..._98,
        ..._99,
        ..._189,
        ..._194,
        ..._200,
        ..._205
      };
    }
    export namespace client {
      export const v1 = {
        ..._100,
        ..._101,
        ..._102,
        ..._103,
        ..._190,
        ..._195,
        ..._201,
        ..._206
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._104
      };
    }
    export namespace connection {
      export const v1 = {
        ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._191,
        ..._196,
        ..._202,
        ..._207
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._109
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._110
      };
      export const v3 = {
        ..._111
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._112
      };
    }
  }
}