import * as console from "console";
import { createGrpcWebClient } from "@refractedlabs/flowtradejs";

async function main() {
    const client = await createGrpcWebClient({endpoint: "http://0.0.0.0:9091"});
    const data = await client.refractedlabs.flowtrade.v1.params();
    console.log(data.params)
}

main().catch(console.error)
