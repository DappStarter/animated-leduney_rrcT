require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember million good problem off vibrant'; 
let testAccounts = [
"0x044b8a769ddb06d54adafefb3840e1ce64dee00633c95868905a5ac58211c943",
"0x34a47333e8e6f86f55a75c4e2fb09c5cad4a55b1ed29aa197ca7dbc3e59e7fe9",
"0xbc36cd54134a2f61692f8c2d10722b2169d8ec252ebfc22b3e423e7030736faa",
"0x01307e0dc226fc36173e6ca0d834ac7ac07e53ea881868bf7179ef982dd80521",
"0x411f5cf2739ab6e2a29e91d6b69c0cec92b3aca72d36d9d7dfde9003492eefc5",
"0xac30b401ffc76a0bbff7ff8ff31bb9f7affde02cc6c39b4c7e9bde0e3363ef76",
"0x82355b6ab24c55fc2deef005caf8f984cc00d56de35c7379ce929fb279d4d5c6",
"0x14d650f2d88e6acd014b0ff3134cf31a58a0d93a7a05afb0dabf121d4d0dc2f1",
"0x5c07dc124ba110273e1af48fe8d06131d70b969e53cfe770e18b3934af12d702",
"0x981f71f9b3206e5b9e584f0a562505f33947cbdf4f73ce92e7003df270b02385"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

