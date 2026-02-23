import { Config } from "@ton/blueprint";

export const config: Config = {
    contracts: [
        {
            name: "JettonMinter",
            path: "contracts/jetton_minter.tact",
        },
        {
            name: "JettonWallet",
            path: "contracts/jetton_wallet.tact",
        },
    ],
};
