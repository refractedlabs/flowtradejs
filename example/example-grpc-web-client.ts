import {refractedlabs} from "@refractedlabs/flowtradejs"
import * as console from "console";

async function main() {
    const client = await refractedlabs.ClientFactory.createGrpcWebClient({endpoint: "http://0.0.0.0:9091"});
    const data = await client.refractedlabs.flowtrade.params();
    console.log(data.params)
}

main().catch(console.error)
