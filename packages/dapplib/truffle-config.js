require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture struggle decrease magic home harvest casual equal gas'; 
let testAccounts = [
"0x3f6fa70f7d7cb3f8ba9212fd7017ca56f6a29ccc88ba82de9f061b221082cc85",
"0x105d9f7ebaa124393348bf10240da786e16c25efca19791a38ebb8c2f5649a24",
"0x3d5e8cbfb294b926eab2e4922f8012b8d1c2b61c335c23afa7fb03b39b084ae6",
"0x53236d0d7847dc52a13e6168bdcf81a32930bd56e3d2008da873256927aa002d",
"0xa81dca1a0c4d939db7e14483a964f3fcb2c20b0aa61d9c3f8748acebf7a6c784",
"0x58f186d85a6885c59c1936f6e277f91c58dabcde8954e2f7d4f75baeb8e6c04d",
"0xdbb837796e723e4c58b0a7fbdd713a648a03668c52b2ea16b6c9623baa88f5b4",
"0xa8db0b812979877c2b9409d0e4936c940d988aebcc2d48f148d60a2f54d72aa3",
"0x4dc3a5947ead23aba92e554a8901dc9daa2fc86de1a4b0c108849b5d2988853d",
"0x46c8f1420eae6f7aea63fd6ab3b27bf25b702c260f2f8c64214f3c47c7291a9a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


