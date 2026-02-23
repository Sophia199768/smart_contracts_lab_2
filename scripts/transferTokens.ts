import { toNano, Address } from "@ton/core";
import { JettonMinter } from "../wrappers/JettonMinter";
import { NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
    const minter = provider.open(
        new JettonMinter(Address.parse("kQC3u6PstvHwAZEGiXgyR4331DlNhoEZEbEyGLqwWMvIKfu5"))
    );

    // Адресс кошелька коллеги
    const colleagueAddress = Address.parse("АДРЕС_КОЛЛЕГИ");

    await minter.send(
        provider.sender(),
        { value: toNano("0.05") },
        {
            $$type: "Mint",
            amount: toNano("100"),
            receiver: colleagueAddress,
        }
    );

    console.log("Sent 100 MTK to:", colleagueAddress.toString());
}
