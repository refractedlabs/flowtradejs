import * as _175 from "./flowtrade/v1/events";
import * as _176 from "./flowtrade/v1/flow";
import * as _177 from "./flowtrade/v1/genesis";
import * as _178 from "./flowtrade/v1/params";
import * as _179 from "./flowtrade/v1/position";
import * as _180 from "./flowtrade/v1/query";
import * as _181 from "./flowtrade/v1/tx";
import * as _318 from "./flowtrade/v1/tx.amino";
import * as _319 from "./flowtrade/v1/tx.registry";
import * as _320 from "./flowtrade/v1/query.lcd";
import * as _321 from "./flowtrade/v1/query.rpc.Query";
import * as _322 from "./flowtrade/v1/tx.rpc.msg";
import * as _329 from "./lcd";
import * as _330 from "./rpc.query";
import * as _331 from "./rpc.tx";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._318,
      ..._319,
      ..._320,
      ..._321,
      ..._322
    };
  }
  export const ClientFactory = {
    ..._329,
    ..._330,
    ..._331
  };
}