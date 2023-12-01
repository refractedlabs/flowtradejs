import {refractedlabs} from "@refractedlabs/flowtradejs"
import * as console from "console";

async function main() {
    const client = await refractedlabs.ClientFactory.createLCDClient({restEndpoint: "http://0.0.0.0:1317"});
    const data = await client.refractedlabs.flowtrade.v1.params();
    console.log(data.params)
}

main().catch(console.error)
