import { toNano, Address } from "@ton/core";
import { JettonMinter } from "../wrappers/JettonMinter";
import { NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
    const minter = provider.open(
        new JettonMinter(Address.parse("kQC3u6PstvHwAZEGiXgyR4331DlNhoEZEbEyGLqwWMvIKfu5"))
    );

    // Адресс кошелька коллеги
    const colleagueAddress = Address.parse("0QB1xpnHxQQnl24-r3hb1-J_zP-8dKV3r3Bb8ccYW4WkNlOp");

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
