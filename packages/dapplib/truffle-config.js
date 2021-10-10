require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind history imitate private fortune twelve'; 
let testAccounts = [
"0xae69c6ff828ea4e139254805891c0b73225c47a5b46dc1f3a264db682648d28f",
"0x2c2d8a62e26b2dfb14138236976a0ad73baf6b059b9236f4b292b79bc37669c9",
"0x079f3973de8701f61759decaa07c3b3ea04045ff5658d084a5f6de03b6df0f49",
"0xa8f3aa818b0b73bd96efe2045f1ef784528b0c65451b63425ce55e2de46ef24d",
"0x7f0c023d19f859d75b44b4a95b141eaed31129f6642acebfde201e4b77d04637",
"0xc59fece8df6968f51c58438cb39354f98574c9307fa194a62dcea9371edcabeb",
"0x2932a50d437abee2339e9b138060c09482596bc37d6ebd2bd3dd7a6fc6d496ed",
"0x3e1d467787a09112c231bb91bd588260f2d76ab7df0998f81b896e6360c78e60",
"0x04941ee5f13f232e64d4b38d5b8d0108a2dfbdaeaf1fd50d4c7cdb5c415d4d4a",
"0xd0bd7e235d7e9563c847b0d154b62acab47f1af43628e82d85411a4c911f1e83"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

