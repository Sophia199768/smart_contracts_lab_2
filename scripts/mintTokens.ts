import { toNano, Address } from "@ton/core";
import { JettonMinter } from "../wrappers/JettonMinter";
import { NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
    const minter = provider.open(
        new JettonMinter(Address.parse("kQC_UVDOljGhkcZ-btfYt8M86RgmyNQfPXYuvR1Z8IZwaXaR"))
    );

    const owner = provider.sender().address!;

    await minter.send(
        provider.sender(),
        { value: toNano("0.05") },
        {
            $$type: "Mint",
            amount: toNano("1000"),
            receiver: owner,
        }
    );

    console.log("Minted 1000 MTK to:", owner.toString());
}
