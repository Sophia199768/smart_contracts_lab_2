import { toNano } from "@ton/core";
import { JettonMinter } from "../wrappers/JettonMinter";
import { NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
    const owner = provider.sender().address!;

    const minter = provider.open(
        await JettonMinter.fromInit(owner)
    );

    await minter.send(
        provider.sender(),
        { value: toNano("0.5") },
        { $$type: "Deploy", queryId: 0n }
    );

    await provider.waitForDeploy(minter.address);
    console.log("JettonMinter deployed at:", minter.address.toString());
}
