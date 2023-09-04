import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0xe02eb7BDdf5b8bFD3404A8a77B88f9706EC7B225",
    SKANDY_ADDRESS: "0x25EbbCC6fb28683C7E6735Ef6ea3F8a478BD5713",
    KANDY_ADDRESS: "0xaf9Fc588A9860F43236D6b390A538305A26AA81D",
    MIM_ADDRESS: "0x130966628846bfd36ff31a822705796e8cb8c18d",
    STAKING_ADDRESS: "0x191ea13C0B5Ba9A346681180151f806bA00d4aD2",
    STAKING_HELPER_ADDRESS: "0xf7a3e183e750A0cEEB5580949122FC24d02fD76a",
    KANDY_BONDING_CALC_ADDRESS: "0x9c3306e1Ba5f04CF98479Ed0BA6eD3684115FC18",
    TREASURY_ADDRESS: "0x56D43ea61d9098c73E6741912e9BC91B0F3CD9dF",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"0xb98007C04f475022bE681a890512518052CE6104",
    WSKANDY_ADDRESS: "0xde2C6A1A6E47752827c15Ad5e4FB4Cdfb0091F7d",
};

const BSC_TESTNET = {
    DAO_ADDRESS: "0xe02eb7BDdf5b8bFD3404A8a77B88f9706EC7B225",
    SKANDY_ADDRESS: "0x25EbbCC6fb28683C7E6735Ef6ea3F8a478BD5713",
    KANDY_ADDRESS: "0xaf9Fc588A9860F43236D6b390A538305A26AA81D",
    MIM_ADDRESS: "0x130966628846bfd36ff31a822705796e8cb8c18d",
    STAKING_ADDRESS: "0x191ea13C0B5Ba9A346681180151f806bA00d4aD2",
    STAKING_HELPER_ADDRESS: "0xf7a3e183e750A0cEEB5580949122FC24d02fD76a",
    KANDY_BONDING_CALC_ADDRESS: "0x9c3306e1Ba5f04CF98479Ed0BA6eD3684115FC18",
    TREASURY_ADDRESS: "0x56D43ea61d9098c73E6741912e9BC91B0F3CD9dF",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"0xb98007C04f475022bE681a890512518052CE6104",
    WSKANDY_ADDRESS: "0xde2C6A1A6E47752827c15Ad5e4FB4Cdfb0091F7d",
};

const DEX_BSC_TESTNET = {
    TAKAROUTER_ADDRESS: "0xf51A25E8Ed22344Efc59C0A76E63A9238a21f719"
};

const DEX_AVAX_MAINNET = {
    TAKAROUTER_ADDRESS: ""
};


export const getAddresses = (networkID: number) => {
    switch (networkID) {
        case Networks.AVAX:
            return AVAX_MAINNET;
        case Networks.BSCTEST:
            return BSC_TESTNET;
        default:
            break;
    }

    throw Error("Network don't support");
};

export const getDEXAddress = (networkID: number) => {
    switch (networkID) {
        case Networks.AVAX:
            return DEX_AVAX_MAINNET;
        case Networks.BSCTEST:
            return DEX_BSC_TESTNET;
        default:
            break;
    }
    throw Error("Network don't support");
}